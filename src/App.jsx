import './App.css'
import Footer from './footer/Footer'
import Header from './header/Header'
import Hero from './hero/Hero'
import Players from './players/Players'
import Subscription from './subscription/Subscription'
function App() {
  return (
    <div className='max-w-7xl px-6 mx-auto mt-5'>
    <Header></Header>
    <Hero></Hero>
    <Players></Players>
    <div>
      <Subscription></Subscription>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default App
