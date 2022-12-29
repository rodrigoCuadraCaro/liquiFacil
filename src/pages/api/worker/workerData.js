import {dbConnect} from '../../../utils/mongoose';
import Worker from '../../../../backend/Models/Worker';
import cargo from "../../../../backend/Models/Cargo";

dbConnect();
export default async function handler(req, res) {
    const {method, body, query: {id}} = req;


    switch (method){
        case "GET":
            const worker = await Worker.find().populate(['cargo', 'previsionSocial']);
            return res.status(200).json(worker);
        case "POST":
            try{
                const savedWorker = await Worker(body).save();
                return res.status(201).json(savedWorker);
            } catch (e) {
                console.log(e);
                break;
            }
        default:
            return res.status(400).json({msg: 'method does not exists'});
    }
}
