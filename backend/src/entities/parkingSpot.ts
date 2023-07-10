import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
} from "typeorm";

import { Area } from "./area";
import { Reservation } from "./reservation";


// Defina a entidade ParkingSpot
@Entity()
export class ParkingSpot {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    number!: number;

    // Relacionamento com a entidade Area
    @ManyToOne(() => Area, (area) => area.parkingSpots)
    area!: Area;

    // Relacionamento com a entidade Reservation
    @OneToMany(() => Reservation, (reservation) => reservation.parkingSpot)
    reservations!: Reservation[];
}