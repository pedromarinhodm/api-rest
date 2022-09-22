import { Schema } from "mongoose";
import mongoose from "mongoose";

const CarModel = new Schema({

    marca: String,
    modelo: String,
    versao: String,
    ano: Number,
    km: Number,
    cambio: String,
    preço: Number,

},
{timestamps: true})

export default mongoose.model('car', CarModel)