import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, res) => {
	// res.send("Hello, world");
	// res.send({ msg: "Hello" });
	res.status(201).send({ msg: "Hello" });
});

app.get("/api/users", (req, res) => {
	res.send([
		{ id: 1, nome: "Andrey", sobrenome: "Oliveira" },
		{ id: 2, nome: "Jefinho", sobrenome: "Dias" },
		{ id: 3, nome: "Gabryella", sobrenome: "Faria" },
	]);
});

app.get("/api/produtos", (request, res) => {
	res.send([{ id: 123, nome: "File de peito", price: 16 }]);
});

app.listen(PORT, () => {
	console.log(`Execuntando na porta ${PORT}`);
});
