import Layout from "@/components/Common/Layout/Layout";
import AccountPage from "@/components/Pages/Account/AccountPage";
import { useAuth } from "@/hooks/useAuth";
import axios from "@/lib/axios";
import Head from "next/head";

const Account = ({user_id, minimalUserObject}) => {
    return (
        <Layout>
            <Head>
            <title>{`${minimalUserObject.name} | Profile`}</title>
            <meta name="description" content="Profile Page." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <AccountPage minimalUserObject={minimalUserObject}/>
      </Layout>
    );
}

export async function getServerSideProps(context) {
    const {user_id} = context.params
    try{
        const response = await axios.get(`/api/user/minimal/${user_id}`)
        return {
            props: {
                minimalUserObject: response.data,
                user_id: user_id
            }
        }
    }catch(error){
        return {
            redirect: {
                destination: '/404',
                permanent: false
            }
        }
    }
}

export default Account;