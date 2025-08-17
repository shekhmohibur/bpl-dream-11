import { IoIosContact } from "react-icons/io";
import { FaFlag } from "react-icons/fa";
import { useEffect } from "react";
const Player = ({ player, getCoins }) => {
    const { name, picture, country, role, specialty, price_per_game,bowling_hand, batting_hand } = player;
        useEffect(() => {
            getCoins(price_per_game);
        }, [getCoins, price_per_game])
    return (
        <div>
            <div className="p-5 border rounded-lg">
                <img className="sm:w-96 sm:h-96 md:h-52 w-full object-cover rounded-md" src={picture} alt={`Picture of ${name}`} />
                <div className="flex gap-2 items-center mt-5">
                    <IoIosContact className="text-3xl"/>
                    <h2 className="font-bold">{name}</h2>
                </div>
                <div className="flex justify-between items-center mb-3 mt-3">
                    <div className="flex gap-3 text-gray-500">
                        <FaFlag />
                        <span>{country}</span> 
                    </div>
                    <span className="block px-3 py-1 rounded-md bg-gray-200">{role}</span>
                </div>
                <hr className="mb-3"/>
                <span className="font-semibold block mb-4">Rating</span>
                <div className="flex justify-between items-center">
                    <p>{specialty}</p>
                    <p>{batting_hand || bowling_hand}</p>
                </div>
                <div className="flex justify-between mt-3 items-center">
                    <span>Price: ${price_per_game}</span>
                    <button className="border px-3 p-2 rounded-lg">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;