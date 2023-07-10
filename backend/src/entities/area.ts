import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
} from "typeorm";

import { Park } from "./park";
import { ParkingSpot } from "./parkingSpot";


// Defina a entidade Area
@Entity()
export class Area {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    // Relacionamento com a entidade Park
    @ManyToOne(() => Park, (park) => park.areas)
    park!: Park;

    // Relacionamento com a entidade ParkingSpot
    @OneToMany(() => ParkingSpot, (parkingSpot) => parkingSpot.area)
    parkingSpots!: ParkingSpot[];
}