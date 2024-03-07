import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { LoginDto } from './dtos/login.dto';
import { SigninDto } from './dtos/signin.dto';
import { SignupDto } from './dtos/signup.dto';
import { FindOneDTO } from 'src/data-access/dtos/find-one.dto';
import { Public } from './decorators/public.decorator';

// @Controller({
//   path: 'auth',
//   version: '1',
// })
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    const { mobileNumber, password } = loginDto;
    return this.authService.login(mobileNumber, password);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('ping')
  ping() {
    // const { mobileNumber, password } = loginDto;
    // return this.authService.login(mobileNumber, password);
    return "ding ding ding!"
  }

  @Get('users/:id')
  findOne(@Param() params: FindOneDTO) {
    const { id } = params;
    return { id };
  }


  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() signinDto: SigninDto) {
    const { username, password } = signinDto;
    return this.authService.signIn(username, password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signUp(@Body() signunDto: SignupDto) {
    const { firstName, lastName, email, password } = signunDto;
    return this.authService.signUp(firstName, lastName, email, password);
  }

}
