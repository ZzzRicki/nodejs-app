const express = require('express');
const path = require('path');

const homeRoutes = require("./routes/HomeRoutes");
const contactRoutes = require("./routes/ContactRoutes");
const projectsRoutes = require("./routes/ProjectsRoutes");
const skillsRoutes = require("./routes/SkillsRoutes");
const valuesRoutes = require("./routes/ValuesRoutes");

const app = express();

app.use(homeRoutes);
app.use(contactRoutes);
app.use(projectsRoutes);
app.use(skillsRoutes);
app.use(valuesRoutes);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use("*", (req, res) => {
    return res.send("La pagina no ha sido encontrada");
});

module.exports = app;