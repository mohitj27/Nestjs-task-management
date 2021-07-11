import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './create-task.dto';
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

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }
  //   @Post()
  //   createTask(@Body() body) {
  //     console.log('body', body);
  //   }
  //   alternate method to call post request
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
}
