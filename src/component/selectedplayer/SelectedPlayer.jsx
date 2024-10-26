import React from 'react';

const SelectedPlayer = ({ selectedPlayers, onDelete }) => {
    return (
        <div>
            {selectedPlayers.length > 0 && ( // Only show heading if there are selected players
                <h2 className="text-2xl font-bold">Selected Players</h2>
            )}
            <div className="w-[188vh]">
                {
                    selectedPlayers.length > 0 ? 
                        selectedPlayers.map(player => (
                             <div key={player.id} className="flex justify-between items-center mt-8 w-full shadow-2xl border-2 rounded-xl p-5">
                                   <div className='flex items-center gap-6'>
                                        <div>
                                             <img className="rounded-xl lg:w-52 h-28" src={player.image} alt="Player" />
                                        </div>
                                        <div className='font-bold'>
                                             <p className='text-4xl'>{player.name}</p>
                                             <p>{player.country}</p>
                                             <p>{player.batting_style}</p>
                                        </div>
                                   </div>
                                   <div className=''>
                                        <button onClick={() => onDelete(player)} className="text-white w-12 rounded-lg">
                                            <img src='./icons8-delete.png' alt="Delete" />
                                        </button>
                                   </div>
                             </div>
                        )) :
                        <p>No players selected.</p>
                }
            </div>
        </div>
    );
};

export default SelectedPlayer;