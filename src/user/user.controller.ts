import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './services/user.service';
import { CreateUserDto } from './services/dtos/create-user.dto';
import { User } from 'src/db/mongo/schemas/user.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): string {
    return this.userService.getHello();
  }
  
  @UseGuards(AuthGuard)
  @Post()
 async postUser(@Body() body: CreateUserDto): Promise<User>  {
    return await this.userService.create(body)
  }
}
