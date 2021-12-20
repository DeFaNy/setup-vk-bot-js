const { connect } = require('mongoose')
const { mongoUrl } = require('../settings/config.json')

module.exports = () => {
    connect(mongoUrl, (err) => {
        if (err) throw err;

        console.log('--> Подключились к MongoDB');
    });
}