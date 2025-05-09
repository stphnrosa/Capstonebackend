import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema ({
    title: {type:String, require: true },
    body: {type: String},
}, {
    timestamps:true
});

const Note= mongoose.model('Note', noteSchema); // first argument is name of model. This is what you see created in MongoDB, Second argument is the schema theat the documents need to follow when they get created
Note.create()

export default Note;