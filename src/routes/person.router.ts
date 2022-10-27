import express from "express";
import PersonController from "../controllers/person.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new PersonController();
  const response = await controller.getPersons();
  return res.send(response);
});

router.get("/:id", async (req, res) => {
    const controller = new PersonController();
    const response = await controller.getPerson(req.params.id);
    if (!response) {
        res.status(404).send({ message: "Person not found" });
    }
    return res.send(response);
  });
  
router.post("/", async (req, res) => {
    const controller = new PersonController();
    const response = await controller.createPerson(req.body);
    return res.send(response);
});

router.put("/", async (req, res) => {
    const controller = new PersonController();
    const response = await controller.updatePerson(req.body);
    return res.send(response);
});
  
router.delete("/all", async (req, res) => {
    const controller = new PersonController();
    const response = await controller.deleteAll();
    return res.send(response);
});

router.delete("/:id", async (req, res) => {
    const controller = new PersonController();
    const response = await controller.deletePerson(req.params.id);
    if (!response) {
        res.status(404).send({ message: "Person not found" });
    }
    return res.send(response);
});


export default router;