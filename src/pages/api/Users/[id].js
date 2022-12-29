import {dbConnect} from '../../../utils/mongoose';
import User from '../../../../backend/Models/Users';

dbConnect();

export default async (req, res) => {
    const {method, body, query: {id}} = req;

    switch(method){
        case "GET":
            try{
                const user = await User.findById(id);
                if (!user) return res.status(404).json({msg: "user not found"});
                return res.status(200).json(user);
            } catch (e) {
                return res.status(400).json({msg: "invalid id"});
            }
        case "PUT":
            try{
                const user = await User.findByIdAndUpdate(id, body, {
                    new: true,
                });
                if (!user) return res.status(404).json({msg: "user not found"});
                return res.status(200).json(user);
            } catch (e) {
                return res.status(400).json({msg: "invalid id"});
            }
        case "DELETE":
            try{
                const user = await User.findByIdAndDelete(id);
                if (!user) return res.status(404).json({msg: "user not found"});
                return res.status(200).json(user);
            } catch (e) {
                return res.status(400).json({msg: "invalid id"});
            }
        default:
            return res.status(400).json({msg: "wrong api call"});
    }
}
