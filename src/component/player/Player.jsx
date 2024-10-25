import { useEffect } from "react";
import { useState } from "react";

const Player = () => {
    const [players,setPlayer] = useState([])
     useEffect(() =>{
            fetch('Player.json')
            .then(response => response.json())
            .then(data => setPlayer(data))
        },[])

    return (
        <div>
              <div className="flex justify-between">
                     <h1 className="text-2xl font-bold">Available Players</h1>
                     <div className=" grid grid-cols-2 gap-4 border-2 border-gray-300 rounded-lg px-6 py-2">
                           <button>Available</button>
                           <button>Selected</button>
                     </div>   
              </div>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                    {
                        players.map(player=> (
              <div key={player.id} className="card bg-base-100 shadow-2xl p-5">
                         <div>
                                <img className="rounded-xl lg:w-96 h-48" src={player.image} alt="Shoes" />
                         </div>
                    <div className="mt-6">
                         <h2 className="card-title">{player.name}</h2>
                         <div className="grid grid-cols-2 font-bold">
                               <p>{player.country}</p>
                               <p>{player.role}</p>
                         </div>
                         <hr />
                         <p className="font-bold">Rating: {player.rating}</p>
                         <div className="grid grid-cols-2 gap-4 font-bold">
                              <p>{player.batting_style}</p>
                              <p>{player.bowlling_style}</p>
                              <p>Price:{player.price}</p>
                              <p className="bg-gray-300 p-2 w-32 rounded-lg">Choose Player</p>
                         </div>
                   </div>
             </div>
 
                        ))
                    }
              </div>
      </div>
    );
};
export default Player;