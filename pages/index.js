import { useAuth } from '@/hooks/useAuth'
import Head from 'next/head'
import axios from '@/lib/axios'
import Layout from '@/components/Common/Layout/Layout'
import IndexPage from '@/components/Pages/Index/IndexPage'

export default function Home({initialFollowing}) {
  return (
    <Layout>
      <Head>
        <title>Socme</title>
        <meta name="description" content="Social Media Site. Developed By Thenu Kaluarachchi." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexPage initialFollowing={initialFollowing}/>
    </Layout>
  )
}

//getServerSideProps function
export async function getServerSideProps(context) {
  //get 'following' params from url
  const urlParams = new URLSearchParams(context.req.url);
  const following = urlParams.get('/?following');
  let isOnlyFollowing;
  if(following == 'true'){
    isOnlyFollowing = true;
  }else{
    isOnlyFollowing = false;
  }
  //send params to page
  return {
    props: {
      initialFollowing: isOnlyFollowing
    }
  }
}
