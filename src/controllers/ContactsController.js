const path = require('path');

const getContacts = (req, res) => {
    return res.sendFile(path.join(__dirname, '..', 'views', 'ContactView.html'));
};

module.exports = {getContacts}