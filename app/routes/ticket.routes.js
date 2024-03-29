import { createTicket, getAllTickets, updateTicketStatus, deleteTicket } from "../controllers/ticket.controller.js";
import authJwt from "../middlewares/authjwt.js";

export default (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get('/tickets', 
    [authJwt.verifyToken],
    getAllTickets
    )

    app.post('/ticket/create',
    [authJwt.verifyToken],
    createTicket
    )

    app.put('/ticket/update',
    [authJwt.verifyToken],
    updateTicketStatus)

    app.delete('/ticket/destroy',
    [authJwt.verifyToken],
    deleteTicket)
}