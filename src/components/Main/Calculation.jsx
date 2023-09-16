

const Calculation = ({selectCard}) => {
    
    return (
        <div>
            <p>My name is tomal</p>
            {
                <div>
                <hr></hr>
                <p className="text-lg font-bold pt-2 mb-4">Course Name</p>
                    
                            {selectCard.map((cards, index)=>(
                                <p className="text-slate-500 text-sm" key={cards.id}>{index+1}. {cards.course_title}</p>    
                                ))}
                    
                </div>
            }

        </div>
    );
};

export default Calculation;