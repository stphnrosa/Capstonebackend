import express from 'express';
import * as notesController from '../controllers/notes-controller.js'; //* represents "all"
const router = express.Router();

//seed
router.get('./seed', notesController.seedNotes );

//index (main page)
router.get('./', notesController.getNotes  );

//delete
router.delete('./:id', notesController.deleteNotes );
//update
router.put('/:id',notesController.putNotes  );

//create
router.post('/',notesController.createNotes  );

//Show
router.get('/:id', notesController.getNotes );

export default router;