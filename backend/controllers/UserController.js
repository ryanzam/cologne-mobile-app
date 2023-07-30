const User = require("../models/User"); 

module.exports = {
    getUser: async(req, res) => {
        try {
            const user = await User.findById(req.params.id);
            
            if(!user) res.status(401).json({ message: "User not found."}) 
            
            const { password, ...usrdata } = user._doc;
            res.status(200).json(usrdata)
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteUser: async (req, res) => {
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "User deleted." });
        } catch(error) {
            res.status(500).json(error);
        }
    }
}