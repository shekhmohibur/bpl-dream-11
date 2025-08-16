import { useEffect, useState } from "react";
import Player from "../player/Player";

const Players = () => {
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
            <div className="flex justify-between mt-14 items-center">
                <span className="font-semibold">Available Players {totalPlayers.length}</span>
                <div>
                    <button onClick={() => togglerBtn('available')} className={`py-2 px-4 border border-r-0 rounded-l-lg ${activeTab === 'available' ? 'selected' : ''}`}>Available</button>
                    <button onClick={() => togglerBtn('selected')} className={`py-2 px-4 border border-l-0 rounded-r-lg ${activeTab === 'selected' ? 'selected' : ''}`}>Selected</button>
                </div>
            </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
            {
                totalPlayers.map(player => <Player
                    key={player.id}
                    player={player}
                    ></Player>)
            }
        </div>
            
        </div>
    );
};

export default Players;

