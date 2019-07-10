using System;
using Newtonsoft.Json;

namespace TodoApp.API.Model
{
    public class TaskItem
    {
        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; set; }

        [JsonProperty(PropertyName = "userid")]
        public Guid UserId { get; set; }

        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "create")]
        public DateTime Create { get; set; }

        [JsonProperty(PropertyName = "end")]
        public DateTime? End { get; set; }

        [JsonProperty(PropertyName = "isDone")]
        public bool? IsDone { get; set; }
    }
}