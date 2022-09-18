import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seashell {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  description: string;
}
