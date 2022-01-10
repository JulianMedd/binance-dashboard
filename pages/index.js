import CryptoCardContainer from "../components/results/CryptoCardContainer";
import CryptoListContainer from "../components/results/CryptoListContainer";
import SideBar from "../components/sideBar/SideBar";

export default function Home({data}) {
  return (
    <div className="app">
        <SideBar/>
      <div className="mt-14 md:ml-40 md:mt-0 md:p-6 py-6 flex flex-col space-y-4">
        <CryptoCardContainer cryptos={data}/>
        <CryptoListContainer cryptos={data}/>
      </div>
    </div>
  )
}

export async function getStaticProps() {
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