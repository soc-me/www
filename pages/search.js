import Layout from "@/components/Common/Layout/Layout";
import SearchPage from "@/components/Pages/Search/SearchPage";
import axios from "@/lib/axios";
import Head from "next/head";

const Search = ({data}) => {
    return (
        <Layout>
            <Head>
                <title>Search</title>
                <meta name="description" content="Search for users and posts." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SearchPage/>
        </Layout>
    );
}
export default Search;

// get minimal post data
export async function getServerSideProps({params}){
    try{
        // const res = await axios.get(`/api/post/minimal/${params.post_ID}`);
        return {
            props: {
                data: 'test'
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
        }
    }
}