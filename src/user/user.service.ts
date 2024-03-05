import { Injectable } from '@nestjs/common';
import { User } from 'src/data-access/entities/user.entity';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello World!';
  }

  findOne(user): User |null {
    return null;
  }

  async findByMobileNumber(mobileNumber: number): Promise<User | null> {
    // return this.userRepository.findByMobileNumber(mobileNumber);
    return null;
  }
}
