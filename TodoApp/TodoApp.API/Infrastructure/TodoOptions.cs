namespace TodoApp.API.Infrastructure
{
    public class TodoOptions
    {
        public string EndpointUri { get; set; }
        public string PrimaryKey { get; set; }
        public string DatabaseId { get; set; }
        public string CollectionId { get; set; }
    }
}