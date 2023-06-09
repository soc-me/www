import Layout from "@/components/Common/Layout/Layout";
import SettingsPage from "@/components/Pages/Settings/SettingsPage";
import { GLOBAL } from "@/GLOBAL";
import { useAuth } from "@/hooks/useAuth";
import axios from "@/lib/axios";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const AccountSettings = () => {
    const {user} = useAuth({middleware: 'auth'});
    return (
        <Layout>
            <Head>
            <title>Settings | Profile</title>
            <meta name="description" content="Profile settings." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <SettingsPage user={user}/>
      </Layout>
    );
}

export default AccountSettings;