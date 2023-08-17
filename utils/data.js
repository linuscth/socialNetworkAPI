const usernames = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
];
const thoughts = [
    'cake is really great',
    'pizza with pineapples is the best ',
    'i want to take a seak leave lol',
    'yo, i just won the mega million, the first 30 people comment below will get 10k ',
    'is there anyone out here still play pokemon go',
    'why is starbucks so successful',
    'i want to be rich quickly ',
    'anyone wanna watch barbie tgt?',
    'lets go and have boiling crab this weekend?',
    'hello world',
    'bye world',
    'having lunch now',
    'chocolate is great',
    ' water is great'
];
const reactions = ['agree', 'diagree', 'cant agree more', 'tell me more about that', 'damn right'];


const randompickinArr = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}
const randomReaction = (num) => {
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push({
            reactionBody: randompickinArr(reactions),
            username: randompickinArr(usernames),
        })
    }
    return result
}
const multipleRandomThought = (num, user) => {
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push({
            thoughtText: randompickinArr(thoughts),
            username: user,
            reaction: randomReaction(2)
        })

    }
    return result
}
const userNum = (num) => {
    return usernames[num]
}

const userEmail = (name) => {
    return `${name}@gmail.com`
}
const randomFriends = (num) => {
    result = [];
    for (let i = 0; i < num; i++) {
        result.push({ username: randompickinArr(usernames) })
    }
    return result;
}
// const randomFriends = (numFriends, usersArray) => {
//     const friends = [];
//     for (let i = 0; i < numFriends; i++) {
//         // Generate a random friend index
//         const randomIndex = Math.floor(Math.random() * usersArray.length);
//         friends.push(usersArray[randomIndex].username);
//     }
//     return friends;
// };


module.exports = { userEmail, usernames, userNum, randomReaction, multipleRandomThought, randomFriends, randompickinArr }