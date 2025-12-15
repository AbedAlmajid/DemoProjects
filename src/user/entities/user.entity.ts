import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({type: 'varchar', length: 20})
  nationalNumber: string;

  @Column({ type: 'date' , nullable: true })
  birthDay: Date;
}
