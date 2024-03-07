import { IsNumber, IsNotEmpty, IsString } from '@nestjs/class-validator';

export class SignupDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsNotEmpty()
  password: string;
}
