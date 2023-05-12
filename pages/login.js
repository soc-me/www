import { useAuth } from '@/hooks/useAuth'
import Head from 'next/head'
import axios from '@/lib/axios'
import AuthLayout from '@/components/Common/AuthLayout/AuthLayout'
import Auth from '@/components/Pages/Auth/Auth'


const login = () => {
    return (
        <AuthLayout>
            <Head>
                <title>Login To Socme</title>
                <meta name="description" content="Login to Socme." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Auth isLogin={true}/>
        </AuthLayout>
    );
}

export default login;