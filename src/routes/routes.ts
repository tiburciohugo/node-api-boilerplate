import { Hello } from '../controller/HelloController';
import { Router } from 'express';

const router = Router();

router.get('/', Hello);

export default router;
