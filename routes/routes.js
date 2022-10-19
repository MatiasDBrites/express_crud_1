import express from "express";

// Import School Controller
import { //importramos todos los Controller que tenemos 
    getGuilds,
    getGuildById,
    createGuild,
    updateGuild,
    deleteGuild
} from "../controllers/guilds.js";

const Router = express.Router();

 // Route get all guilds
Router.get('/guild', getGuilds);
// Route get guild by id
Router.get('/guild/:id', getGuildById);
// Route create a new guild
Router.post('/guild', createGuild);
// Route update guild by id
Router.put('/guild/:id', updateGuild);
// Route delete guild by id
Router.delete('/guild/:id', deleteGuild);

// export router
export default Router;
