import { useAuth } from "@/hooks/useAuth";


const authTest = () => {
    const {user} = useAuth({middleware: 'auth')
    return (
        <div>
            Protected
        </div>
    );
}

export default authTest;