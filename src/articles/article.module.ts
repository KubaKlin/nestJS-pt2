import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { UniqueIdModule } from '../uniqueId/unique-id.module';

@Module({
  imports: [UniqueIdModule],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
