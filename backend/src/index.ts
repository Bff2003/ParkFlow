import express from "express";

class App {
    public application: express.Application;

    constructor() {
        this.application = express();
        this.application.use(express.json());
        this.setRoutes();
        this.setMiddlewares();
    }

    public setRoutes(): void {
        this.application.get("/",(req: express.Request, res: express.Response) => {
            res.send("Hello World");
        });
    }

    public setMiddlewares(): void {
        // Log all requests
        this.application.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            console.log("Request logged:", req.method, req.path, req.ip);
            next();
        });
    }
}

(new App()).application.listen(3000, () => {
    console.log("Server is running on port 3000");
});
