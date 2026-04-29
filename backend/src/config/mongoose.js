const mongoose = require('mongoose');

const connectMongoDb = async () => {
    const MONGO_URI = process.env.MONGO_URI;

    try {
        await mongoose.connect(MONGO_URI);
    }catch(error) {
        process.exit(1);
    }
}

export default connectMongoDb;