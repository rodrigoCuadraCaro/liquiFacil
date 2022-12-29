import {dbConnect} from '../../../utils/mongoose';
import Cargo from '../../../../backend/Models/Cargo';

dbConnect();
export default async function handler(req, res) {
    const {method, body} = req;

    switch (method){
        case "GET":
            const cargos = await Cargo.find();
            return res.status(200).json(cargos);
        case "POST":
            try{
                const cargo = await new Cargo(body).save();
                return res.status(200).json(cargo);
            } catch (e) {
                console.log(e);
                break;
            }
        default:
            return res.status(400).json({msg: 'method does not exists'});
    }
}
