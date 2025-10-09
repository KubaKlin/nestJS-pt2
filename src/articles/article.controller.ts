import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ArticleService } from './article.service';
import * as articleDto from './article.dto';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() article: articleDto.ArticleDto) {
    return this.articleService.create(article);
  }

  @Get()
  getAll() {
    return this.articleService.getAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: string) {
    return this.articleService.getById(id);
  }
}
