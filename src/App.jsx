
import { useState } from 'react'
import './App.css'
import Footers from './component/footer/Footers'
import Subscriber from './component/footer/Subscriber'
import Header from './component/Header/Header'
import Navbar from './component/Navber/Navbar'
import Player from './component/player/Player'

function App() {

const [isActive,setLsActive] = useState({cart:true,status: "cart"})


const handlelsActiveState = (status) => {
     if (status == "cart"){
       setLsActive({available:true,status: "cart"})
     }
     else{
        setLsActive({available:false,status: "about"})
     }
  
  }
  return (
    <>
       <div>
                  {/* main-and-navbar-section */}
             <div>
                 <div className='bg-green-600 py-2'>
                        <Navbar></Navbar>
                 </div>
                 <div className='lg:w-[1100px] mx-auto py-4'>
                        <Header></Header>
                 </div>
                 <div className='lg:w-[1100px] mx-auto'>
                       <Player isActive={isActive} handlelsActiveState={handlelsActiveState}></Player>
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
