import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { LoginDto } from './dtos/login.dto';
import { FindOneDTO } from 'src/data-access/dtos/find-one.dto';

@Controller({
  path: 'authentication',
  version: '1',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    const { mobileNumber, password } = loginDto;
    return this.authService.login(mobileNumber, password);
  }

  @Get('users/:id')
  findOne(@Param() params: FindOneDTO) {
    const { id } = params;
    return { id };
  }
}
