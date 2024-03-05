import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): string {
    return this.userService.getHello();
  }

  @Post()
  postUser(@Body() body: any)  {
    console.log(body)
  }
}
