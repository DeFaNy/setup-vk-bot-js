const { Users } = require('../models')

const user = {

    get: (id) => Users.findOne({ id }).lean(),
    create: (id, refferalValue) => {

        const newUser = new Users({
            id,
            'ref.refferer': refferalValue,
        })

        newUser.save().then()

    }
    
}

module.exports = {
    user
}
