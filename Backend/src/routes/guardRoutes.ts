import express from 'express';
import { isAuthenticatedUser, authorizeRoles } from "../authentication/auth";

import { acceptVisitor,rejectVisitor,allVisitors,allAcceptedVisitors,allRejectedVisitors } from '../controllers/guardControllers';

const router = express.Router();

router.route('/acceptVisitor/:id').put(isAuthenticatedUser,authorizeRoles('security guard'),acceptVisitor);
router.route('/rejectVisitor/:id').put(isAuthenticatedUser,authorizeRoles('security guard'),rejectVisitor);
router.route('/allVisitors').get(isAuthenticatedUser,authorizeRoles('security guard'),allVisitors);
router.route('/allAcceptedVisitors').get(isAuthenticatedUser,authorizeRoles('security guard'),allAcceptedVisitors);
router.route('/allRejectedVisitors').get(isAuthenticatedUser,authorizeRoles('security guard'),allRejectedVisitors);

export default router;