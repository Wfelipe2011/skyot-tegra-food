import { ApiProperty } from '@nestjs/swagger';

export class ProductsDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  price: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  categoryId?: number;
}
