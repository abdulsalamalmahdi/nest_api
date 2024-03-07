import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto'
import {User, UserSchema} from 'src/db/mongo/schemas/user.schema'
import { promises } from 'dns';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>){}

  getHello(): string {
    return 'Hello World!';
  }

  findOne(user ): Promise<User| null> {
    const foundUser=  this.userModel.findOne({first_name: user });
    return foundUser;
  }

  async findByMobileNumber(mobileNumber: number): Promise<User | null> {
    // return this.userRepository.findByMobileNumber(mobileNumber);
    return null;
  }

 async create(createUserDto: CreateUserDto): Promise<User>{
    const createdUser = new this.userModel(createUserDto).save(); 
    return createdUser;

 }
}
