const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: Process.env.ALIVE_IMG || "https://images.app.goo.gl/753c9bkwvHn9FLfL9"
ALIVE_MSG: process.env.ALIVE_MSG || "Hellow,I am Youname i am alive now!! ",
};
