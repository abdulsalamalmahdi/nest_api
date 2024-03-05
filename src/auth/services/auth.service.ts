import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './password.service';
import { EMPTY_STRING } from '../../app/utils/constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private passwordService: PasswordService,
  ) { }

  async login(
    mobileNumber: number,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findByMobileNumber(mobileNumber);

    const isValidPassword = await this.validateUserPassword(password, user?.password ?? EMPTY_STRING);

    if (!isValidPassword) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user?.id, mobileNumber: user?.mobile_number };
    const token = await this.jwtService.signAsync(payload);

    return { access_token: token };
  }

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }

  private async validateUserPassword(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    if (!plainTextPassword || !hashedPassword) {
      return false;
    }

    return await this.passwordService.comparePasswords(plainTextPassword, hashedPassword,);
  }
}
