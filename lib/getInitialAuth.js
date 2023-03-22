import axios from "./axios";

const getInitialAuth = async() => {
    try{
        const response = await axios.get('/api/user')
        return response
    }catch(error){
        return error
    }
}

export default getInitialAuth;