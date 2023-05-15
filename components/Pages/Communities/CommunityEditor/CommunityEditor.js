import { useState } from "react";
import { CommunityEditorContainer } from "./CommunityEditor.styled";
import axios from "@/lib/axios";
import Spinner from "@/components/Common/Spinner/Spinner";
import { useRouter } from "next/router";

const CommunityEditor = ({edit, setVisibility, user}) => {
    const [name, setName] = useState("");
    const [visibilityInput, setVisibilityInput] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const createCommunity = async (e) => {
        if(!user){
            router.push("/login");
        }
        setError(null);
        setLoading(true);
        const formData = new FormData();
        formData.append("community_name", name);
        formData.append("community_description", description);
        formData.append("hide_posts_from_home", visibilityInput);
        try{
            const res = await axios.post("/api/community/create", formData);
            router.push(`/community/${res.data.object.id}`);
        }
        catch(err){
            console.log(err);
            setError(err.response.data.message);
        }finally{
            setLoading(false);
        }
    }
    return (
        <CommunityEditorContainer className="center" onSubmit={(e)=>{
            e.preventDefault();
            createCommunity(e);
        }}>
            <div className="modal">
                <div className="title">
                    {
                        edit
                        ? <h2>Edit Community</h2>
                        : <h2>Create a community</h2>
                    }
                </div>
                <div className="formEl name">
                    <h3>Name</h3>
                    <label htmlFor="name">A unique name for your community.</label>
                    <input type="text" name="name" id="name" placeholder="Community name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="formEl description">
                    <h3>Description</h3>
                    <label htmlFor="description">A short description of your community.</label>
                    <input type="text" name="description" id="description" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className="formEl visibility">
                    <h3>Visibility</h3>
                    <label htmlFor="visibility">Type HIDE to hide posts from the home page, or UNHIDE not to.</label>
                    <input type="text" name="visbility" id="visibility" placeholder="Visibility" value={visibilityInput} onChange={(e)=>setVisibilityInput(e.target.value)}/>
                </div>
                        {
                            error
                            ? <p className="error">{error}</p>
                            : null
                        }
                <div className="controls">
                    <button type="submit" className="create center">
                        {
                            loading
                            ? <Spinner size={20} border={3}/>
                            : "Create"
                        }
                    </button>
                    <button type="button" className="cancel center" onClick={()=>{setVisibility(false)}}>Cancel</button>
                </div>
            </div>
        </CommunityEditorContainer>
    );
}

export default CommunityEditor;