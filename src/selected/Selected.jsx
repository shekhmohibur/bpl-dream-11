import SelectedPlayer from "../selectedPlayer/SelectedPlayer";

const Selected = ({selectPlayers}) => {
    console.log(selectPlayers)
    return (
        <div className="flex flex-col gap-3">
                {
                    selectPlayers.map(player => <SelectedPlayer 
                        key={player.id}
                        player={player}
                        ></SelectedPlayer>)
                }
        </div>
    );
};

export default Selected;