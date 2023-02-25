const path = require('path');

const getSkill = (req, res) => {
    return res.sendFile(path.join(__dirname, '..', 'views', 'SkillsView.html'));
};

module.exports = {getSkill}