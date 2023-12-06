import axios from "axios";
import ApiManager from "./ApiManger";


const CreateAccount = async () => {

     const response = await axios.get("http://localhost:5006")

     return console.log(response.data)
}

export default CreateAccount;