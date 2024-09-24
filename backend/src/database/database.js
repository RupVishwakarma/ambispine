import mongoose from 'mongoose';

const mongouri = 'mongodb://localhost:27017/Ambispine';

const ConnectDB = async () => {
  try {
    await mongoose.connect(mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected... to node.js');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default ConnectDB;
