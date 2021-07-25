import { Router } from 'express'
const router = Router()

// s.4.1  import student from controller
import * as studentCtrl from "../controllers/student.js"

/* GET users listing. */

// s.4.2 make a router index request 
router.get('/student', studentCtrl.index)

// s.4.3 make a router show/id request 
router.get('/student/:id', studentCtrl.show)

// s.4.4 make a router post request for create 
router.post('/student', studentCtrl.create)

// s.4.5 make a router put/id  request  for update
router.put('/student/:id', studentCtrl.update)

// s.4.6 make a router put/id  request  for delete
router.delete('/student/:id', studentCtrl.delete)


export {
  router
}
