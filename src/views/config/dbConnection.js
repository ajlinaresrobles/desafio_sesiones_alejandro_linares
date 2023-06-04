import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://ajlinaresrobles:Ale120384.@cluster0.wqwvedx.mongodb.net/desafioSesionesDB?retryWrites=true&w=majority");
        console.log("base de datos conectada");
    } catch (error) {
        console.log(`Error al conectar la base de datos ${error.message}`);

    }
}