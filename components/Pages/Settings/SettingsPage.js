import { GLOBAL } from "@/GLOBAL";
import { useRef, useState } from "react";
import { SettingsContainer } from "./SettingsPage.styled";
import Image from 'next/image';
import saveIcon from '@/public/saveIcon.png'
import Spinner from "@/components/Common/Spinner/Spinner";
import axios from "@/lib/axios";
import { useRouter } from "next/router";

const SettingsPage = ({user}) => {
    const [imgSrc, setImgSrc] = useState('');
    const [bio, setBio] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const imageRef = useRef(null);
    const router = useRouter();
    function handleFileChange(e) {
      const file = e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
          setImgSrc(this.result);
        });
        reader.readAsDataURL(file);
      }
    }
    const handleAccountUpdate = async (e) => {
        e.preventDefault()
        if(!imgSrc && !bio){
            return
        }
        setLoading(true)
        const formData = new FormData();
        if(imgSrc){
            const file = imageRef.current.files[0];
            formData.append('image', file);
        
        }
        if(bio){
            formData.append('bio', bio);
        }
        try {
            const res  = await axios.post(`/api/user/update/${user.id}`, formData)
            window.location.href = `/account/${user.id}`
        } catch (error) {
            console.log(error)
            setError(error.response.data.message)
        }finally{
            setLoading(false)
        }
    }
    // Account privacy
    const makePrivate = async(newPrivacy)=>{
        try{
            const formData  = new FormData();
            formData.append('is_private', newPrivacy)
            const res = await axios.post(`/api/user/update/${user.id}`, formData)
            router.push(`/account/${user.id}`)
        }catch(err){
            console.log(err)
        }
    }
    // Logout
    const logout = async() => {
        try{
            const res = await axios.post('/logout')
            window.location.href = '/'
        }catch(err){
            console.log(err)
        }
    }
    // Delete Account
    const deleteAccount = async() => {
        try{
            const res = await axios.delete(`/delete_account`)
            window.location.href = '/'
        }catch(err){
            // console.log(err)
        }
    }
    return (
        <SettingsContainer>
            <div className="settingsInner">
                <h1>Account Details</h1>
                <form className="editProfile" onSubmit={(e)=> handleAccountUpdate(e)}>
                    <div className="formEl profPic">
                        <h3>Profile Picture</h3>
                        <label htmlFor="profPic">Click on the image to change your profile picture.</label>
                        <div className="imageInputContainer center">
                            {
                                user
                                ? (
                                    <>
                                    {
                                        (imgSrc)
                                        ? <img src={imgSrc}/>
                                        : <img src={GLOBAL.RESOURCE.IMAGE.PROFILE(GLOBAL.APP_URL, user.imageURL)}/>
                                    }
                                    <input className="profPic" type="file" id="profPic" accept="image/*" onChange={handleFileChange} ref={imageRef}/>
                                    </>
                                )
                                : null
                            }
                        </div>
                    </div>
                    <div className="formEl bio">
                        <h3>Bio</h3>
                        <label htmlFor="bio">Write something about yourself.</label>
                        {
                            user
                            ? <input className="bioInput" type="text" id="bio" required onChange={(e)=>setBio(e.target.value)} defaultValue={user.bio} placeholder='About'/>
                            : <input className="bioInput" type="text" id="bio" disabled/>
                        }
                    </div>
                    <div className="formEl submit">
                        <button type="submit" className="center">
                        {
                            loading
                            ? <Spinner size={25} border={3}/>
                            : <>
                                <Image src="/saveIcon.png" alt="Save Icon" height={25} width={25}/>
                                <span>Save</span>
                              </>
                        }
                        </button>
                    </div>
                    {
                        !error
                        ? null
                        : 
                        <div className="error">
                            <p>*{error}</p>
                        </div>
                    }
                </form>
            </div>
            {
                !user
                ? null
                : (
            <div className="privacyInner">
                <h1>Account Settings</h1>
                <div className="el privacy">
                    <h3>Privacy</h3>
                    {
                        user.is_private
                        ? (<>
                            <p>Your account is currently private. This means only your followers can view and interact with your posts.</p>
                            <button className="privacyControl center" onClick={()=>makePrivate(false)}>Set Public</button>
                        </>
                        )
                        : (<>
                            <p>Your account is currently public. This means that anyone can view your posts.</p>
                            <button className="privacyControl center" onClick={()=>makePrivate(true)}>Set Private</button>
                        </>)
                    }
                </div>
                <div className="el logout">
                    <h3>Log out</h3>
                    <p>You are currently logged in. Click on the log out button to delete your session.</p>
                    <button className="logout center" onClick={logout}>Logout</button>
                </div>
                <div className="el delete">
                    <h3>Delete Account</h3>
                    <p>{user ? user.name==='GUEST' ? 'The GUEST account cannot be deleted.' : 'This action is permanent and cannot be reversed.' : null}</p>
                    <button className="delete center" onClick={deleteAccount}>Delete</button>
                </div>
            </div>
                )
            }
        </SettingsContainer>
    );
}

export default SettingsPage;