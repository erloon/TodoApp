using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoApp.API.Infrastructure;
using TodoApp.API.Model;

namespace TodoApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly IRepository<TaskItem> _taskRepository;

        public TaskController(IRepository<TaskItem> taskRepository)
        {
            _taskRepository = taskRepository ?? throw new ArgumentNullException(nameof(taskRepository));
        }

        [HttpGet]
        public async Task<IActionResult> Tasks()
        {
            var result = await _taskRepository.Get();
            return Ok(result);
        }
    }
}