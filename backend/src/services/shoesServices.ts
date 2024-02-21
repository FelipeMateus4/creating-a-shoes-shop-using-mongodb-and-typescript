import { ProductShoes } from "../models/shoes";
import { CreateShoesType} from "../types/shoesTypes";

const createProductShoes = async ( shoe: CreateShoesType ) =>{
    try {
        const newshoes = new ProductShoes(shoe)
        await newshoes.save()
        return newshoes;
    } catch (error) {
    throw (error)     
    }
};

export default{ createProductShoes };