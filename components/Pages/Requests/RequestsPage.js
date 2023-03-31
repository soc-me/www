import UserList from "@/components/Common/UserList/UserList";
import { RequestsPageContainer } from "./RequestsPage.styled";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

const RequestsPage = ({user}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [userObjects, setUserObjects] = useState(null)
    const getPendingRequests = async() => {
        try{
            const res = await axios(`/api/follow/pendingrequests/${user.id}`)
            setUserObjects(res.data.userObjects)
            setIsLoading(false)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getPendingRequests()
    }, [user])
    return (
        <RequestsPageContainer>
            <div className="requestsPageInner">
                <h1>Follow Requests</h1>
                <div className="userListOuter">
                    <UserList userObjects={userObjects}  isLoading={isLoading} updateFn={setUserObjects}/>
                </div>
            </div>
        </RequestsPageContainer>
    );
}


export default RequestsPage;