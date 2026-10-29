const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const PORT = 3000;

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10
});

app.get("/", (req, res) => {
  res.send("Sistema de Oficinas Culturais em funcionamento!");
});

app.get("/oficinas", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT id, nome, vagas FROM oficinas"
    );

    res.json(rows);
  } catch (error) {
    res.status(500).json({
      erro: "Não foi possível consultar as oficinas."
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Aplicação disponível na porta ${PORT}`);
});
