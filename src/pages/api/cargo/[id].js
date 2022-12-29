import {dbConnect} from '../../../utils/mongoose';
import Cargo from '../../../../backend/Models/Cargo';

dbConnect();

export default async (req, res) => {
    const {method, body, query: {id}} = req;

    switch(method){
        case "GET":
            try{
                const cargo = await Cargo.findById(id);
                if (!cargo) return res.status(404).json({msg: "cargo not found"});
                return res.status(200).json(cargo);
            } catch (e) {
                return res.status(400).json({msg: "invalid id"});
            }
        case "PUT":
            try{
                const cargo = await Cargo.findByIdAndUpdate(id, body, {
                    new: true,
                });
                if (!cargo) return res.status(404).json({msg: "cargo not found"});
                return res.status(200).json(cargo);
            } catch (e) {
                return res.status(400).json({msg: "invalid id"});
            }
        case "DELETE":
            try{
                const cargo = await Cargo.findByIdAndDelete(id);
                if (!cargo) return res.status(404).json({msg: "cargo not found"});
                return res.status(200).json(cargo);
            } catch (e) {
                return res.status(400).json({msg: "invalid id"});
            }
        default:
            return res.status(400).json({msg: "wrong api call"});
    }
}
