

function Question({ question, handleOptionSelect, bgColor }) {

    return (
        <div className="items" style={{ display: 'flex' }}>
            <div>
                <img src={question.img} alt="" />
            </div>
            <div>
                <h2>{question.question}</h2>
                <div className="options">
                    {
                        question.option.map((item, index)=>{
                            return(
                                <button key={index} className={bgColor} onClick={()=>handleOptionSelect(item, index)}>{item}</button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Question;