import {dbConnect} from '../../../utils/mongoose';
import Liquidation from '../../../../backend/Models/Liquidation';

dbConnect();
export default async function handler(req, res) {
    const {method, body} = req;

    switch (method){
        case "GET":
            const liquidation = await Liquidation.find()
            return res.status(200).json(liquidation);
        case "POST":
            try{
                const liquidation = await Liquidation(body).save();
                return res.status(201).json(liquidation);
            } catch (e) {
                console.log(e);
                break;
            }
        default:
            return res.status(400).json({msg: 'method does not exists'});
    }
}
