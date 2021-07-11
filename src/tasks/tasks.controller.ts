import { Body, Controller, Get, Post } from '@nestjs/common';
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
  //   @Post()
  //   createTask(@Body() body) {
  //     console.log('body', body);
  //   }
  //   alternate method to call post request
  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    console.log('title', title);
    console.log('description', description);
    return this.tasksService.createTask(title, description);
  }
}
