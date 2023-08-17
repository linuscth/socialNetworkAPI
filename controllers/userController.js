const { log } = require('console');
const { Thought, User } = require('../models');

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find({})
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async getAUser(req, res) {
        try {
            const users = await User.find({ _id: req.params.userId });
            if (!users) {
                res.status(400).json({ message: 'no user with that id' })
                return
            }
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async createUser(req, res) {
        try {
            const username = req.body.username;
            const email = req.body.email;
            if (!username || !email) {
                res.status(400).json({ message: 'no username/ email' })
                return
            }
            const users = await User.create(req.body);
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async updateUser(req, res) {
        try {
            const users = await User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true })
            if (!users) {
                res.status(404).json({ message: 'No user with this id!' })
                return;
            }
            return res.status(200).json(users)

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const users = await User.findOneAndDelete({ _id: req.params.userId });
            if (!users) {
                res.status(404).json({ message: 'No user with this id!' })
                return;
            }
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}