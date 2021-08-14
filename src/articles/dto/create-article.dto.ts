import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty()
  author: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  body: string;
}
