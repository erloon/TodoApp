using System;
using Newtonsoft.Json;

namespace TodoApp.API.Infrastructure
{
    public abstract class UserDocument
    {
        [JsonProperty(PropertyName = "userid")]
        public Guid UserId { get; set; }
    }
}