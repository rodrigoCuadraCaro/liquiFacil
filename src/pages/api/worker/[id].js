import {dbConnect} from '../../../utils/mongoose';
import Worker from '../../../../backend/Models/Worker';

dbConnect();

export default async (req, res) => {
    const {method, body, query: {id}} = req

    switch(method){
        case "GET":
            try{
                const worker = await Worker.findById(id)
                if (!worker) return res.status(404).json({msg: "trabajador/a no encontrado/a"});
                return res.status(200).json(worker)
            } catch (e) {
                return res.status(400).json({msg: "id incorrecto"});
            }
        case "PUT":
            try{
                const worker = await Worker.findByIdAndUpdate(id, body, {
                    new: true,
                });
                if (!worker) return res.status(404).json({msg: "trabajador/a no encontrado/a"});
                return res.status(200).json(worker)
            } catch (e) {
                return res.status(400).json({msg: "id incorrecto"});
            }
        case "DELETE":
            try{
                const worker = await Worker.findByIdAndDelete(id)
                if (!worker) return res.status(404).json({msg: "trabajador/a no encontrado/a"});
                return res.status(200).json(worker)
            } catch (e) {
                return res.status(400).json({msg: "id incorrecto"});
            }
        default:
            return res.status(400).json({msg: "wrong api call"});
    }
}