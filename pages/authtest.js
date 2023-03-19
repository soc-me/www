import { useAuth } from "@/hooks/useAuth";
import axios from '@/lib/axios'


const authTest = () => {
    const {user} = useAuth({middleware: 'auth'})
    console.log(user)
    if(user){
        axios
        .get('/api/posts')
        .then(response => console.log(response.data))
        .catch(error => {
            if (error.response.status !== 422) throw error
            console.log(error)
        })
    }
    return (
        <div>
            Protected
        </div>
    );
}

export default authTest;