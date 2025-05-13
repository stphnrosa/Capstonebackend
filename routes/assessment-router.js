import express from 'express'; // you need this to create a router using express
import * as assessmentController from '../controllers/assessment-controllers.js'; //* represents "all"
const router = express.Router();

//seed. This route is going to be used to populate the database
router.get('/seed', assessmentController.seedAssessment );

// //index (main page). 
router.get('/', assessmentController.getAssessments );

//  questions route
router.route('/Questions')
.get(assessmentController.getQuestions)
.post(assessmentController.insertQuestions)

// result route
router.route('/Results')
.get(assessmentController.getResults)
.post(assessmentController.storeResults)


// //delete. Needs an id to determine what specifically needs to be deleted. // MIGHT DELETE THIS ROUTE?! I don't want people to delete their assessment results. Might use this ONLY for deleting User account instead.
router.delete('/:id', assessmentController.deleteAssessment );

// //update. Needs an id to determine what needs to be updated. 
router.put('/:id',assessmentController.updateAssessment );

// //create
router.post('/', assessmentController.createAssessment );

// //Show. id route parameter to find the specific assessment they are looking for. Maybe test result 1.
router.get('/:id', assessmentController.getAssessment );

export default router;