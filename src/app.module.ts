import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IpController } from './ip.controller';
import { IpService } from './ip.service';

@Module({
  imports: [],
  controllers: [AppController, IpController],
  providers: [AppService, IpService],
})
export class AppModule { }
