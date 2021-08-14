import { Inject, Injectable } from '@nestjs/common';
import { Repository, Like } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { SearchArticleDto } from './dto/search-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @Inject('ARTICLE_REPOSITORY')
    private articlesRepository: Repository<Article>,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    return this.articlesRepository.save(createArticleDto)
  }

  findAll(query: SearchArticleDto): Promise<Article[]> {
    if (typeof query.query === 'undefined') {
      query.query = '';
    }

    if (typeof query.author === 'undefined') {
      query.author = '';
    }

    return this.articlesRepository.find({
      order: {
        id: "DESC",
      },
      where: {
        title: Like(`%${query.query}%`),
        body: Like(`%${query.query}%`),
        author: Like(`%${query.author}%`),
      }
    });
  }

  findOne(id: string): Promise<Article> {
    return this.articlesRepository.findOne(id);
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.articlesRepository.update(id, updateArticleDto)
  }

  async remove(id: number): Promise<void> {
    await this.articlesRepository.delete(id);
  }
}
