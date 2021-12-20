const { model, Schema } = require('mongoose');

const defaultType = (type, value) => ({ type, default: value });

const Users = model(
    'users',
    new Schema({
        id: Number,
        admin: Boolean,
        balance: defaultType(Number, 0),
        ref: defaultType(Object, {
            refferer: Number,
            count: 0,
        })
    })
);

module.exports = {
    Users,
}
