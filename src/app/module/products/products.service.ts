import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ProductsDto } from './dto/products.dto';
import { ProductRepository } from 'src/infra/database/repository/products.repository';
import { IProductsQuery } from './dto/products.interface';
import { Between, Like } from 'typeorm';

const qtdPage: number = 10;

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
    const { queryConfig } = this.getQueryConfig(params);
    try {
      const [data, pages] = await this.productRepository.findAndCount(queryConfig);
      return { data, pages: Math.ceil(pages / qtdPage) }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  private getQueryConfig({ page, order, category, filter, min, max, }: IProductsQuery) {
    const skip: number = qtdPage * (page - 1);
    let queryConfig = {
      order: {
        id: order === 'DESC' ? 'DESC' : 'ASC',
      } as {},
      take: qtdPage,
      skip,
      where: [],
    };
    if (category) {
      queryConfig.where.push({ category })
    }
    if (min && max) {
      queryConfig.where.push({ price: Between(min, max) })
    }
    if (filter) {
      queryConfig.where.push({ title: Like(`%${filter}%`) })
      queryConfig.where.push({ description: Like(`%${filter}%`) })
      queryConfig.where.push({ category: Like(`%${filter}%`) })
    }
    return { queryConfig };
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
