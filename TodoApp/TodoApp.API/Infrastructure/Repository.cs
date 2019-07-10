using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.Documents.Linq;
using Microsoft.Extensions.Options;

namespace TodoApp.API.Infrastructure
{
    public abstract class Repository<T> : IRepository<T> where T : class
    {
        private readonly TodoOptions _options;
        private DocumentClient _documentClient;
        private Uri _documentCollectionUri;

        protected Repository(IOptions<TodoOptions> options)
        {
            _options = options.Value;
            _documentClient = new DocumentClient(new Uri(_options.EndpointUri), _options.PrimaryKey);
            CreateDocumentCollectionUri();
            CreateDatabaseIfNotExistsAsync().Wait();
            CreateCollectionIfNotExistsAsync().Wait();
        }

        private void CreateDocumentCollectionUri()
        {
            _documentCollectionUri = UriFactory.CreateDocumentCollectionUri(_options.DatabaseId, _options.CollectionId);
        }
        private Uri CreateDocumentUri(string id)
        {
            return UriFactory.CreateDocumentUri(_options.DatabaseId, _options.CollectionId, id);
        }

        private async Task CreateDatabaseIfNotExistsAsync()
        {
            await _documentClient.CreateDatabaseIfNotExistsAsync(new Database() { Id = _options.DatabaseId });
        }

        private async Task CreateCollectionIfNotExistsAsync()
        {
            var uri = UriFactory.CreateDatabaseUri(_options.DatabaseId);
            await _documentClient.CreateDocumentCollectionIfNotExistsAsync(
                uri,
                new DocumentCollection() { Id = _options.CollectionId },
                new RequestOptions() { OfferThroughput = 1000 });
        }
        public async Task<Document> Add(T item)
        {
            return await _documentClient.CreateDocumentAsync(_documentCollectionUri, item);
        }

        public async Task Delete(string id)
        {
            await _documentClient.DeleteDocumentAsync(CreateDocumentUri(id));
        }

        public async Task<Document> Update(T item, string id)
        {
            return await _documentClient.ReplaceDocumentAsync(CreateDocumentUri(id), item);
        }

        public async Task<IEnumerable<T>> Get()
        {
            IDocumentQuery<T> query = _documentClient.CreateDocumentQuery<T>(
                    UriFactory.CreateDocumentCollectionUri(_options.DatabaseId, _options.CollectionId)).AsDocumentQuery();

            List<T> results = new List<T>();
            while (query.HasMoreResults)
            {
                results.AddRange(await query.ExecuteNextAsync<T>());
            }

            return results;
        }
    }

    public interface IRepository<T> where T : class
    {
        Task<Document> Add(T item);
        Task Delete(string id);
        Task<Document> Update(T item, string id);
        Task<IEnumerable<T>> Get();
    }
}