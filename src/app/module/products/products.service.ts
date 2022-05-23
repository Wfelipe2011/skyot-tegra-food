import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ProductsDto } from './dto/products.dto';
import { ProductRepository } from 'src/infra/database/repository/products.repository';
import { IProductsQuery } from './dto/products.interface';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository) { }

  async create(createProductDto: ProductsDto) {
    try {
      return await this.productRepository.save(createProductDto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(params: IProductsQuery) {
    try {
      const data = await this.productRepository.findAll();
      if (params.order == 'ASC') return data;
      return data.sort((a, b) => b.id - a.id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      return await this.productRepository.findOne(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: number, updateProductDto: ProductsDto) {
    try {
      return await this.productRepository.update(id, updateProductDto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.productRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
