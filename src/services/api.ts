
import axios from "axios";
import { MuscleList } from "../types";
const api = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1/exercises',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': process.env.EXPO_PUBLIC_API_KEY_EXERCISE,
    }
  });

export const  getExerciseByMuscle = async(muscle:MuscleList)=>{
    try{
        const res = await api.get("/allexercises?muscle="+muscle)
        return res.data
    }
    catch(error:any){
        console.error("error getExerciseByMuscle service: ",error)
        throw new Error(error)
    }
}

export const getBodyParts = async():Promise<string[]>=>{
    try{
        const res = await api.get("/bodyPartList")
        return res.data
    }
    catch(error:any){
        console.error("error getBodyParts service: ",error)
        throw new Error(error)
    }
}