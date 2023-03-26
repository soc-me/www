import { GLOBAL } from "@/GLOBAL";
import { useRef, useState } from "react";
import { SettingsContainer } from "./SettingsPage.styled";
import Image from 'next/image';
import saveIcon from '@/public/saveIcon.png'
import Spinner from "@/components/Common/Spinner/Spinner";
import axios from "@/lib/axios";

const SettingsPage = ({user}) => {
    const [imgSrc, setImgSrc] = useState('');
    const [bio, setBio] = useState('');
    const [loading, setLoading] = useState(false);
    const imageRef = useRef(null);
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
            console.log(formData)
            const res  = await axios.post(`/api/user/update/${user.id}`, formData)
            console.log(res.data)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    return (
        <SettingsContainer>
            <div className="settingsInner">
                <h1>Account Settings</h1>
                <form className="editProfile" onSubmit={(e)=> handleAccountUpdate(e)}>
                    <div className="formEl profPic">
                        <label htmlFor="profPic">Click on the image to change your profile picture</label>
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
                    <div className="formEl username">
                        <label htmlFor="name">You cannot change your username</label>
                        <input  className="username" type="text" id="name" value={user ? user.name : ''} disabled={true}/>
                    </div>
                    <div className="formEl bio">
                        <label htmlFor="bio">Write something about yourself</label>
                        {
                            user
                            ? <textarea className="bioInput" type="text" id="bio" required onChange={(e)=>setBio(e.target.value)} defaultValue={user.bio}/>
                            : <textarea className="bioInput" type="text" id="bio" disabled/>
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
                </form>
            </div>
        </SettingsContainer>
    );
}

export default SettingsPage;