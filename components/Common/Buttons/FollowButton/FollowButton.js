import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";
import { FollowButtonContainer } from "./FollowButton.styled";

const FollowButton = ({currUser, compareToUser}) => {   
    // Get current follow status
    const [status, setStatus] = useState('null');
    const [isLoading, setIsLoading] = useState(true);
    const getFollowStatus = async() => {
        try{
            const {data}  = await axios(`http://localhost:8000/api/follow/status/${compareToUser.id}`);
            console.log(data)
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
                const {data} = await axios.post(`http://localhost:8000/api/follow/create/${compareToUser.id}`);
                console.log(data)
                setStatus(data.response);
            }
            else{
                setStatus('null')
                const {data} = await axios.delete(`http://localhost:8000/api/follow/delete/${compareToUser.id}`);
                console.log(data)
                setStatus(data.response);
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