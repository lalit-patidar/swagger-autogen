import express from "express";

const router = express.Router();

/**
 * @swagger
 *  /startup: 
 *     get: 
 *       description: get the details of startup:
 *       responses: 
 *         200: 
 *         description: ok
 *         schema: 
 *           type: string
 *         404:
 *         description: not found;
 *         schema: 
 *           type: string
 */

router.get("/startup", (req, res) => {
    res.send("hello startups your doing greate go ahead")
})

export default router;