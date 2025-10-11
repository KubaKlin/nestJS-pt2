import { Injectable, NotFoundException } from '@nestjs/common';
import { Article } from './article';
import { UniqueIdService } from '../uniqueId/unique-id.service';
import { ArticleDto } from './article.dto';

@Injectable()
export class ArticleService {
  private articles: Article[] = [];

  constructor(private readonly uniqueIdService: UniqueIdService) {}

  create(article: ArticleDto) {
    const newArticle = {
      id: this.uniqueIdService.generate(),
      ...article,
    };

    this.articles.push(newArticle);
    return newArticle;
  }

  getAll() {
    return this.articles;
  }

  getById(id: string) {
    const article = this.articles.find((article) => article.id === id);

    if (!article) {
      throw new NotFoundException();
    }

    return article;
  }
}
