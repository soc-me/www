import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import { AccountPageContainer } from "./AccountPage.styled";

const AccountPage = ({minimalUserObject}) => {
    const [postObjects, setPostObjects] = useState(null)
    const [isPrivate, setIsPrivate] = useState(null)
    //getting the complete user object
    const fetchData = async() => {
        try{
            const response = await axios.get(`/api/post/user/${minimalUserObject.id}`)
            console.log(response.data)
            if(response.data.isPrivate){
                setIsPrivate(true)
            }else{
                setIsPrivate(false)
                setPostObjects(response.data.postObjects)
            }
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <AccountPageContainer>
            Account Page
        </AccountPageContainer>
    );
}

export default AccountPage;