import { IsBoolean, IsNumberString, IsString } from '@nestjs/class-validator';

export class CreateUserDto {
    //   @IsNumberString()
    //   id: number;

    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsString()
    email: string;

    @IsBoolean()
    is_active: string;

    @IsString()
    password: string;

    @IsNumberString()
    mobile_number: string;

}


