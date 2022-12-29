import {dbConnect} from '../../../utils/mongoose';
import Liquidation from '../../../../backend/Models/Liquidation';

dbConnect();

export default async (req, res) => {
    const {method, body, query: {id}} = req

    switch(method){
        case "GET":
            try{
                const liquidation = await Liquidation.findById(id)
                if (!liquidation) return res.status(404).json({msg: "liquidacion no encontrada"});
                return res.status(200).json(liquidation)
            } catch (e) {
                return res.status(400).json({msg: "id incorrecto"});
            }
        case "PUT":
            try{
                const liquidation = await Liquidation.findByIdAndUpdate(id, body, {
                    new: true,
                });
                if (!liquidation) return res.status(404).json({msg: "liquidacion no encontrada"});
                return res.status(200).json(liquidation)
            } catch (e) {
                return res.status(400).json({msg: "id incorrecto"});
            }
        case "DELETE":
            try{
                const liquidation = await Liquidation.findByIdAndDelete(id)
                if (!liquidation) return res.status(404).json({msg: "liquidacion no encontrada"});
                return res.status(200).json(liquidation)
            } catch (e) {
                return res.status(400).json({msg: "id incorrecto"});
            }
        default:
            return res.status(400).json({msg: "wrong api call"});
    }
}