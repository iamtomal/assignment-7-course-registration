import { useEffect, useState } from 'react';
import {FaBookOpen } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import Calculation from './Calculation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = () => {

    const [allCards, setAllCards] = useState([]);
    const [selectCard, setSelectCard] = useState([])
    const [remain, setRemain] = useState(0);
    const [totalCredit, setTotalCredit] = useState(0);


    useEffect(() =>{
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setAllCards(data));
    },[])


    const handleSelectButton = (cards) =>{
        const isExist = selectCard.find((item) => item.id === cards.id);
        let count = cards.credit;
        if(isExist){
            toast('This course already registered.', {
                position:'top-center'
            })
        }
        else{
            selectCard.forEach((item) => {
            count = count + item.credit;
            })
            
            const totalRemaining = 20 - count;
            if (count >= 20){
                toast('You cannot take more than 20 credits.', {
                    position:'top-center'
                })
            }
            else{
            setRemain(totalRemaining);
            setTotalCredit(count)
            setSelectCard([...selectCard, cards ])
            }
        }
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
                <ToastContainer/>
                </div>
                    ))
                }
            </div>

            <div>
          <Calculation selectCard={selectCard} remain={remain} totalCredit={totalCredit}></Calculation>
        </div>
        </div>
    );
};

export default Card;