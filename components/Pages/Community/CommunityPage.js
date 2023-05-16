import { useAuth } from "@/hooks/useAuth";
import New from "../Index/New/New";
import { CommunityPageContainer } from "./CommunityPage.styled";
import { useEffect, useState } from "react";
import PostList from "@/components/Common/PostList/PostList";
import axios from "@/lib/axios";
import { GLOBAL } from "@/GLOBAL";
import { useRouter } from "next/router";
import Spinner from "@/components/Common/Spinner/Spinner";

const CommunityPage = ({communityInfo}) => {
    const [postObjects, setPostObjects] = useState(null)
    const [loading, setIsLoading] = useState(true)
    const [displayEditForm, setDisplayEditForm] = useState(false)
    const [bannerImageSrc, setBannerImageSrc] = useState((communityInfo.community_banner_image_url!=null && communityInfo.community_banner_image_url!='null') ? `${GLOBAL.APP_URL}${communityInfo.community_banner_image_url}` : "/communitiesBanner.jpg")
    const [iconImageSrc, setIconImageSrc] = useState((communityInfo.community_icon_image_url && communityInfo.community_icon_image_url!='null') ? `${GLOBAL.APP_URL}${communityInfo.community_icon_image_url}`  : "/communityGenericImage.png")
    const {user} = useAuth({middleware: "guest"})
    const router = useRouter();
    const [editLoading, setEditLoading] = useState(false)
    const [editError, setEditError] = useState(null)
    const [generalError, setGeneralError] = useState(null)
    useEffect(()=>{
        fetchPosts()
    },[])
    const fetchPosts = async() => {
        try{
            const response = await axios.get(`/api/post/community/${communityInfo.id}`)
            setPostObjects(response.data.postObjects)
        }catch(error){
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }
    const handleBannerFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.addEventListener("load", function () {
                setBannerImageSrc(this.result);
            });
            reader.readAsDataURL(file);
        }
    }
    const handleIconFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.addEventListener("load", function () {
                setIconImageSrc(this.result);
            });
            reader.readAsDataURL(file);
        }
    }
    const handleAppearanceSubmit = async(e) => {
        const formData = new FormData()
        setEditError(null)
        if(!e.target.community_banner_image_url.files[0] && !e.target.community_icon_image_url.files[0]) return
        if(e.target.community_banner_image_url.files[0]) formData.append('bannerImage', e.target.community_banner_image_url.files[0])
        if(e.target.community_icon_image_url.files[0]) formData.append('iconImage', e.target.community_icon_image_url.files[0])
        try{
            setEditLoading(true)
            const response = await axios.post(`/api/community/update/${communityInfo.id}`, formData)
            router.reload()
        }catch(error){
            setEditError(error.response.data.message)
        }finally{
            setEditLoading(false)
        }
    }
    const changeVisbility = async() => {
        setGeneralError(null)
        const formData = new FormData()
        formData.append('hide_posts_from_home', communityInfo.hide_posts_from_home ? 'false' : 'true')
        try{
            const response = await axios.post(`/api/community/update/${communityInfo.id}`, formData)
            router.reload()
        }catch(error){
            setGeneralError(error.response.data.message)
        }
    }
    const deleteCommunity = async() => {
        setGeneralError(null)
        try{
            const response = await axios.delete(`/api/community/delete/${communityInfo.id}`)
            router.push('/communities')
        }catch(error){
            setGeneralError(error.response.data.message)
        }
    }
    return (
        <CommunityPageContainer>
            <div className="communityInner">
                <div className="top">
                    <div className="banner"
                        style={{backgroundImage: `url(${(communityInfo.community_banner_image_url!=null && communityInfo.community_banner_image_url!=='null') ? `${GLOBAL.APP_URL}${communityInfo.community_banner_image_url}` : "/communitiesBanner.jpg"})`}}
                    ></div>
                    <div className="title">
                        <div className="communityLogo"
                            style={{backgroundImage: `url(${communityInfo.community_icon_image_url!=null && communityInfo.community_icon_image_url!=='null' ? `${GLOBAL.APP_URL}${communityInfo.community_icon_image_url}` : "/communityGenericImage.png"})`}}
                        ></div>
                        <h1>{communityInfo.community_name}</h1>
                        {
                            communityInfo.hide_posts_from_home
                            ? <span className="hiddenMessage"></span>
                            : null
                        }
                        {
                            user && (user.id == communityInfo.owner_user_id  || user.isAdmin || user.name==='GUEST')
                            ? <button onClick={()=>{setDisplayEditForm(!displayEditForm)}} className="communityControls">
                                <div className="settingsIcon"></div>
                                <span>Edit</span>
                            </button>
                            : null
                        }
                    </div>
                    <div className="about">
                        <h2>About</h2>
                        <p>{communityInfo.community_description}</p>
                    </div>
                </div>
                {
                    !displayEditForm
                    ? null
                    : (
                        <div className="editForm">
                            <form className="general" onSubmit={(e)=>{
                                e.preventDefault()
                            }}>
                                <h2>General</h2>
                                <div className="formEl visibility">
                                    <h3>Community Visbility</h3>
                                    <label>Change your visbility - hidden posts do not appear on the home page.</label>   
                                    <button className="visibility" onClick={changeVisbility}>
                                        {
                                            communityInfo.hide_posts_from_home ? 'Unhide' : 'Hide'
                                        }
                                    </button>
                                </div>
                                <div className="formEl delete" onClick={deleteCommunity}>
                                    <h3>Delete community</h3>
                                    <label>This action is permanent and cannot be reversed.</label>   
                                    <button className="delete">Delete</button>
                                </div>
                                {
                                    generalError
                                    ? <div className="error general">{generalError}</div>
                                    : null
                                }
                            </form>
                            <form className="appearance" onSubmit={(e)=>{
                                e.preventDefault()
                                handleAppearanceSubmit(e)
                            }}>
                                <h2>Appearance</h2>
                                <div className="formEl banner">
                                    <h3>Community Banner</h3>
                                    <label htmlFor="community_banner_image_url">Change your community banner.</label>
                                    <div className="bannerContainer center imageContainer">
                                        {/* <img src={bannerImageSrc} alt="Community Banner"/> */}
                                        <div className="imageDisplay"
                                            style={{backgroundImage: `url(${bannerImageSrc})`}}
                                        ></div>
                                        <input type="file" name="community_banner_image_url" id="community_banner_image_url" onChange={(e)=>{handleBannerFileChange(e)}}/>
                                    </div>
                                </div>
                                <div className="formEl logo">
                                    <h3>Community Icon</h3>
                                    <label htmlFor="community_icon_image_url">Change your community icon.</label>
                                    <div className="iconContainer center imageContainer">
                                        <div className="imageDisplay"
                                            style={{backgroundImage: `url(${iconImageSrc})`}}
                                        ></div>
                                        {/* <img src={iconImageSrc} alt="Community Icon"/> */}
                                        <input type="file" name="community_icon_image_url" id="community_icon_image_url" onChange={(e)=>{handleIconFileChange(e)}}/>
                                    </div>
                                </div>
                                {
                                    editError
                                    ? <div className="error">{editError}</div>
                                    : null
                                }
                                <div className="controls">
                                    <button className="save center">
                                        {
                                            editLoading
                                            ? <Spinner size={20} border={3}/>
                                            : <span>Save</span>
                                        }
                                    </button>
                                    <button className="cancel  center" onClick={()=>{setDisplayEditForm(false)}}>Close</button>
                                </div>
                            </form>
                        </div>
                    )
                }
                <div className="bottom">
                    <div className="newContainer">
                        <New 
                            uploadToURL={`/api/post/create`}
                            addToList={(newPost) => {setPostObjects([newPost, ...postObjects])}}
                            loggedIn={user}
                            // placeHolder={'Post to this community.'}
                            communityID={communityInfo.id}
                        />
                    </div>
                    <div className="postListContainer">
                        <PostList
                            postObjects={postObjects}
                            isLoading={loading}
                            user={user}
                            isCommentList={false}
                            customNotFoundMessage={"No posts in this community"}
                        />
                    </div>
                </div>
            </div>
        </CommunityPageContainer>
    );
}

export default CommunityPage;