import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/db/mongo/schemas/user.schema';
import { AuthService } from 'src/auth/services/auth.service';
import { PasswordService } from 'src/auth/services/password.service';
import { JwtModule, JwtService } from '@nestjs/jwt';







@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
  // AuthModule,
],
  controllers: [UserController],
  providers: [UserService,
    AuthService,
    PasswordService,
    JwtModule,
    JwtService
 //     {
 //   provide: APP_GUARD,
 //   useClass: AuthGuard,
 // },
  ],
  exports:[MongooseModule, UserService]
})
export class UserModule {}
