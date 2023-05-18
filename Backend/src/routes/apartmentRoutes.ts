import express from 'express';
import { isAuthenticatedUser, authorizeRoles } from '../authentication/auth';
import { createApartment,getApartmentById,getApartments,
    updateApartment,deleteApartment,addReview,getOccupiedApartments,getAllApartments } from "../controllers/apartmentControllers";

const router = express.Router();

router.route('/createApartment').post(isAuthenticatedUser,authorizeRoles('owner','manager'),createApartment);
router.route('/:id').get(isAuthenticatedUser,getApartmentById);
router.route('/').get(isAuthenticatedUser,getAllApartments);
router.route('/update/:id').put(isAuthenticatedUser,authorizeRoles('owner','manager'),updateApartment);
router.route('/delete/:id').delete(isAuthenticatedUser,authorizeRoles('manager','owner'),deleteApartment);
router.route('/addReview/:id').put(isAuthenticatedUser,addReview);
router.route('/free/aprt').get(isAuthenticatedUser,getApartments);
router.route('/occupied').get(isAuthenticatedUser,authorizeRoles('manager','owner'),getOccupiedApartments);

export default router;