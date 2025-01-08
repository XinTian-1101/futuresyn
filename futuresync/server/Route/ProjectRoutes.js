const express = require('express');
const router = express.Router();
const projectsController = require('../Controller/ProjectController');

router.get('/', projectsController.getProjects);
router.post("/employers/EM_AddForm", projectsController.addProject);

module.exports = router;

