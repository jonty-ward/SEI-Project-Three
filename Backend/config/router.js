import express from 'express'
import { addCommentToPark, addRecommendationToPark, deleteCommentFromPark, deletePark, deleteRecommendationToPark, getAllParks, getOnePark, updatePark, editParkComments, editParkRecommendation } from '../controllers/parks.js'
import { loginUser, registerUser, showUserProfile, getAllUsers } from '../controllers/auth.js' 
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

router.route('/parks/:id/recommendations')
  .post(secureRoute, addRecommendationToPark)

router.route('/parks/:id/recommendations/:recommendationId')
  .delete(secureRoute, deleteRecommendationToPark)
  .put(secureRoute, editParkRecommendation)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/profile')
  .get(getAllUsers)

router.route('/profile/:id')
  .get(secureRoute, showUserProfile)
  
export default router