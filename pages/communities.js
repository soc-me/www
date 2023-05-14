import Layout from "@/components/Common/Layout/Layout";
import CommunitiesPage from "@/components/Pages/Communities/CommunitiesPage";
import Head from "next/head";

const Communities = () => {
    return (
        <Layout>
            <Head>
                <title>Communities | Socme</title>
                <meta name="description" content="Socme Communities." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CommunitiesPage/>
        </Layout>
    )
}

export default Communities;