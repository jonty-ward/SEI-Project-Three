import express from 'express'
import { addCommentToPark, addRecommendationToPark, deleteCommentFromPark, deletePark, deleteRecommendationToPark, getAllParks, getOnePark, updatePark, editParkComments, editParkRecommendation, getOneRecommendation, getOneComment } from '../controllers/parks.js'
import { loginUser, registerUser } from '../controllers/auth.js' 
import { secureRoute } from '../config/secureRoute.js'


const router = express.Router()

router.route('/parks')
  .get(getAllParks)

router.route('/parks/:id')
  .get(getOnePark)
  .put(secureRoute, updatePark)
  .delete(secureRoute, deletePark)

router.route('/parks/:id/comments')
  .post(secureRoute, addCommentToPark)

router.route('/parks/:id/comments/:commentId')
  .delete( secureRoute, deleteCommentFromPark)
  .put(secureRoute, editParkComments)
  .get(getOneComment)

router.route('/parks/:id/recommendations')
  .post(secureRoute, addRecommendationToPark)

router.route('/parks/:id/recommendations/:recommendationId')
  .delete(secureRoute, deleteRecommendationToPark)
  .put(secureRoute, editParkRecommendation)
  .get(getOneRecommendation)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)
  
export default router