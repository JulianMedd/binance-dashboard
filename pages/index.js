import CryptoCardContainer from "../components/results/CryptoCardContainer";
import SideBar from "../components/sideBar/SideBar";

export default function Home({data}) {
  console.log(data)
  return (
    <div>
        <SideBar/>
      <div className="mt-14 md:ml-40 md:mt-0 md:p-6 pt-6">
        <CryptoCardContainer cryptos={data}/>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://api2.binance.com/api/v3/ticker/24hr`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, 
  }
}