const path = require('path');

const getProject = (req, res) => {
    return res.sendFile(path.join(__dirname, '..', 'views', 'ProjectsView.html'));
};

module.exports = {getProject}