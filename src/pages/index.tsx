import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'reactstrap'
import MYNavbar from '../components/Navbar'


const Home: NextPage = () => {

  return (
    <div style={{border:"1px solid black"}}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
<Container style={{border:"1px solid black"}}>
  <MYNavbar color={"info"} expand={"md"}/>
<Link href='www.google.com'>
<a style={{fontFamily:"Vazirmatn"}}>سلام دنیای نکست</a>
</Link>
<p>سلام بر شما دوستاناسم  <span style={{fontFamily:'Ms Madi',fontWeight:"900"}}>Font Face</span>
   انجام میشه که در 
   ادامه قطعه کدی رو در رابطه با ساختار Font Face قرار دادم . برای این که بتونید بهتر این کار رو انجام بدید یکه پوشه به اسم font داخل فایل های سایت ایجاد کنید و تمامی فونت هایی که مد نظرتون هست رو داخل این پوشه قرار بدید تا فایل های سایت مرتب تر و منظم تر بشن . طبق کدی که در ادامه قرار دادم باید به کمک خاصیت font family برای هر فونت اسمی مشخص کنید تا بتونید برای قسمت های مختلف سایت 
  از این فونت استفاده</p>
</Container>
    </div>
  )
}

export default Home