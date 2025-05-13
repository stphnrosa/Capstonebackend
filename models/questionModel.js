// reference: https://www.geeksforgeeks.org/quiz-app-using-mern-stack/
import mongoose from 'mongoose'; // need monogoose to createschema

const QuestionsSchema = new mongoose.Schema ({
    questions: {type: Array, default: [] }, 
    answers: {type: Array, default: [] }
}, {
    timestamps: true // this automatically creates a created app field and an updated app field
});

//Below is the creation of the model
const Questions= mongoose.model('Questions', QuestionsSchema); // first argument is name of model(This is what you see created in MongoDB). I'll have an assessment collection once i use the assessment model. Second argument is the schema that the documents need to follow when they get created.  Schema dictates what field the documents need to contain, like title since it is required above
Assessment.create()


export default Questions;