using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TodoApp.API.Infrastructure;
using TodoApp.API.Model;

namespace TodoApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly IRepository<TaskItem> _taskRepository;

        public TasksController(IRepository<TaskItem> taskRepository)
        {
            _taskRepository = taskRepository ?? throw new ArgumentNullException(nameof(taskRepository));
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> Tasks(string userId)
        {
            if (!Guid.TryParse(userId, out Guid userGuid))
            {
                return BadRequest("Wrong userId");
            }

            var result = await _taskRepository.Get(userGuid);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Tasks([FromBody] List<TaskItem> taskItems)
        {
            List<TaskItem> result = new List<TaskItem>();
            if (taskItems != null && taskItems.Count != 0)
            {
                foreach (var taskItem in taskItems)
                {
                    var document = await _taskRepository.Add(taskItem);
                    result.Add(document);
                }

                return Ok(result);
            }

            return NoContent();
        }

        [HttpPut]
        public async Task<IActionResult> Tasks(TaskItem taskItem)
        {
            if (taskItem == null)
                return BadRequest("TaskItem is null");
            return Ok(await _taskRepository.Update(taskItem, taskItem.Id.ToString()));
        }
    }
}