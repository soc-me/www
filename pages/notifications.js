import Layout from "@/components/Common/Layout/Layout";
import NotificationsPage from "@/components/Pages/Notifications/NotificationsPage";
import Head from "next/head";

const Notifications = () => {
    return (
        <Layout>
            <Head>
                <title>Notifications</title>
                <meta name="description" content="Account Notifications." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NotificationsPage/>
        </Layout>
    )
}

export default Notifications;