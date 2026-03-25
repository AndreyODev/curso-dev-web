import express, { response } from "express";

const app = express();

// Middleware
app.use(express.json());

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
	{ id: 1, nome: "andrey", sobrenome: "Oliveira" },
	{ id: 2, nome: "andrey", sobrenome: "Oliveira" },
	{ id: 3, nome: "jefinho", sobrenome: "Dias" },
	{ id: 4, nome: "gabryella", sobrenome: "Faria" },
];

app.get("/api/users", (req, res) => {
	const { id, filter, value } = req.query;

	// Buscar pelo ID
	// /api/users?id=4
	if (id) {
		const parsedId = parseInt(id);

		if (isNaN(parsedId)) {
			return res.status(400).send("ID inválido");
		}

		const findUser = mockUsers.find((user) => user.id === parsedId);

		if (!findUser) {
			return res.status(404).send("Usuário não encontrado");
		}

		return res.send(findUser);
	}

	// Filtro através do nome e sobrenome)
	// filter=nome&value=gabryella ou filter=sobrenome&value=Dias
	if (filter && value) {
		return res.send(
			mockUsers.filter((user) => {
				return user[filter]?.includes(value);
			}),
		);
	}

	return res.send(mockUsers);
});

app.post("/api/users", (req, res) => {
	console.log(req.body);
	const { body } = req;

	const novoUsuario = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };

	mockUsers.push(novoUsuario);

	return res.status(201).send(novoUsuario);
});

// app.get("/api/users", (req, res) => {
// 	console.log(req.query);
// 	// const { query: { filter, value },} = req;
// 	const {
// 		query: { filter, value },
// 	} = req;

// 	// Quando o filtro e o valor forem underfined
// 	if (!filter && !value) {
// 		return res.send(mockUsers);
// 	}

// 	if (filter && value) {
// 		return res.send(
// 			mockUsers.filter((user) => {
// 				return user[filter].includes(value);
// 			}),
// 		);
// 	}
// });

// Parâmetro de rota
app.get("/api/users/:id", (req, res) => {
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

// Parâmetro de consulta pelo id usando o find
// app.get("/api/users", (req, res) => {
// 	const { id } = req.query;

// 	// Verifica se o id foi enviado
// 	if (!id) {
// 		return res.status(400).send("ID não informado");
// 	}

// 	const parsedId = parseInt(id);

// 	// Verifica se é um número válido
// 	if (isNaN(parsedId)) {
// 		return res.status(400).send("ID inválido");
// 	}

// 	const findUser = mockUsers.find((user) => {
// 		return user.id === parsedId;
// 	});

// 	if (!findUser) {
// 		return res.status(404).send("Usuário não encontrado");
// 	}

// 	res.send(findUser);
// });

// Parâmetro de consulta pelo nome
// app.get("/api/users", (req, res) => {
// 	const nome = req.query.nome;

// 	const filtrerUser = mockUsers.filter((user) => {
// 		return user.nome === nome;
// 	});

// 	if (filtrerUser.length === 0) {
// 		return res.status(404).send("Usuário não encontrado");
// 	}

// 	res.send(filtrerUser);
// });

app.get("/api/produtos", (request, res) => {
	res.send([{ id: 123, nome: "File de peito", price: 16 }]);
});

app.listen(PORT, () => {
	console.log(`Execuntando na porta ${PORT}`);
});
