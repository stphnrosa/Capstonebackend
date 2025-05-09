import mongoose from 'mongoose';

const assessmentSchema = new mongoose.Schema ({
    title: {type:String, require: true },
    body: {type: String},
}, {
    timestamps:true
});

const Assessment= mongoose.model('Assessment', assessmentSchema); // first argument is name of model. This is what you see created in MongoDB, Second argument is the schema theat the documents need to follow when they get created
Assessment.create()


export default Assessment;