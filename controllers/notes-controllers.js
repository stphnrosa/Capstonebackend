// import Note from '../models/note-model.js';

// async function seedNotes(req, res) {
//     try{
//         await Note.deleteMany({});
//         await Note.create({});
//         {
//             title:'',
//             body: 'Body 1'
//         },
//         {
//             title:'',
//             body: 'Body 1'
//         },
//         {
//             title:'',
//             body: 'Body 1'
//         },
//     };
//     res.status(201).json ({ success:'Database seeded.'});
// }Catch (error) {
//     res.stauts(400).json({error: error.message})
// }
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
    