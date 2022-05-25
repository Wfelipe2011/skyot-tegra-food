import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { ProductsDto } from './dto/products.dto';
import { IProductsQuery } from './dto/products.interface';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  @ApiOperation({ summary: 'Save products' })
  async create(@Body() createProductDto: ProductsDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiQuery({ name: 'min', example: 10, required: false })
  @ApiQuery({ name: 'max', example: 15, required: false })
  @ApiQuery({ name: 'category', example: "salgado", required: false })
  @ApiQuery({ name: 'order', enum: ['ASC', 'DESC'], required: false })
  @ApiOperation({ summary: 'Find products' })
  async findAll(@Query() params: IProductsQuery) {
    return this.productsService.findAll(params);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find products by id' })
  async findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update products' })
  async update(@Param('id') id: string, @Body() updateProductDto: ProductsDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete products by id' })
  async remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
