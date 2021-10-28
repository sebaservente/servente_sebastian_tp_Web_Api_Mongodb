

import express from "express";
import repository from "../model/repo.dao.js";

// creamos el router
const router = express.Router();

router.route('/testimonios')
    .get(repository.getAll)
    .post(repository.create)

router.route('/testimonios/:id')
    .get(repository.findOne)
    .put(repository.putOne)
    .patch(repository.patcOne)
    .delete(repository.deleteOne)

export default router

