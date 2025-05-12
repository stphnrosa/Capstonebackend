import Assessment from '../models/assessmentModel.js';

async function seedAssessment(req, res) {
    try{
        await Assessment.deleteMany({});
        await Assessment.create(
        {
            title: 'Title 1',
            body: 'Body 1'
        },
        {
            title: 'Title 2',
            body: 'Body 2'
        },
        {
            title: 'Title 3',
            body: 'Body 3'
        }
      );   
      res.status(201);
   }  catch(error) {
    res.status(400).json({ error: error.message });
  }
}
// async function getnotes(req,res) {
//     try{
//         const notes= await Note.find({});
//         res.status(200).json(notes);
//     }catch(error) {
//         res.status(400).json({error: error message})
//     }
//     }
//  async function deleteNote(req,res)
// {
//     const deletedNote= await Note.findByIdAndDelete(req.params.id);
//     res.status(200).json(deletedNote);
// } catch (error) {
//     res.srarus(400).json ({error: error.message});
// } 
// }

// async function updateNote(req,res) {
//     try{
// const updateddNote= await Note.findByIdAndUpdate(req.params.id);
// res.status(200).json(updatedNote);
// } catch (error) {
// res.srarus(400).json ({error: error.message});
// } 
//     export{
//         seedNotes,
//         getNotes,
//         deleteNote,
//         updateNote,
//         createNote
//         getNote,


//     }
    