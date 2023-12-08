import axios from "axios";
import ApiManager from "./ApiManger";


const CreateAccount = async () => {

     const response = await axios.get("http://127.0.0.1:8000/v1/hi")

     return console.log(response.data)
}

export default CreateAccount;