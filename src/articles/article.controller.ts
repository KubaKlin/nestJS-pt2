import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ArticleService } from './article.service';
import type { ArticleDto } from './article.dto';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() article: ArticleDto) {
    return this.articleService.create(article);
  }

  @Get()
  getAll() {
    return this.articleService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.articleService.getById(id);
  }
}
