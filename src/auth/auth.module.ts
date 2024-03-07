import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PasswordService } from './services/password.service';
// import { jwtConstants } from './constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';


@Module({
  imports: [
    UserModule,
    // JwtModule.registerAsync({
    //   global:true,
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     secret: configService.get<string>('JWT_SECRET'),
    //   }),
    //   inject: [ConfigService],
    // }),
    JwtModule.register({
      // global: true,
      secret: 'kjdfkjdkf',
      signOptions: { expiresIn: '60s' }
    })
  ],
  providers: [
    AuthService,
     PasswordService,
  //     {
  //   provide: APP_GUARD,
  //   useClass: AuthGuard,
  // },
],
  controllers: [AuthController],
  exports: [AuthService, 
    PasswordService,
    // JwtService, 
    JwtModule]
})
export class AuthModule {}
