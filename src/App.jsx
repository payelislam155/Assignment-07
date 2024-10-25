
import './App.css'
import Footers from './component/footer/Footers'
import Subscriber from './component/footer/Subscriber'
import Header from './component/Header/Header'
import Navbar from './component/Navber/Navbar'
import Player from './component/player/Player'

function App() {
  return (
    <>
       <div>
                  {/* main-and-navbar-section */}
             <div className='lg:w-[1100px] mx-auto'>
                 <div>
                        <Navbar></Navbar>
                 </div>
                 <div className='py-4'>
                        <Header></Header>
                 </div>
                 <div>
                       <Player></Player>
                 </div>
             </div>
             <div>
                       <div className='relative top-28'>
                            <Subscriber></Subscriber>
                       </div>
                       <div>
                            <Footers></Footers>
                       </div>
             </div>
       </div>
    </>
  )
}

export default App
