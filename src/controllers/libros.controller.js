// Descripción: Controlador de libros que contiene los métodos que se ejecutan cuando se hace una petición a la ruta /api/libros
import db from "../db/database";
import Libro from "../models/libros";

(async () => {
    try{
        await db.authenticate();
        await db.sync();
        console.log("Database connected");
    }catch(error){
        console.error("Error connecting to database", error);
    }
})();

// petición GET a la ruta /api/libros que devuelve un mensaje de bienvenida
const saludo = (req, res) => {
    res.json({
        message: "Welcome to my API"
    })
}

//obtener todos los libros
const getLibros = async (req, res) => {
    const libros = await Libro.findAll();
    res.json(libros);
}
//obtener un libro por id
const getLibro = async (req, res) => {
    const { id } = req.params;
    const libro = await Libro.findByPk(id);
    if(!libro) return res.status(404).json({message: "Libro no encontrado"});
    res.json(libro);
}
//crear un libro
const createLibro = async (req, res) => {
    const { titulo, autor, isbn } = req.body;
    if(!titulo || !autor || !isbn) return res.status(400).json({message: "Faltan datos"});
    const libro = await Libro.create({
        titulo,
        autor,
        isbn
    });
    res.json(libro);
}
//actualizar un libro por id
const updateLibro = async(req, res) => {
    const { id } = req.params;
    const { titulo, autor, isbn } = req.body;
    if(!titulo || !autor || !isbn) return res.status(400).json({message: "Faltan datos"});

    const libro = await Libro.update({
        titulo,
        autor,
        isbn
    }, {
        where: { id }
    });

    if (!libro) return res.status(404).json({message: "Libro no encontrado"});
    else res.json({message: "Libro actualizado"});
}
//eliminar un libro por id
const deleteLibro = async (req, res) => {
    const { id } = req.params;
    const libro = await Libro.destroy({
        where: { id }
    });
    if (!libro) return res.status(404).json({message: "Libro no encontrado"});
    else res.json({message: "Libro eliminado"});
}


// exportar los metodos del controlador
export const methods = {
    saludo,
    getLibros,
    getLibro,
    createLibro,
    updateLibro,
    deleteLibro
};