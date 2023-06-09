import Layout from "@/components/Common/Layout/Layout";
import PostPage from "@/components/Pages/Post/PostPage";
import axios from "@/lib/axios";
import Head from "next/head";

const Post = ({data}) => {
    return (
        <Layout>
            <Head>
                <title>{data.pageTitle}</title>
                <meta name="description" content="View this post and it's comments." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PostPage data={data}/>
        </Layout>
    );
}
export default Post;

// get minimal post data
export async function getServerSideProps({params}){
    try{
        const res = await axios.get(`/api/post/minimal/${params.post_ID}`);
        return {
            props: {
                data: res.data
            }
        }
    }catch(err){
        console.log(err)
        if(err.response.status == 404){
            return{
                redirect: {
                    destination: '/404',
                    permanent: false
                }
            }
        }else{
            console.log(err.data)
            return{
                redirect: {
                    destination: '/500',
                    permanent: false
                }
            }
        }
    }
}