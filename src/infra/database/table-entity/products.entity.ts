import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  categoryId: number;

  public static from(
    title: string,
    price: string,
    description?: string,
    image?: string,
    categoryId?: number,
  ): ProductEntity {
    const entity = new ProductEntity();
    entity.title = title;
    entity.price = price;
    entity.description = description;
    entity.image = image;
    entity.categoryId = categoryId;
    return entity;
  }
}
