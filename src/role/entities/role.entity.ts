import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Roles')
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    roleName: string;
}
