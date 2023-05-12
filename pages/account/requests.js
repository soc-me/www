import Layout from "@/components/Common/Layout/Layout";
import RequestsPage from "@/components/Pages/Requests/RequestsPage";
import { useAuth } from "@/hooks/useAuth";
import Head from "next/head";

const Requests = () => {
    const {user} = useAuth({middleware: 'auth'});
    return (
        <Layout>
            <Head>
                <title>Follow Requests</title>
                <meta name="description" content="Your follow requests." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <RequestsPage user={user}/>
      </Layout>
    );
}

export default Requests;