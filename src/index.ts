import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import { startDB } from './db'

const PORT = process.env.PORT;
const URI_CONN = process.env.URI_CONN;

app.listen(PORT, async () => {
    try {
        if (URI_CONN) {
            await startDB(URI_CONN);
            console.log(`App is ready and running at port ${PORT}`)
        }
    } catch (error) {
        console.error(error);
        process.abort();
    }
})