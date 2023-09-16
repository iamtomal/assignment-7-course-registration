

const Calculation = ({ selectCard, totalCredit, remain }) => {

    return (
        <div className=" bg-white rounded-lg p-2">
            
            {
                <div>
                <p className=" text-blue-500 text-md font-bold my-2">Credit Hour Remaining {remain} hr</p>
                
                <hr></hr>
                <p className="text-lg font-bold pt-2 mb-4">Course Name</p>
                    
                {
                selectCard.map((cards, index)=>(
                <p className="text-slate-500 text-sm" key={cards.id}>{index+1}. {cards.course_title}</p>
                ))}
                <hr className="my-4"></hr>
                <p className=" text-slate-500 text-md font-bold">Total Credit Hour : {totalCredit}</p>
                    
                </div>
            }

        </div>
    );
};

export default Calculation;