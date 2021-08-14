import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { DatabaseModule } from '../database/database.module';
import { articleProviders } from './articles.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ArticlesController],
  providers: [
    ...articleProviders,
    ArticlesService,
  ]
})
export class ArticlesModule {}
