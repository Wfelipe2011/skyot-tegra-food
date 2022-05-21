import { EntityRepository, Repository } from 'typeorm';
import { ProductEntity } from '../table-entity/products.entity';

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity> {
  async findAll() {
    return await this.createQueryBuilder('product').select('*').getRawMany();
  }
}
