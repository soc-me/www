import { GLOBAL } from "@/GLOBAL";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

const useFetchPosts = ({ onlyFollowing }={}) => {
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
        .get('/api/post/all')
        .then(response => {
            if(nullify){
                setPostObjects([...response.data.posts]);
                setIsLoading(false)
            }else{
                setPostObjects([...postObjects, ...response.data]);
                setIsLoading(false)
            }
        })
        .catch(error => {
            if (error) throw error
        })
    }
    useEffect(() => {
        setIsLoading(true);
        asyncFetchPosts(GLOBAL.RESOURCE.POST.ALL, true);
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