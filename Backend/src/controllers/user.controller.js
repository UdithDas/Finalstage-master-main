const User = require('../models/user.model');

/**
 * Login
 */

exports.login = async (req, res) => {
    const { username, password } = req.body;

    /**
     * Change the logc and implient real authentication
     */

    try {
        if (username === process.env.TEMP_ADMIN_USERNAME && password === process.env.TEMP_ADMIN_PASSWORD) {
            console.log('working');

            req.session = {
                user: {
                    username,
                    password,
                },
            };

            res.send({ message: 'Login Success' });
        } else {
            res.send('Invalid credentials');
        }
    } catch (error) {
        console.log(error);

        res.status(500).send(error);
    }
};
