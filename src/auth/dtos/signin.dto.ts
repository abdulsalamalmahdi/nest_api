import { IsNumber, IsNotEmpty, IsString } from '@nestjs/class-validator';

export class SigninDto {
  @IsString()
  username: string;

  @IsNotEmpty()
  password: string;
}
