import db from "../db/database";
import DataType from "sequelize";

const Libro = db.define("libros", {
    titulo: {
        type: DataType.STRING,
    },
    autor: {
        type: DataType.STRING,
    },
    isbn: {
        type: DataType.STRING,
    },
});

module.exports = Libro;
