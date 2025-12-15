import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: 'sasa',
  database: 'NestDB',
  entities: [User],
  synchronize: true,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
