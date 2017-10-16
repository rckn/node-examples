// https://cloud.google.com/endpoints/docs/openapi/adding-swagger
// https://swagger.io/specification/
const swaggerTools = require("swagger-tools"),
  YAML = require("yamljs"),
  swaggerDoc = YAML.load("openapi.yaml"),
  bodyParser = require("body-parser"),
  jsonParser = bodyParser.json(),
  express = require("express"),
  app = express();

swaggerTools.initializeMiddleware(swaggerDoc, function(middleware) {
  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());
});

app.use(jsonParser);

app.post("/api/echo", (req, res) => {
  res.json(req.body.message);
});

const pets = [
  {
    id: "0",
    name: "Betty",
    type: "Rabbit"
  }
];

app.get("/api/pets", (req, res) => {
  res.json(pets);
});
app.get("/api/pets/:id", (req, res) => {
  const pet = pets.find(pet => {
    return pet.id === req.params.id;
  });
  res.json(pet);
});
app.post("/api/pets", (req, res) => {
  pets.push(req.body);
  res.status(200).send(req.body.id);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
