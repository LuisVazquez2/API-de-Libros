import db from "../db/database";
import DataType from "sequelize";

const Libro = db.define("libros", {
    title: {
        type: DataType.STRING,
    },
    authors: {
        type: DataType.STRING,
    },
    average_rating: {
        type: DataType.STRING,
    },
    language_code: {
        type: DataType.STRING,
    },
    num_pages: {
        type: DataType.STRING,
    },
});

module.exports = Libro;
