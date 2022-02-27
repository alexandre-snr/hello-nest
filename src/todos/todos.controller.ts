import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoDto } from './dto/todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
@UseGuards(JwtAuthGuard)
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(@Request() req): Promise<TodoDto[]> {
    return this.todosService.findAllOfUsers(req.user);
  }

  @Post()
  createTodo(@Body() body: CreateTodoDto, @Request() req): Promise<TodoDto> {
    return this.todosService.create(body, req.user);
  }

  @Delete('/:id')
  deleteTodo(@Param() id: string): Promise<void> {
    return this.todosService.remove(id);
  }

  @Patch('/:id')
  updateTodo(@Param() id: string, @Body() body: UpdateTodoDto): Promise<void> {
    return this.todosService.update(id, body);
  }
}
