import { MdOutlineDeleteForever } from "react-icons/md";
const SelectedPlayer = ({ player, removePlayer }) => {
    const { picture, name, role, id } = player;
    return (
        <div>
            <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg">
                <div className="flex gap-5 items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden"><img className="aspect-square" src={picture} alt={name} /></div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">{name}</h2>
                        <p>{role}</p>
                    </div>

                </div>
                <button onClick={() => removePlayer(id)}><MdOutlineDeleteForever className="text-red-500 text-xl" /></button>
            </div>
        </div>
    );
};

export default SelectedPlayer;