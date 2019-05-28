const express = require("express");
const bodyParser = require("body-parser");

const apiRoutes = require("./app/routing/apiRoutes.js");
const htmlRoutes = require("./app/routing/htmlRoutes.js");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "app/css"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function() {

    console.log(`App is listening on PORT ${PORT}`);

});