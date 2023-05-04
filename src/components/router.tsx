import {Router} from "express";
import { Carddetails } from "./cardcontroller";
// import Cardsdata from "./cardsdata";

const router =Router();

router.get('/course-details', Carddetails.carddashboard)

export default router