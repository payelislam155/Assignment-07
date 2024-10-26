import { useState } from 'react';
import './App.css';
import Footers from './component/footer/Footers';
import Subscriber from './component/footer/Subscriber';
import Header from './component/Header/Header';
import Navbar from './component/Navber/Navbar';
import Player from './component/player/Player';

function App() {
    const [isActive, setLsActive] = useState({ available: true, status: "available" });
    const [coin, setCoin] = useState(0);

    const addCoin = () => {
        setCoin(coin + 100000);
    };

    const handlelsActiveState = (status) => {
        if (status === "available") {
            setLsActive({ available: true, status: "available" });
        } else {
            setLsActive({ available: false, status: "selected" });
        }
    };

    return (
        <>
            <div>
                {/* main-and-navbar-section */}
                <div>
                    <div className='bg-green-600 py-2'>
                        <Navbar coin={coin}></Navbar>
                    </div>
                    <div className='lg:w-[1100px] mx-auto py-4'>
                        <Header addCoin={addCoin} coin={coin}></Header>
                    </div>
                    <div className='lg:w-[1100px] mx-auto'>
                        <Player isActive={isActive} handlelsActiveState={handlelsActiveState} coin={coin} setCoin={setCoin}></Player>
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
    );
}

export default App;