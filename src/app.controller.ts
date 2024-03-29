import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UseGuards } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

 
  @Post()
  postHello(@Body() body: any)  {
    console.log(body)
  }
}
