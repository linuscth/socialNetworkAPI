const { connect, connection } = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkDB'

const dbConnection = async () => {
    try {
        await connect(connectionString)
        console.error('successfully connected to MongoDB')

    } catch (error) {
        console.error('Error connecting to MongoDB', error)
    }
}
dbConnection();

module.exports = connection;