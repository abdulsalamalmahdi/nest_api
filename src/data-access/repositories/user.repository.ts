import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/data-access/entities/user.entity';

@Injectable()
export class UserRepository {
    constructor(
        // @InjectModel(User)
        // private entity: typeof User,
    ) { }

    async findAll(): Promise<User[] | null> {
        // return this.entity.findAll();
        return null;
    }

    async findOne(id: number): Promise<User | null> {
        // return this.entity.findOne({
        //     where: {
        //         id,
        //     },
        // });
        return null;
    }

    async remove(id: number): Promise<void> {
        const user = await this.findOne(id);
        await user?.destroy();
    }

    
    async findByMobileNumber(mobileNumber: number): Promise<User | null> {
        // return await this.entity.findOne({
        //     where: {
        //         mobile_number: mobileNumber,
        //     },
        // });
        return null;
    }
}
