import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todosRepository: Repository<Todo>,
  ) {}

  create(createTodoDto: CreateTodoDto, owner: User): Promise<Todo> {
    const todo = new Todo();
    todo.content = createTodoDto.content;
    todo.owner = owner;
    return this.todosRepository.save(todo);
  }

  findAllOfUsers(owner: User): Promise<Todo[]> {
    return this.todosRepository.find({
      owner,
    });
  }

  async remove(id: string): Promise<void> {
    this.todosRepository.delete(id);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<void> {
    this.todosRepository.update(id, updateTodoDto);
  }
}
