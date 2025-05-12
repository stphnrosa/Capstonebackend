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

async function updateAssessment(req, res) {
  try {
    const updatedAssessment = await Assessment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ); // This third argument, the object and key {new: true} demonstrates the updated document, not the original.
    res.status(200).json(updatedAssessment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function createAssessment(req,res) {
 try {
const createdAssessment = await Assessment.create(req.body);
 res.status(201).json(createdAssessment)
 } catch (error) {
    res.status(400).json ({ error: error.message});
 }
}

export {
  seedAssessment,
  getAssessment,
  deleteAssessment,
  updateAssessment,
  createAssessment,
};
