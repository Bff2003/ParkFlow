import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
} from "typeorm";

import { Park } from "./park";

export enum UserRoles {
    ROOT = "root",
    ADMIN = "admin",
    CLIENT = "client",
}

// Defina a entidade Client
@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column({ unique: true})
    token!: string;

    // [root, admin, client]
    @Column({ type: "enum", enum: UserRoles, default: UserRoles.CLIENT })
    role!: UserRoles;

    // Relacionamento com a entidade Park
    @OneToMany(() => Park, (park) => park.client)
    parks!: Park[];

    constructor(name: string, email: string, password: string, token?: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.token = token || Client.generateToken();
    }

    public setNewToken(token?: string): void {
        this.token = token || Client.generateToken();
    }

    public static generateToken(): string {
        const chars =
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let token = "";
        for (let i = 0; i < 32; i++) {
            token += chars[Math.floor(Math.random() * chars.length)];
        }
        return token;
    }
}