import Image from "next/image";
import { SearchPageContainer } from "./SearchPage.styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "@/lib/axios";
import { UserListContainer } from "@/components/Common/UserList/UserList.styled";
import UserList, { SkeletonUser } from "@/components/Common/UserList/UserList";
import PostList from "@/components/Common/PostList/PostList";
import { useAuth } from "@/hooks/useAuth";

const SearchPage = () => {
    const router = useRouter()
    const [isAccounts, setIsAccounts] = useState(router.query.category == 'accounts' ? true : false)
    const [query, setQuery] = useState(router.query.query ? router.query.query : '')
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const {user} = useAuth({middleware: 'guest'});
    useEffect(()=>{
        // change router params shallow
        router.push({
            pathname: router.pathname,
            query: {'category': isAccounts ? 'accounts' : 'posts', 'query': query}
        }, undefined, { shallow: true })
        // call search
        if(query){
            searchFn(query, isAccounts)
        }else{
            getAll(isAccounts)
        }
    }, [isAccounts, query])
    const searchFn = async(query, isAccounts) => {
        setLoading(true)
        try{
            const formData = new FormData()
            formData.append('query', query)
            if(isAccounts){
                const res  = await axios.post(`/api/user/search`, formData)
                setData(res.data.objects)
            }else{
                const res  = await axios.post(`/api/post/search`, formData)
                setData(res.data.objects)
            }
            setLoading(false)
        }catch(err){
            console.log(err)
        }
    }
    const getAll = async(isAccounts) => {
        setLoading(true)
        try{
            if(isAccounts){
                const res  = await axios.get(`/api/user/all`)
                setData(res.data.objects)
            }else{
                const res  = await axios.get(`/api/post/all`)
                setData(res.data.postObjects)
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
                        {
                            isAccounts ? (<>
                                <button className="accounts category selected" onClick={()=> {setIsAccounts(true)}}>
                                <   h2>Accounts</h2>
                                </button>
                                <button className="posts category" onClick={()=> {setIsAccounts(false)}}>
                                    <h2>Posts</h2>
                                </button>
                            </>) : (<>
                                <button className="accounts category" onClick={()=> {setIsAccounts(true)}}>
                                <   h2>Accounts</h2>
                                </button>
                                <button className="posts category selected" onClick={()=> {setIsAccounts(false)}}>
                                    <h2>Posts</h2>
                                </button>
                            </>)
                        }
                    </div>
                </div>
                <div className="bottom">
                    {
                        isAccounts
                        ? loading 
                            ? <UserList userObjects={data}  isLoading={true} isProfileList={true}/>
                            : <UserList userObjects={data}  isLoading={false} isProfileList={true}/>
                        : loading
                            ? <PostList postObjects={data} isLoading={true} user={user}/>
                            : <PostList postObjects={data} isLoading={false} user={user}/>
                    }
                </div>
            </div>
        </SearchPageContainer>
    );
}

export default SearchPage;