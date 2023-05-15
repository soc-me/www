import Layout from "@/components/Common/Layout/Layout";
import CommunityPage from "@/components/Pages/Community/CommunityPage";
import axios from "@/lib/axios";
import Head from "next/head";

const Community = ({initialObject}) => {
    return (
        <Layout>
            <Head>
                <title>{`${initialObject.community_name} | Community`}</title>
                <meta name="description" content={`${initialObject.community_description}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CommunityPage communityInfo={initialObject} />
        </Layout>
    );
}

export default Community;

export async function getServerSideProps(context){
    try{
        const  res = await axios.get(`/api/community/data/${context.params.community_ID}`);
        return {
            props: {
                initialObject: res.data.object
            }
        }
    }catch(err){
        if(err.response.status === 404){
            return {
                redirect: {
                    destination: "/404",
                    permanent: false
                }
            }
        }else{
            console.log(err);
            return {
                redirect: {
                    destination: "/500",
                    permanent: false
                }
            }
        }
    }
}