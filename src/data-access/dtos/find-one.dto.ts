import { IsNumberString } from '@nestjs/class-validator';

export class FindOneDTO {
  @IsNumberString()
  id: number;
}

 
