import express from "express" ;
import bodyParser from "body-parser";

const app = express();
const port = 3000; // default port to listen

app.post( "/", bodyParser.json(), ( req: express.Request, res: express.Response ) => {
    console.log('---------------------------\n')
    console.log('guest', req.body.reservation.guest);
    console.log('listing', req.body.reservation.listing);

    res.send()
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );