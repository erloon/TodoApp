using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.Documents.Linq;
using Microsoft.Extensions.Options;
using TodoApp.API.Model;

namespace TodoApp.API.Infrastructure
{
    public class Repository<T> : IRepository<T> where T : UserDocument
    {
        private readonly TodoOptions _options;
        private DocumentClient _documentClient;
        private Uri _documentCollectionUri;

        public Repository(IOptions<TodoOptions> options)
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
        public async Task<TaskItem> Add(T item)
        {
            var document = await _documentClient.CreateDocumentAsync(_documentCollectionUri, item);
            TaskItem result = (dynamic)document.Resource;
            return result;
        }

        public async Task Delete(string id)
        {
            await _documentClient.DeleteDocumentAsync(CreateDocumentUri(id));
        }

        public async Task<TaskItem> Update(T item, string id)
        {
            var document = await _documentClient.ReplaceDocumentAsync(CreateDocumentUri(id), item);
            TaskItem result = (dynamic)document.Resource;
            return result;
        }

        public async Task<IEnumerable<T>> Get(Guid userId)
        {
            IDocumentQuery<T> query = _documentClient.CreateDocumentQuery<T>(
                    UriFactory.CreateDocumentCollectionUri(_options.DatabaseId, _options.CollectionId))
                    .Where(x => x.UserId == userId).AsDocumentQuery();

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
        Task<TaskItem> Add(T item);
        Task Delete(string id);
        Task<TaskItem> Update(T item, string id);
        Task<IEnumerable<T>> Get(Guid userId);
    }
}