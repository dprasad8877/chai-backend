// require ('dotenv').config({path:'./env'})
// import express from "express";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';
dotenv.config();

// dotenv.config({
//   path: "./env",
// });
console.log(process.env.MONGO_URI)
connectDB();
