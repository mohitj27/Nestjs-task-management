import { Controller, Get } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  // long way tasksService:TasksService  and this will be done outside the class
  // this.tasksService = tasksService    this should declare in the class though
  constructor(private tasksService: TasksService) {} // short and simple way to call task service
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
}
