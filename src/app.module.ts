import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsModule } from './tags/tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '@app/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
