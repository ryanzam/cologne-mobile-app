const User = require("../models/User");

const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

module.exports = {
    createUser: async(req, res) => {
        const { username, email, password } = req.body;

        const user = new User({
            username, 
            email, 
            password: CryptoJS.AES.encrypt(password, process.env.SECRET).toString()
        });
        try {
            await user.save();
            res.status(201).json({ message: "User created."});
        } catch (error) {
            res.status(500).json({ message: error})
        }
    },

    signin: async(req, res) => {
        try {
            const user = await User.findOne({email: req.body.email});
            if(!user) {
                return res.status(401).json({ message: "Incorrect username/password. Try again." });
            }
             
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
            const originalPass = bytes.toString(CryptoJS.enc.Utf8);
            if(req.body.password !== originalPass) {
                return res.status(401).json({ message: "Incorrect username/password. Try again."});
            }

            const token = jwt.sign({
                id: user.id
            }, process.env.JWT_SECRET, { expiresIn: "5d"});

            const { password, ...usrdata } = user._doc;
            res.status(200).json({ token, ...usrdata });
        } catch (error) {
            res.status(500).json({ message: error})
        }
    }
};