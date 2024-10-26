import { useEffect, useState } from "react";
import SelectedPlayer from './../selectedplayer/SelectedPlayer';

const Player = ({ handlelsActiveState, isActive }) => {
    const [players, setPlayer] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    useEffect(() => {
        fetch('Player.json')
            .then(response => response.json())
            .then(data => setPlayer(data));
    }, []);
    
    const handlePlayerSelect = (player) => {
        if (selectedPlayers.includes(player)) {
            alert(`${player.id} is already selected!`);
        } else {
            setSelectedPlayers([...selectedPlayers, player]);
        }
    };
    
    const handlePlayerDelete = (playerToDelete) => {
        setSelectedPlayers(selectedPlayers.filter(player => player.id !== playerToDelete.id));
    };

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Available Players</h1>
                <div className="grid grid-cols-2 border border-gray-300 rounded-lg">
                    <button onClick={() => handlelsActiveState("cart")} className={`${isActive.available ? "btn btn-warning" : "btn"}`}>Available</button>
                    <button onClick={() => handlelsActiveState("about")} className={`${!isActive.available ? "btn btn-warning" : "btn"}`}>Selected</button>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                {
                    isActive?.available ?
                        players.map(player => (
                            <div key={player.id} className="card bg-base-100 shadow-2xl p-5">
                                <div>
                                    <img className="rounded-xl lg:w-96 h-48" src={player.image} alt="Player" />
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
                                        <p>{player.bowling_style}</p>
                                        <p>Price: {player.price}</p>
                                        <p className="bg-gray-300 p-2 w-32 rounded-lg active:bg-lime-400" onClick={() => handlePlayerSelect(player)}>Choose Player</p>
                                    </div>
                                </div>
                            </div>
                        )) :
                        <SelectedPlayer players={players} selectedPlayers={selectedPlayers} onDelete={handlePlayerDelete}></SelectedPlayer>
                }
            </div>
        </div>
    );
};

export default Player;