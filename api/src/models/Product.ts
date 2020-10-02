import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Image from './Image';
import ProductProfile from './ProductProfile';
import ProductType from './ProductType';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ProductType, () => Product)
  product_type: ProductType;

  @OneToOne(() => ProductProfile, () => Product)
  @JoinColumn()
  profile: ProductProfile;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @ManyToMany(() => Image)
  @JoinTable()
  images: Image[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
