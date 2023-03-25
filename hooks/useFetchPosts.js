import { GLOBAL } from "@/GLOBAL";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

const useFetchPosts = ({ onlyFollowing, router }={}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [postObjects, setPostObjects] = useState([]);

    const refreshList = () => {
        setIsLoading(true);
        asyncFetchPosts(GLOBAL.RESOURCE.POST.ALL, true);
    }

    const addToPostObjects = (newPost) => {
        setPostObjects([newPost, ...postObjects]);
    }

    const asyncFetchPosts = async (resourceURL, nullify) => {
        axios
        .get(resourceURL)
        .then(response => {
            if(nullify){
                setPostObjects([...response.data.postObjects]);
            }else{
                setPostObjects([...postObjects, ...response.data.postObjects]);
            }
            setIsLoading(false);
        })
        .catch(error => {
            //if 401 error, redirect to login page
            if(error.response.status === 401){
                router.push('/login')
            }
        })
    }
    useEffect(() => {
        setIsLoading(true);
        if(onlyFollowing){
            asyncFetchPosts(GLOBAL.RESOURCE.POST.FOLLOWING, true);
        }else{
            asyncFetchPosts(GLOBAL.RESOURCE.POST.ALL, true);
        }
    }, [onlyFollowing])

    return {
        postObjects, isLoading, error, refreshList, addToPostObjects
    }
}

export default useFetchPosts;

const test_postObjects = [
    {
        'id': 1,
        'name': 'Thenu_K',
        'text': 'This is a test post.',
        'date': '2021-08-01',
        'likeCount': 12,
    },
    {
        'id': 1,
        'name': 'Thenu_K',
        'text': 'This is a second test post.',
        'date': '2021-08-01',
        'likeCount': 12,
    },
    {
        'id': 1,
        'name': 'Thenu_K',
        'text': 'This is a test post.',
        'date': '2021-08-01',
        'likeCount': 12,
    },
    {
        'id': 1,
        'name': 'Thenu_K',
        'text': 'This is a second test post.',
        'date': '2021-08-01',
        'likeCount': 12,
    },
    {
        'id': 1,
        'name': 'Thenu_K',
        'text': 'This is a test post.',
        'date': '2021-08-01',
        'likeCount': 12,
    },
    {
        'id': 1,
        'name': 'Thenu_K',
        'text': 'This is a second test post.',
        'date': '2021-08-01',
        'likeCount': 12,
    },
]