const mongoose = require('mongoose');

const uri = `mongodb+srv://admin:admin@cluster0.dux03os.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    placa: {
        type: String,
        unique: true,
    },
    modelo: String,
    marca: String,
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {
    UserModel,
};