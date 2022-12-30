import {dbConnect} from '../../../utils/mongoose';
import Worker from '../../../../backend/Models/Worker';
import cargo from "../../../../backend/Models/Cargo";
import Liquidation from "../../../../backend/Models/Liquidation";
import AFP from "../../../../backend/Models/AFP";


dbConnect();
export default async function handler(req, res) {
    const {method} = req;

    switch (method){
        case "GET":
            try{
                const worker = await Worker.find().populate(['cargo', 'liquidations', 'previsionSocial']);
                return res.status(200).json(worker);
            } catch (e){
                console.log(e);
                return res.status(400).json({msg: 'error in GET protocol'});
            }
        default:
            return res.status(400).json({msg: 'method does not exists'});
    }
}