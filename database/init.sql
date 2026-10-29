CREATE TABLE IF NOT EXISTS oficinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    vagas INT NOT NULL
);

INSERT INTO oficinas (nome, vagas) VALUES
('Fotografia Digital', 15),
('Desenho Artístico', 20),
('Produção Musical', 12);
