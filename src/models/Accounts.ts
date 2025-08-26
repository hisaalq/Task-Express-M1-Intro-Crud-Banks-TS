import {Schema,model} from "mongoose"



const AccountSchema = new Schema({
    username: {type: String, required: true},
    funds: {type: Number, required: true, default: 0},
    timestamp: {type: Date, required: true, default: Date.now},
});
const Account = model("Account", AccountSchema)
export default Account;