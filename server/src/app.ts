import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorMiddleware } from './middlewares/error.middleware';

dotenv.config();

const app = express();

import categoryRoute from './routes/category.route';
import menuRoute from './routes/menu.route';
import tableRoute from './routes/table.route';
import queueRoute from './routes/queue.routes';
import orderItemRoute from './routes/orderItem.route';
import orderRoute from './routes/order.route';
import authRoute from './routes/auth.route';

app.use('/images', express.static('images'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response) => {
  try {
    res.send("Hello World!!!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.use("/categories", categoryRoute);
app.use("/menus", menuRoute);
app.use("/tables", tableRoute);
app.use("/queues", queueRoute);
app.use("/orderItems", orderItemRoute);
app.use("/orders", orderRoute);
app.use("/users", authRoute);

app.use(errorMiddleware);


export default app;