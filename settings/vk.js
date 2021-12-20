const { VK, getRandomId, resolveResource } = require('vk-io');
const { QuestionManager } = require('vk-io-question');
const { token } = require('./config.json');

const vk = new VK({
    token,
    apiLimit: 25,
    apiMode: 'parallel',
});

const questionManager = new QuestionManager();

const { api } = vk;

const vkHelp = {
    // Передавайте обьект. Пример: { peer_id:222856843, message: 'Привет!' }
    msg: (props) => {
        const { peer_id, message, attachment, keyboard } = props;

        return api.messages.send({
            peer_id,
            message,
            attachment,
            keyboard,
            random_id: getRandomId(),
        });
    },
    // Передавайте короткое имя/ссылку/айди человека. Пример: https://vk.com/defany
    // Вернет: 222856843
    getId: async (resource) => {
        const { id } = await resolveResource({ api, resource });
        return id;
    },
    // Передавайте айди человека. Пример: 222856843
    // Вернет: Дима
    getName: async (id) => {
        const [data] = await api.users.get({
            user_ids: id,
        });
        return data.first_name;
    },
};

module.exports = {
    vk,
    api,
    vkHelp,
    questionManager,
};
