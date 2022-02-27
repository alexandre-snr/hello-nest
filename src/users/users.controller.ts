import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('auth/register')
  async login(@Body() body: CreateUserDto): Promise<any> {
    await this.usersService.create(body);
    return { success: true };
  }
}
