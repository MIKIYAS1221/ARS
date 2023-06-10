import { isAuthenticatedUser, authorizeRoles } from "../authentication/auth";
import { authorizeRoleChange } from "../authentication/rolecontrolls";
import { getAllTenants, getSingleUser, deleteUser } from "../controllers/managerController";
import { getPaymentByUserId } from "../controllers/paymentController";
import express from 'express';

const router = express.Router();

router.route('/allTenants').get(isAuthenticatedUser,authorizeRoles('manager','security guard'),getAllTenants);
router.route('/user/:id').get(isAuthenticatedUser,authorizeRoles('manager','owner','security guard'),getSingleUser);
router.route('/user/delete/:id').delete(isAuthenticatedUser,authorizeRoles('manager','owner'),authorizeRoleChange,deleteUser);
router.route('/payment').get(isAuthenticatedUser,authorizeRoles('manager','owner','tenant'),getPaymentByUserId);


export default router;