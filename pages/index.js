import Head from 'next/head'
import Main from '../components/Main'
import SideBar from '../components/SideBar'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <SideBar/>
        <Main/>
      </main>
      
      
    </div>
  )
}
