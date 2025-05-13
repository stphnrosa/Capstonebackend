import mongoose from 'mongoose'; // need monogoose to createschema

const UsersSchema = new mongoose.Schema ({
    email: {type: String, unique: true, require: true},
    password: {type: String, unique: true, require: true, }

}, {
    timestamps: true // this automatically creates a created app field and an updated app field
});

const User = mongoose.model('User', UsersSchema);

export default User;