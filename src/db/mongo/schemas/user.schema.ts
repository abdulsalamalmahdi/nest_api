import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString, IsNumberString } from '@nestjs/class-validator';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps:{createdAt: 'created_at', updatedAt: 'updated_at'}})
export class User {


    @Prop({
        auto: true,
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    })
    _id: number;

    @Prop()
    first_name: string;

    @Prop()
    last_name: string;


    @Prop()
    mobile_number: string;


    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    is_active: boolean;

    @IsString()
    @Prop()
    created_at: string
     
    @IsString()
    @Prop()
    updated_at: string

}

export const UserSchema = SchemaFactory.createForClass(User);