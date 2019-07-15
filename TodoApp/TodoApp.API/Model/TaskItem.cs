using System;
using Newtonsoft.Json;
using TodoApp.API.Infrastructure;

namespace TodoApp.API.Model
{
    public class TaskItem : UserDocument
    {
        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; }

        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "create")]
        public DateTime Create { get; set; }

        [JsonProperty(PropertyName = "end")]
        public DateTime? End { get; set; }

        [JsonProperty(PropertyName = "isDone")]
        public bool? IsDone { get; set; }

        public TaskItem()
        {
            this.Id = Guid.NewGuid();
        }
    }
}