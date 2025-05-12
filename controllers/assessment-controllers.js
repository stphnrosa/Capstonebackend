import Assessment from "../models/assessmentModel.js";

async function seedAssessment(req, res) {
  try {
    await Assessment.deleteMany({});
    await Assessment.create(
      {
        title: "Title 1",
        body: "Body 1",
      },
      {
        title: "Title 2",
        body: "Body 2",
      },
      {
        title: "Title 3",
        body: "Body 3",
      }
    );
    res.status(201).json({ success: "Database Seeded." }); // Must send something back in order for local host to show something on screen, otherwise it will continue infinitely loading as it's always waiting for something to show
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAssessment(req, res) {
  try {
    const assessment = await Assessment.find({});
    res.status(200).json(assessment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteAssessment(req, res) {
  try {
    const deletedAssessment = await Assessment.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedAssessment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// async function updateNote(req,res) {
//     try{
// const updatedNote= await Note.findByIdAndUpdate(req.params.id);
// res.status(200).json(updatedNote);
// } catch (error) {
// res.status(400).json ({error: error.message});
// }
export {
  seedAssessment,
  getAssessment,
  deleteAssessment,
  // updateAssessment,
  // createAssessment,
};
