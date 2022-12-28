import {dbConnect} from '../../../utils/mongoose';
import AFP from '../../../../backend/Models/AFP';

dbConnect();
export default async function handler(req, res) {
    const {method, body} = req;

    switch (method){
        case "GET":
            const afps = await AFP.find()
            return res.status(200).json(afps);
        case "POST":
            try{
                const savedAfp = await AFP(body).save();
                return res.status(201).json(savedAfp);
            } catch (e) {
                console.log(e);
                break;
            }
        default:
            return res.status(400).json({msg: 'method does not exists'});
    }
}
