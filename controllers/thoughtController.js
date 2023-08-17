const { Thought, User } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const getAllThoughts = await Thought.find();
            res.status(200).json(getAllThoughts)
        } catch (err) {
            res.status(500).json(err);

        }
    },
    async getSingleThought(req, res) {
        try {
            const getAThought = await Thought.findOne({ _id: req.params.thoughtId }).select('-__v');
            if (!getAThought) {
                res.status(400).json({ message: 'no thought with that id' })
            }
            res.status(200).json(getAThought)
        } catch (err) {
            res.status(500).json(err);

        }
    },
    async createThought(req, res) {
        try {
            const thoughtText = req.body.thoughtText;
            const username = req.body.username;
            const userId = req.userId
            if (!thoughtText || !username || !userId) {
                res.status(400).json({ message: 'no thoughtText/ username/ userId' })
                return
            }
            const createAThought = await Thought.create(req.body);
            res.status(200).json(createAThought)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true });
            if (!thought) {
                res.status(404).json({ message: 'No thought with this id!' });
                return;
            }
            res.status(200).json(thought)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.parms.thoughtId });
            if (!thought) {
                res.status(404).json({ message: 'No thought with this id!' })
                return
            }
            res.status(200).json(thought)
        } catch (err) {
            res.status(500).json(err);

        }
    }
}