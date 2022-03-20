import HomeComponent from "../components/HomeComponent"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <HomeComponent />
      </div>
    </>
  )
}
