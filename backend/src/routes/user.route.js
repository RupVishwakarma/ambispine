import express from 'express';
import { Registration, Login } from './../controller/User.controller.js'
import { SaveFeedback, SaveRequestService } from './../controller/Contact.controller.js'
const userRouter = express.Router()

userRouter.post('/register', Registration);
userRouter.post('/login', Login);
userRouter.post('/feedback', SaveFeedback);
userRouter.post('/request-service', SaveRequestService)
// userRouter.post('/career', )
export default userRouter;