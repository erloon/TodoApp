using System;

namespace TodoApp.API.Model
{
    public class TaskItem
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Name { get; set; }
        public DateTime Create { get; set; }
        public DateTime? End { get; set; }
        public bool? IsDone { get; set; }
    }
}