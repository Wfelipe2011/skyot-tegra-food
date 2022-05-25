import { ApiProperty } from '@nestjs/swagger';

export class ProductsDto {
  @ApiProperty({ example: 'Pizza de mussarela' })
  title: string;

  @ApiProperty({ example: 45.5 })
  price: number;

  @ApiProperty({
    example: 'Feito com molho de tomate especial',
    required: false,
  })
  description?: string;

  @ApiProperty({ example: 'https://...', required: false })
  image?: string;

  @ApiProperty({ example: 'salgado' })
  category?: string;
}
