import SelectedPlayer from "../selectedPlayer/SelectedPlayer";

const Selected = ({selectPlayers, removePlayer, togglerBtn}) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
                {
                    selectPlayers.map(player => <SelectedPlayer 
                        key={player.id}
                        player={player}
                        removePlayer={removePlayer}
                        ></SelectedPlayer>)
                }
            </div>
                <div>
                    <button onClick={() => togglerBtn('available')} className="selected py-2 px-3 rounded-lg">Available players</button>
                </div>
        </div>
    );
};

export default Selected;