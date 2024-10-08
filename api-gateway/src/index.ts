import express ,{Application} from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import proxy from "express-http-proxy"

const app:Application = express()
const port : number = 8000
const corsOptions={
    // origin:'http://localhost:5173',
    origin:'https://bureaudesk-frontend.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())

app.use('/auth',proxy('https://bureaudesk-backend-auth.onrender.com/'));
app.use('/user',proxy('https://bureaudesk-backend-user.onrender.com/'));
app.use('/company',proxy('https://bureaudesk-backend-company.onrender.com/'));
app.use('/chat',proxy('https://bureaudesk-backend-chat.onrender.com/'));
app.use('/notification',proxy('https://bureaudesk-backend.onrender.com/'));

// app.use('/auth',proxy('http://localhost:3000/'));
// app.use('/user',proxy('http://localhost:3001/'));
// app.use('/company',proxy('http://localhost:3002/'));
// app.use('/chat',proxy('http://localhost:3005/'));
// app.use('/notification',proxy('http://localhost:3007'));


app.listen(port,()=>{
    console.log(`gateway running in port${port}`)
})

