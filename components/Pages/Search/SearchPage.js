import Image from "next/image";
import { SearchPageContainer } from "./SearchPage.styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "@/lib/axios";

const SearchPage = () => {
    const router = useRouter()
    const [isAccounts, setIsAccounts] = useState(router.query.category == 'accounts' ? true : false)
    const [query, setQuery] = useState(router.query.query ? router.query.query : '')
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        // change router params shallow
        router.push({
            pathname: router.pathname,
            query: {'category': isAccounts ? 'accounts' : 'posts', 'query': query}
        }, undefined, { shallow: true })
        // call search
        if(query){
            searchFn(query, isAccounts)
        }
    }, [isAccounts, query])
    const searchFn = async(query, isAccounts) => {
        setLoading(true)
        try{
            if(isAccounts){
                const res  = await axios.get(`/api/account/search/${query}`)
            }else{
                const res  = await axios.get(`/api/post/search/${query}`)
            }
            console.log(res.data)
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
                        query
                        ? <h1>Search Results for "{query}"</h1>
                        : <h1>Search</h1>
                    }
                </div>
            </div>
        </SearchPageContainer>
    );
}

export default SearchPage;