var mongoose = require('mongoose');

const init = async () => {
    mongoose.set('useCreateIndex', true)
    mongoose.set('useFindAndModify', false);
    await mongoose.connect(process.env.MONGO_HOST, { useUnifiedTopology: true, useNewUrlParser: true })
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', async function () {
        console.log('mongo db connected!');
    });
}

const close = async () => {
    await mongoose.connection.close()
}

module.exports = {
    init,
    close
}
