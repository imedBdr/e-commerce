import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('administrator')
export class AdministratorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  email: string;
}
