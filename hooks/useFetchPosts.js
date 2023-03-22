import { GLOBAL } from "@/GLOBAL";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

const useFetchPosts = ({ onlyFollowing }={}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [postObjects, setPostObjects] = useState([]);

    const asyncFetchPosts = async (resourceURL, nullify) => {
        axios
        .get('/api/post/all')
        .then(response => {
            if(nullify){
                setPostObjects([...response.data.posts]);
            }else{
                setPostObjects([...postObjects, ...response.data]);
            }
        })
        .catch(error => {
            if (error) throw error
        })
        // if(nullify){
        //     setPostObjects([...test_postObjects]);
        // }else{
        //     setPostObjects([...postObjects, ...test_postObjects]);
        // }
        setTimeout(() => {
            setIsLoading(false)
        },500);
    }
    useEffect(() => {
        setIsLoading(true);
        asyncFetchPosts(GLOBAL.RESOURCE.POST.ALL, true);
    }, [onlyFollowing])

    return {
        postObjects, isLoading, error
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