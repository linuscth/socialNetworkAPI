const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { userEmail, usernames, randomReaction, userNum, multipleRandomThought, randomFriends } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts')
    }

    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users')
    }
    let users = [];
    let thoughtList = [];
    for (let i = 0; i < usernames.length; i++) {
        const username = userNum(i);
        const email = userEmail(username);
        const thoughts = multipleRandomThought(2, username)
        const friends = randomFriends(3, username);
        users.push({
            username,
            email,
            thoughts,
            friends
        })
        thoughts.forEach(thought => {
            thoughtList.push(thought)
        });
    }
    await Thought.collection.insertMany(thoughtList)
    // const insertedUsers = await User.collection.insertMany(users);
    // for (let i = 0; i < users.length; i++) {
    //     const friendIds = users[i].friends.map(friendUsername => {
    //         const friend = insertedUsers.ops.find(user => user.username === friendUsername);
    //         return friend._id
    //     })
    //     await User.collection.updateOne(
    //         { _id: insertedUsers.ops[i]._id }, { $set: { friends: friendIds } }
    //     )
    // }

    console.log(thoughtList);
    console.log(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);

})