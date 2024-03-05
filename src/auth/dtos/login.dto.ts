import { IsNumber, IsNotEmpty } from '@nestjs/class-validator';

export class LoginDto {
  @IsNumber()
  mobileNumber: number;

  @IsNotEmpty()
  password: string;
}
