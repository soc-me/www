import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";
import { FollowButtonContainer } from "./FollowButton.styled";

const FollowButton = ({currUser, compareToUser, updateCount}) => {   
    // Get current follow status
    const [status, setStatus] = useState('null');
    const [isLoading, setIsLoading] = useState(true);
    const getFollowStatus = async() => {
        try{
            const {data}  = await axios(`/api/follow/status/${compareToUser.id}`);
            setStatus(data.response);
        }catch(err){
            console.log(err);
        }finally{
            setIsLoading(false);
        }
    }
    const setFollow = async(isFollowRequest) => {
        try{    
            if(isFollowRequest){
                setStatus('requested')
                const {data} = await axios.post(`/api/follow/create/${compareToUser.id}`);
                setStatus(data.response);
                updateCount(data.followCount)
            }
            else{
                setStatus('null')
                const {data} = await axios.delete(`/api/follow/delete/${compareToUser.id}`);
                setStatus(data.response);
                updateCount(data.followCount)
            }
        
        }catch(err){
            console.log(err);
        }
    }
    const cancelRequest = async() => {}
    useEffect(()=>{
        getFollowStatus();
    },[currUser])
    if(isLoading){
        return null
    }else{
        return (
            <FollowButtonContainer>
                {
                    status==='following'
                    ? <span onClick={()=> setFollow(false)}>Unfollow</span> 
                    : (
                        status==='requested'
                        ? <span onClick={cancelRequest}>Reqeusted</span>                
                        : <span onClick={()=>setFollow(true)}>Follow</span>   
                    )
                }
            </FollowButtonContainer>
        );
    }
}

export default FollowButton;