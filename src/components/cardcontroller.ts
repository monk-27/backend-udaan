
import {Request,Response} from "express";
import { carddata } from "./cardsdata";

const carddashboard = async(request:Request,response:Response)=>{
    try{
        const carddashboardData = await carddata.Cardsdata;
        response.status(200).json(carddashboardData);
        console.log("carddata", carddashboardData)
    } catch(error){
        console.error(error);
        response.status(500).json({message:"internal server error"})
    }
}
export const Carddetails={
    carddashboard,
}