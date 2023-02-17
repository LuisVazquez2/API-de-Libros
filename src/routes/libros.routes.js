import { Router } from "express";
import {methods as librosMethods} from "../controllers/libros.controller";

const router = Router();

router.get("/", librosMethods.saludo); 
router.get("/libros", librosMethods.getLibros);
router.get("/libro/:id", librosMethods.getLibro);
router.post("/libros", librosMethods.createLibro);
router.put("/libros/:id", librosMethods.updateLibro);
router.delete("/libros/:id", librosMethods.deleteLibro);


export default router;