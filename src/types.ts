import { User } from "firebase/auth";

export interface UploadImagePropsI {
    imageUri: string | null | undefined;
    userID: string;
  }

export interface saveUserDataI {
    imgURL?:string,
    name?:string,
    gender?:Genders,
    height?:number,
    age?:number,
    weight?:number,
    goalWeight?:number,
    fat?:number,
    goal?:Goals,
    experience?:Experience,
    frequency?:number
    diet?:DietTypes
}
export interface userDataI extends saveUserDataI{
  auth:User | null,
}

export interface authContextI {
  user:userDataI | null,
  isLoading:boolean,
  logOut:()=>void,
  setUserAuth:(data:User)=>void
}

export enum Genders {
    Male="Hombre",
    Female="Mujer",
    Other="Otro"
}

export enum Goals {
    MuscleGain = "Ganar masa muscular",
    LoseFat = "Bajar de peso",
    Maintain = "Mantener peso",
    ImproveEndurance = "Mejorar resistencia",
    ImproveHealth = "Mejorar salud general",
    IncreaseStrength = "Aumentar fuerza",
    ImproveFlexibility = "Mejorar flexibilidad",
    Tone = "Tonificar cuerpo",
  }

  export enum Experience {
    Beginner = "Principiante",
    Intermediate = "Intermedio",
    Advanced = "Avanzado",
    Expert = "Experto",
  }

  export enum DietTypes {
    Balanced = "Dieta equilibrada",
    HighProtein = "Alta en proteínas",
    LowCarb = "Baja en carbohidratos",
    Keto = "Keto (cetogénica)",
    Vegetarian = "Vegetariana",
    Vegan = "Vegana",
    Mediterranean = "Mediterránea",
    Paleo = "Paleo",
    GlutenFree = "Sin gluten",
    LowFat = "Baja en grasas",
    IntermittentFasting = "Ayuno intermitente",
    DASH = "DASH (hipertensión)",
    Diabetic = "Dieta para diabéticos"
  }