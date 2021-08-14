import { ApiProperty } from '@nestjs/swagger';

export class SearchArticleDto {
  @ApiProperty({ required: false })
  author: string;

  @ApiProperty({ required: false })
  query: string;
}
