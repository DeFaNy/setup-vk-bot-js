const connectDb = require('./database/connect.js');

const { vk, vkHelp } = require('./settings/vk.js');
const { user } = require('./database/managers/user.js');

connectDb();

vk.updates.on('message_new', async (msg) => {

    msg.user = await user.get(msg.senderId)

    if (!msg.user) {
        msg.send(`Приветствуем, ${await vkHelp.getName(msg.senderId)}`)

        user.create(msg.senderId, msg.refferalValue)
    }

})

vk.updates.start().catch(console.log).then(console.log('--> Бот включен'))