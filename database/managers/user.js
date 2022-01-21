const { Users } = require('../models')

const user = {

    get: (id) => Users.findOne({ id }).lean(),
    create: (id, referralValue) => {

        const newUser = new Users({
            id,
            'ref.refferer': referralValue ? referralValue : 0 ,
        })

        newUser.save().then()

    }
    
}

module.exports = {
    user
}
