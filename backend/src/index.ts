import express from "express";
import { DataSource } from "typeorm";
import { Client } from "./entities/client";
import { Park } from "./entities/park";
import { Area } from "./entities/area";
import { ParkingSpot } from "./entities/parkingSpot";
import { Reservation } from "./entities/reservation";

import "reflect-metadata";

// Crie uma conexão com o banco de dados
const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    entities: [Client, Park, Area, ParkingSpot, Reservation],
    synchronize: true,
    logging: false,
});

class App {
    public application: express.Application;
    private AppDataSource!: DataSource;
    // private ClientController!: ClientController;

    constructor(AppDataSource: DataSource) {
        this.AppDataSource = AppDataSource;
        this.startDatabase();
        this.application = express();
        this.application.use(express.json());
        this.setRoutes();
        this.setMiddlewares();
    }

    private startDatabase(): void {
        // Crie um objeto do tipo DataSource
        AppDataSource.initialize()
            .then(() => {
                console.log("Connected to database");
            })
            .catch((error) => {
                console.log("Error connecting to database", error);
            });
    }

    public setRoutes(): void {
        this.application.get("/",(req: express.Request, res: express.Response) => {
            res.send("Hello World");
        });

        this.application.post("/user/register", (req: express.Request, res: express.Response) => {
            let user = req.body as Client;
            user = new Client(user.name, user.email, user.password);
            this.AppDataSource.getRepository(Client).save(user);
            res.send(user);
        });

        this.application.post("/user/login", async (req: express.Request, res: express.Response) => {
            let user = req.body as { email: string; password: string }; // email and password
            let userFromDatabase = await this.AppDataSource.getRepository(
                Client
            ).findOne({
                where: { email: user.email, password: user.password },
            });
            if (userFromDatabase) {
                userFromDatabase.setNewToken();
                await this.AppDataSource.getRepository(Client).save(
                    userFromDatabase
                );
    
                // set cookie
                res.cookie("token", userFromDatabase.token, {
                    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
                    httpOnly: true,
                });
    
                res.send(userFromDatabase);
            } else {
                res.status(401).send("Invalid email or password");
            }
        });

        this.application.get("/user/all", async (req: express.Request, res: express.Response) => {
            Client
            let users = await this.AppDataSource.getRepository(Client).find();
            res.send(users);
        });
    }

    public setMiddlewares(): void {
        // Log all requests
        this.application.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            console.log("Request logged:", req.method, req.path, req.ip);
            next();
        });
    }

    destroy(): Promise<void> {
        return this.AppDataSource.destroy();
    }
}

new App(AppDataSource).application.listen(2000, () => {
    console.log("Server is running on port 3000");
});
