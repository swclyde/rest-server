import express from "express";
import PingController from "../controllers/ping.controller";
import PersonRouter from './person.router'

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.use("/persons", PersonRouter);
  
export default router;