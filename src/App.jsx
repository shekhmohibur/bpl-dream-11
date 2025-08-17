import { useCallback, useState } from 'react'
import './App.css'
import Footer from './footer/Footer'
import Header from './header/Header'
import Hero from './hero/Hero'
import Players from './players/Players'
import Subscription from './subscription/Subscription'
import Selected from './selected/Selected'
import { ToastContainer, toast } from 'react-toastify'
function App() {
  const [coins, setCoins] = useState(0);
  const [playersPrice, setPlayersPrice] = useState(0);
  const [selectPlayers, setSelectPlayers] = useState([]);
  const getCoins = useCallback((coin) => {
    setPlayersPrice(prev => prev + coin)
  }, [])
  console.log(coins)
  const handleCoins = () => {
    if (coins === 0) {
      setCoins(playersPrice + coins)
      toast.success(`You've claimed free credit ${playersPrice}`, {
        position: "top-center",
        autoClose: 3000, // closes after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "colored", // "light", "dark", "colored"
      });
    } else {
      toast.warn("You can't claim more than once", {
        position: "top-center",
        autoClose: 3000, // closes after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "colored", // "light", "dark", "colored"
      });
    }
  }
  const selectedPlayers = player => {
    const alreadySelected = selectPlayers.some(unique => unique.id === player.id)
    if (!alreadySelected) {
      const newPlayers = [...selectPlayers, player]
      if (coins >= player.price_per_game) {
        if (newPlayers.length <= 6) {
          setCoins(coins - player.price_per_game)
          toast.success(`You've selected ${player.name}`, {
            position: "top-center",
            autoClose: 3000, // closes after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored", // "light", "dark", "colored"


          }); setSelectPlayers(newPlayers)
        } else {
          toast.warn("You can't add more that 6 players", {
            position: "top-center",
            autoClose: 3000, // closes after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored", // "light", "dark", "colored"
          });
        }
      } else {
        toast.warn(`Insufficient Balance`, {
          position: "top-center",
          autoClose: 3000, // closes after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "colored", // "light", "dark", "colored"

        });
      }
    } else {
      toast.error("Already added this player", {
        position: "top-center",
        autoClose: 3000, // closes after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "colored", // "light", "dark", "colored"
      });
    }
  }

  return (
    <div>
      <ToastContainer />
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
            selectedPlayers={selectedPlayers}
            selectPlayers={selectPlayers}
          ></Players>
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
