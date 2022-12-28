import {dbConnect} from "../../../utils/mongoose";
import AFP from '../../../../backend/Models/AFP';

dbConnect();

export default async (req, res) => {
    const {method, body, query: {id}} = req

    switch(method){
        case "GET":
            try{
                const afp = await AFP.findById(id)
                if (!afp) return res.status(404).json({msg: "afp no encontrada"});
                return res.status(200).json(afp)
            } catch (e) {
                return res.status(400).json({msg: "id incorrecto"});
            }
        case "PUT":
            try{
                const afp = await AFP.findByIdAndUpdate(id, body, {
                    new: true,
                });
                if (!afp) return res.status(404).json({msg: "afp no encontrada"});
                return res.status(200).json(afp)
            } catch (e) {
                return res.status(400).json({msg: "id incorrecto"});
            }
        case "DELETE":
            try{
                const afp = await AFP.findByIdAndDelete(id)
                if (!afp) return res.status(404).json({msg: "afp no encontrada"});
                return res.status(200).json(afp)
            } catch (e) {
                return res.status(400).json({msg: "id incorrecto"});
            }
        default:
            return res.status(400).json({msg: "wrong api call"});
    }
}