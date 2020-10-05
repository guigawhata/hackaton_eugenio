import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('totems')
class Totem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: 'online' | 'offline';

  @Column()
  pin?: string;

  @Column({ nullable: true })
  qr_reader_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Totem;
