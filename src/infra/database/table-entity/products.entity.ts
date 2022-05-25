import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  category: string;

  public static from(
    title: string,
    price: number,
    description?: string,
    image?: string,
    category?: string,
  ): ProductEntity {
    const entity = new ProductEntity();
    entity.title = title;
    entity.price = price;
    entity.description = description;
    entity.image = image;
    entity.category = category;
    return entity;
  }
}
