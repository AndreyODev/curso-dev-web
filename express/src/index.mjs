import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, res) => {
	// res.send("Hello, world");
	// res.send({ msg: "Hello" });
	res.status(201).send({ msg: "Hello" });
});

// app.get("/api/users", (req, res) => {
// 	res.send([
// 		{ id: 1, nome: "Andrey", sobrenome: "Oliveira" },
// 		{ id: 2, nome: "Jefinho", sobrenome: "Dias" },
// 		{ id: 3, nome: "Gabryella", sobrenome: "Faria" },
// 	]);
// });

const mockUsers = [
	{ id: 1, nome: "Andrey", sobrenome: "Oliveira" },
	{ id: 2, nome: "Jefinho", sobrenome: "Dias" },
	{ id: 3, nome: "Gabryella", sobrenome: "Faria" },
];

app.get("/api/users", (req, res) => {
	res.send(mockUsers);
});

app.get("/api/users/:id", (req, res) => {
	// console.log(parseInt(req.params.id));
	const parsedId = parseInt(req.params.id);
	console.log(parsedId);

	const findUser = mockUsers.find((user) => {
		return user.id === parsedId;
	});

	if (!findUser) {
		return res.status(404).send("Usuário não encontrado");
	}

	res.send(findUser);
});

app.get("/api/produtos", (request, res) => {
	res.send([{ id: 123, nome: "File de peito", price: 16 }]);
});

app.listen(PORT, () => {
	console.log(`Execuntando na porta ${PORT}`);
});
