import { useEffect, useState } from "react";
import Player from "../player/Player";
import Selected from "../selected/Selected";
const Players = ({getCoins, selectedPlayers, selectPlayers}) => {
    const [activeTab, setActiveTab] = useState('available');
    const [totalPlayers, setTotalPlayers] = useState([]);
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setTotalPlayers(data))
    }, [])
    const togglerBtn = selectedAvailable => {
        setActiveTab(selectedAvailable)
    }
    return (
        <div>
            <div className="flex justify-between mt-14 items-center mb-5">
                <span className="font-semibold">{activeTab === 'selected' ? `Selected players (${selectPlayers.length}/6)`:`Available Players ${totalPlayers.length}`} </span>
                <div>
                    <button onClick={() => togglerBtn('available')} className={`py-2 px-4 border border-r-0 rounded-l-lg ${activeTab === 'available' ? 'selected' : ''}`}>Available</button>
                    <button onClick={() => togglerBtn('selected')} className={`py-2 px-4 border border-l-0 rounded-r-lg ${activeTab === 'selected' ? 'selected' : ''}`}>Selected {`(${selectPlayers.length})`}</button>
                </div>
            </div>
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center ${activeTab === 'selected' ? 'hidden' : ''}`}>
            {
                totalPlayers.map(player => <Player
                    key={player.id}
                    getCoins={getCoins}
                    player={player}
                    selectedPlayers={selectedPlayers}
                    ></Player>)
            }
        </div>
        <div className={`${activeTab === 'available' ? 'hidden' : ''}`}>
            <Selected
        selectPlayers={selectPlayers}
        ></Selected>
        </div>
        
        </div>
    );
};

export default Players;

