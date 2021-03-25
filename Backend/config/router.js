import express from 'express'
import { addCommentToPark, addRecommendationToPark, deleteCommentFromPark, deletePark, deleteRecommendationToPark, getAllParks, getOnePark, updatePark } from '../controllers/parks'




const router = express.Router()

router.route('/parks')
  .get(getAllParks)

router.route('/parks/:id')
  .get(getOnePark)
  .put(updatePark)
  .delete(deletePark)

router.route('/parks/:id/comments')
  .post(addCommentToPark)

router.route('/parks/:id/comments/:commentId')
  .delete(deleteCommentFromPark)

router.route('/parks/:id/recommendations')
  .post(addRecommendationToPark)

router.route('/parks/:id/recommendations/:recommendationsId')
  .delete(deleteRecommendationToPark)


  
export default router