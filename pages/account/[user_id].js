import Layout from "@/components/Common/Layout/Layout";
import AccountPage from "@/components/Pages/Account/AccountPage";
import { useAuth } from "@/hooks/useAuth";
import Head from "next/head";

const Account = ({user_id}) => {
    const {user} = useAuth({middleware: 'guest'})
    return (
        <Layout>
            <Head>
            <title>User {user_id}</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <AccountPage/>
      </Layout>
    );
}

export async function getServerSideProps(context) {
    const {user_id} = context.params
    // get minimal user data (to display on page)
    try{
        const response = await axios.get(`/api/user/minimal/${user_id}`)
        return {
            props: {
                user: response.data,
                user_id: user_id
            }
        }
    }catch(error){
        console.log(error)
        if(error.data?.userDoesNotExist){
            return {
                redirect: {
                    destination: '/404',
                    permanent: false
                }
            }
        }else{
            return {
                props: {
                    user_id: user_id
                }
            }
        }
    }
}

export default Account;