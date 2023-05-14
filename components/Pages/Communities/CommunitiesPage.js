import { useEffect, useState } from "react";
import { CommunitiesPageContainer } from "./CommunitiesPage.styled";
import CommunityList from "./CommunityList/CommunityList";
import axios from "@/lib/axios";
import { useAuth } from "@/hooks/useAuth";
import CommunityEditor from "./CommunityEditor/CommunityEditor";

const CommunitiesPage = () => {
    const [communityObjects, setCommunityObjects] = useState(null)
    const [displayEditor, setDisplayEditor] = useState(false)
    const {user} = useAuth({middleware: "guest"})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchCommunities();
    }, []);
    const fetchCommunities = async () => {
        try{
            const res = await axios.get("/api/community/all");
            setCommunityObjects(res.data.objects);
            setLoading(false);
        }catch(err){
            console.log(err);
        }
    }
    return (
        <CommunitiesPageContainer>
            <div className="top">
                <div className="banner"></div>
                <div className="title">
                    <h1>Communities</h1>
                    <button className="createCommunity" onClick={()=>{setDisplayEditor(true)}}>Create</button>
                </div>
            </div>
            <CommunityList loading={loading} communityObjects={communityObjects}/>
            {
                displayEditor
                ? <CommunityEditor setVisibility={setDisplayEditor} user={user}/>
                : null
            }
        </CommunitiesPageContainer>
    );
}

export default CommunitiesPage;