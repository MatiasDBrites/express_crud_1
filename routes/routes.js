import express from "express";

// Import School Controller
import { //importramos todos los Controller que tenemos 
    getGuilds,
    getGuildById,
    createGuild,
    updateGuild,
    deleteGuild
} from "../controllers/guilds.js";

const router = express.Router();

 // Route get all guilds
router.get('/guild', getGuilds);
// Route get guild by id
router.get('/guild/:id', getGuildById);
// Route create a new guild
router.post('/guild', createGuild);
// Route update guild by id
router.put('/guild/:id', updateGuild);
// Route delete guild by id
router.delete('/guild/:id', deleteGuild);

// export router
export default router;