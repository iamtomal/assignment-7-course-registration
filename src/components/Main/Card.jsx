import { useEffect, useState } from 'react';
import {FaBookOpen } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import Calculation from './Calculation';


const Card = () => {

    const [allCards, setAllCards] = useState([]);
    const [selectCard, setSelectCard] = useState([])


    useEffect(() =>{
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setAllCards(data));
    },[])


    const handleSelectButton = (cards) =>{
        setSelectCard([...selectCard, cards ])
    }



    return (
        <div className='flex gap-4 justify-around m-8'>
            <div className='grid grid-cols-3 gap-6'>
                {
                    allCards.map((cards) =>(

                        <div className="p-4 w-72 bg-white rounded-lg " key={cards.id}>
                    <div>
                        <img  className="rounded-lg max-h-40" src={cards.cover_image}/>
                    </div>
                    <p className="text-md font-semibold py-1 pt-1">{cards.course_title}</p>
                    <p className="text-justify text-sm text-slate-500 py-1">{cards.course_details}</p>
                   
                    <div className="flex justify-between py-1 text-slate-500 font-semibold">
                        <div className='flex gap-1'>
                        <div className='pt-1'>
                        <FaDollarSign/>
                        </div>
                        <p>Price : {cards.price}</p>
                        </div>
                        <div className='flex gap-2'>
                        <div className='pt-1 '>
                        <FaBookOpen/>
                        </div>
                        <p>Credit : {cards.credit}hr</p>
                        </div>
                    </div>
                    <button onClick={()=>{handleSelectButton(cards)}} className="bg-blue-500 text-white font-semibold w-full rounded-lg py-1 mt-1">Select</button>
                </div>
                    ))
                }
            </div>

            <div className=" bg-gray-300 rounded-lg p-2 ">
          <Calculation selectCard={selectCard}></Calculation>
        </div>
        </div>
    );
};

export default Card;