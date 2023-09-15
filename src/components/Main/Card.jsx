import {FaBookOpen } from 'react-icons/fa';


const Card = () => {
    return (
        <div>
            <div>
                <div className="w-64 p-4 bg-white rounded-lg ">
                    <div>
                        <img  className="rounded-lg" src="https://i.ibb.co/Bjt5Hqg/Database-Management-Systems.jpg"/>
                    </div>
                    <p className="text-md font-semibold py-1 pt-1">Database Management Systems</p>
                    <p className="text-justify text-sm text-slate-500 py-1">Explore the world of database systems and SQL programming.</p>
                   
                    <div className="flex justify-between py-1 text-slate-500 font-semibold">
                        <div>

                        <p>Price : 15000</p>
                        </div>
                        <div className='flex gap-2'>
                        <div className='pt-1 '>
                        <FaBookOpen/>
                        </div>
                        <p>Credit : 1hr</p>
                        </div>
                    </div>
                    <button className="bg-blue-500 text-white font-semibold w-full rounded-lg py-1 mt-1">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Card;