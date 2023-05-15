import Image from "next/image";
import { SearchPageContainer } from "./SearchPage.styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "@/lib/axios";
import { UserListContainer } from "@/components/Common/UserList/UserList.styled";
import UserList, { SkeletonUser } from "@/components/Common/UserList/UserList";
import PostList from "@/components/Common/PostList/PostList";
import { useAuth } from "@/hooks/useAuth";
import CommunityList from "../Communities/CommunityList/CommunityList";

const SearchPage = () => {
    const router = useRouter()
    const [category, setCategory] = useState(router.query.category ? router.query.category : 'accounts')
    const [query, setQuery] = useState(router.query.query ? router.query.query : '')
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const {user} = useAuth({middleware: 'guest'});
    useEffect(()=>{
        // change router params shallow
        router.push({
            pathname: router.pathname,
            query: {'category': category ? category : 'accounts'}
        }, undefined, { shallow: true })
        // call search
        if(query){
            searchFn(query, category)
        }else{
            getAll(category)
        }
    }, [category, query])
    const searchFn = async(query, cateogory) => {
        setLoading(true)
        setData(null)
        try{
            const formData = new FormData()
            formData.append('query', query)
            if(category==='accounts'){
                const res  = await axios.post(`/api/user/search`, formData)
                setData(res.data.objects)
            }else if (category==='posts'){
                const res  = await axios.post(`/api/post/search`, formData)
                setData(res.data.objects)
            }else if (category==='communities'){
                const res  = await axios.post(`/api/community/search`, formData)
                setData(res.data.objects)
            }
            setLoading(false)
        }catch(err){
            console.log(err)
        }
    }
    const getAll = async(category) => {
        setLoading(true)
        setData(null)
        try{
            if(category==='accounts'){
                const res  = await axios.get(`/api/user/all`)
                setData(res.data.objects)
            }else if (category==='posts'){
                const res  = await axios.get(`/api/post/all`)
                setData(res.data.postObjects)
            }else if (category==='communities'){
                const res  = await axios.get(`/api/community/all`)
                setData(res.data.objects)
            }
            setLoading(false)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <SearchPageContainer>
            <div className="searchInner">
                <div className="top">
                    <div className="searchBar">
                        <input type="text" placeholder="Search The Database" onChange={(e)=>{setQuery(e.target.value)}} value={query}/>
                        <div className="imageContainer center">
                            <Image src='/searchIcon.png' width={25} height={25} />
                        </div>
                    </div>
                    <div className="categories">
                        <button className={`accounts category ${category==='accounts' ? 'selected' : null}`} onClick={()=> {setCategory('accounts')}}>
                        <   h2>Accounts</h2>
                        </button>
                        <button className={`communities category ${category==='communities' ? 'selected' : null}`} onClick={()=> {setCategory('communities')}}>
                            <h2>Communities</h2>
                        </button>
                        <button className={`posts category ${category==='posts' ? 'selected' : null}`} onClick={()=> {setCategory('posts')}}>
                            <h2>Posts</h2>
                        </button>
                    </div>
                </div>
                <div className="bottom">
                    {
                        category==='accounts' 
                        ? <UserList userObjects={data} isLoading={loading} isProfileList={true}/>
                        : category==='posts'
                            ? <PostList postObjects={data} loading={loading} />
                            : <CommunityList communityObjects={data} loading={loading} />
                    }
                </div>
            </div>
        </SearchPageContainer>
    );
}

export default SearchPage;