const path = require('path');

const getValue = (req, res) => {
    return res.sendFile(path.join(__dirname, '..', 'views', 'ValuesView.html'));
};

module.exports = {getValue}