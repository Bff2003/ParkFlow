import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
} from "typeorm";

import { Client } from "./client";
import { Area } from "./area";


// Defina a entidade Park
@Entity()
export class Park {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    address!: string;

    // Relacionamento com a entidade Client
    @ManyToOne(() => Client, (client) => client.parks)
    client!: Client;

    // Relacionamento com a entidade Area
    @OneToMany(() => Area, (area) => area.park)
    areas!: Area[];
}