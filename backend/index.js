import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import pdf from "html-pdf";
import dotenv from "dotenv";
import http from "http"; 
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import pdfSample from './/pdf-sample/index.js';
import path from 'path';
import Razorpay from 'razorpay';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const paymentRoute = require('./routes/paymentRoute');

// app.use('/',paymentRoute);

dotenv.config({});

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: [
    "http://localhost:5173", // local
    "https://careerconnect2-frontend.onrender.com", // deployed frontend
  ],
  credentials: true,
};
app.use(cors(corsOptions));


const PORT = process.env.PORT || 3000;


app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);


const server = http.createServer(app);
server.timeout = 300000; 


app.post("/create-pdf", (req, res) => {
    pdf.create(pdfSample(req.body), {}).toFile("Resume.pdf", (err) => {
      if (err) {
        res.send(Promise.reject());
        console.log(err);
      }
      res.send(Promise.resolve());
      console.log("Success");
    });
  });
  

app.get("/fetch-pdf", (req, res) => {
    res.sendFile(path.join(__dirname, "Resume.pdf"));
});

  
  app.use(express.static("../client/build"));

  app.post("/order", async (req, res) => {
    try {
      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });
  
      const options = req.body;
      const order = await razorpay.orders.create(options);
  
      if (!order) {
        return res.status(500).send("Error");
      }
  
      res.json(order);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error");
    }
  });
  
  app.post("/order/validate", async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

      
  
    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    //order_id + "|" + razorpay_payment_id
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = sha.digest("hex");
    if (digest !== razorpay_signature) {
      return res.status(400).json({ msg: "Transaction is not legit!" });
    }
  
    res.json({
      msg: "success",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });
  });


server.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
});
