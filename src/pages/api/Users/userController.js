import {dbConnect} from '../../../utils/mongoose';
import User from '../../../../backend/Models/Users';

dbConnect();
export default async function handler(req, res) {
    const {method, body, query:{email, password}} = req;

    switch (method){
        case "GET":
            try{
                const users = await User.find({$and: [{email: email},{password: password}]});
                return res.status(200).json(users);
            }catch (e) {
                console.log(e);
                return res.status(400).json({msg: 'no se ha encontrado usuario'});
            }
        case "POST":
            try{
                const user = await new User(body).save();
                return res.status(201).json(user);
            } catch (e) {
                console.log(e);
                break;
            }
        default:
            return res.status(400).json({msg: 'method does not exists'});
    }
}
