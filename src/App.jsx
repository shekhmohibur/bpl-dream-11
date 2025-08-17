import { useCallback, useState } from 'react'
import './App.css'
import Footer from './footer/Footer'
import Header from './header/Header'
import Hero from './hero/Hero'
import Players from './players/Players'
import Subscription from './subscription/Subscription'
import { RiUserCommunityLine } from 'react-icons/ri'
import Selected from './selected/Selected'
function App() {
  const [coins, setCoins] = useState(0);
  const [playersPrice, setPlayersPrice] = useState(0);
  const getCoins = useCallback((coin) => {
    setPlayersPrice(prev => prev + coin)
  },[])
  const handleCoins = () => {
    parseInt(coins)
    if(coins === 0){
      setCoins(playersPrice + coins)
    }else{
      alert('ar parba na mama')
    }
  }
  return (
    <div>
      <div className='max-w-7xl px-6 mx-auto mt-5'>
        <Header
        coins={coins}
        ></Header>
        <Hero
        handleCoins={handleCoins}
        ></Hero>
        <div>
          
          <Players
        getCoins={getCoins}
        ></Players>
        <Selected></Selected>
        </div>
        
      </div>
      <Subscription></Subscription>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
