const jsonServer = require("json-server"); // importing json-server library
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("server/db.json");

const localIpAddress = require("local-ip-address");
const Logger = require("@ptkdev/logger");
const port = process.env.PORT || 3000; // use any port number here
const logger = new Logger();
const middlewares = jsonServer.defaults({ logger: true });

// Bind the router db to the app
server.db = router.db;

server.use(middlewares);
server.use(auth);

server.use(jsonServer.bodyParser);

// add created At
server.use((req, res, next) => {
	if (req.method === "POST") {
		req.body.createdAt = new Date().toISOString();
	}
	// Continue to JSON Server router
	next();
});

// add Avatar if POST to resource students
server.use("/students", (req, res, next) => {
	if (req.method === "POST") {
		req.body.avatar = "https://loremflickr.com/60/60";
	}
	// Continue to JSON Server router
	next();
});

// Reverse data for GET requests with _sort=createdAt
server.use((req, res, next) => {
	if (req.method === "GET" && req.query._sort === "createdAt") {
		// Save the original send function
		const originalSend = res.send;

		// Check if _order is not already present in the request
		if (!req.query._order) {
			req.query._order = "desc";
		}
	}
	next();
});

server.use(router);

server.listen(port, () => {
	logger.info(
		`JSON Server is running - http://localhost:${port} - http://${localIpAddress()}:${port}`
	);
});
