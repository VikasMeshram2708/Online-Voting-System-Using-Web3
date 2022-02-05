const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const volleyball = require('volleyball');
const bcrypt = require('bcryptjs');
const monk = require('monk');
const Joi = require('joi');
const app = express();
dotenv.config({ path: './.env' });

const port = process.env.PORT;

app.use(volleyball);

app.use(cors());

app.use(express.json());

const db = monk('localhost/elections');

const user = db.get('users');

const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    username: Joi.string().min(3).required(),
    password: Joi.string().required(),
    address: Joi.string().required(),
    country: Joi.string().required(),
    state: Joi.string().required(),
    pinCode: Joi.string().required(),
});

app.get('/', (req, res) => {
    res.json({
        message: 'hello,World!'
    });
});

app.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, username, password: text, address, country, state, pinCode } = req.body;
        const password = await bcrypt.hash(text, 10);
        const validUser = await schema.validateAsync({
            firstName,
            lastName,
            email,
            username,
            password,
            address,
            country,
            state,
            pinCode,
        });

        if (validUser) {
            // check if the user already exist
            const userExist = await user.findOne({ email: email });

            // check of username
            const userNameExist = await user.findOne({ username: username });
            if (userExist || userNameExist) {
                return res.status(422).json({
                    message: 'User Already Registered with email or username!'
                })
            }
            // insert the user
            user.insert(validUser);
            return res.status(201).json({
                message: 'User Registered!'
            })
        }

        return res.status(422).json({
            message: 'User Not Registered!'
        })

    } catch (error) {
        res.status(422);
        res.json(error.message);
        console.log(error.message);
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(422).json({
                message: 'Hey, Username and Password are required!'
            });
        }

        const userLogin = await user.findOne({ username: username });

        if (userLogin) {
            const userPassLogin = await bcrypt.compare(password, userLogin.password);
            if (!userPassLogin) {
                console.log('Hey,  Invalid Credentials!');
                res.status(422).json({
                    message: 'Hey,  Invalid Credentials!'
                });
            } else {
                console.log('User SignedIn Successfully!');

                res.status(201).json({
                    message: 'User SignedIn Successfully!'
                });
            }
        } else {
            console.log('Invalid Credentials!');
            res.status(422).json({
                message: 'Invalid Credentials!'
            });
        }


    } catch (error) {
        console.log(error.message);
        return res.status(422).json({
            message: error.message
        })

    }

})


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});


