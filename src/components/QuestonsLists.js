

function QuestonsLists({ questions, handleQuestonsSelect, buttonColors, currentQuestion }) {

    console.log(questions, 'qqq');



    return (
        <div className="queston-list">
            {
                questions.map((_, index) => {
                    return (
                        <button
                            key={index}
                            className={index === currentQuestion ? "active": ""}
                            style={{ backgroundColor: buttonColors[index] }}
                            onClick={() => handleQuestonsSelect(index)}
                        >
                            {index + 1}
                        </button>
                    )
                })
            }
        </div>
    );
}

export default QuestonsLists;