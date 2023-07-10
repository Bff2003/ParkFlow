import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
} from "typeorm";

import { ParkingSpot } from "./parkingSpot";

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    startTime!: Date;

    @Column({ nullable: true})
    endTime?: Date;

    @Column({ nullable: true})
    carPlate?: string;

    // Relacionamento com a entidade ParkingSpot
    @ManyToOne(() => ParkingSpot, (parkingSpot) => parkingSpot.reservations)
    parkingSpot!: ParkingSpot;
}