import express from "express"
import { getBook } from "../controller/book.controllers.js"

const router=express.Router();

router.get("/",getBook)

export default router
