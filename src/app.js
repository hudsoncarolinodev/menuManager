import express from "express"
import platesRouter from './routers/plates.routers'
import usersRouter from './routers/users.routers'

const app = express();
app.use(express.json())

app.use('/plates', platesRouter)
app.use('/users', usersRouter)


const port = 3000;

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});   