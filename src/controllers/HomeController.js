const path = require('path');

const getHome = (req, res) => {
    return res.sendFile(path.join(__dirname, '..', 'views', 'HomeView.html'));
};

module.exports = {getHome}