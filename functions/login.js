require('dotenv').config();
const { handleLogin } = require('./AuthUtils');
exports.handler = async (event, context) => {
    try {
        return await handleLogin(event);
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: 'Login failed' }),
            headers: {
                Location: '/',
            },
        };
    }
};