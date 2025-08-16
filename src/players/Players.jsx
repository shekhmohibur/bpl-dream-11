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
                    <button id="availablePlayers" onClick={() => togglerBtn('available')} className={`py-2 px-4 border border-r-0 rounded-l-lg ${activeTab === 'available' ? 'selected' : ''}`}>Available</button>
                    <button id="selectedPlayers" onClick={() => togglerBtn('selected')} className={`py-2 px-4 border border-l-0 rounded-r-lg ${activeTab === 'selected' ? 'selected' : ''}`}>Selected</button>
                </div>
            </div>

            {
                totalPlayers.map(player => <Player player={player}></Player>)
            }
        </div>
    );
};

export default Players;

