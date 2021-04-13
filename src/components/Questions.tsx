import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchQuestions } from '../store/action-creaters/question'
import { useTypeSelector } from '../hook/useTypeSelector'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const QuestionList: React.FC = () => {
    const {questions, error, loading} = useTypeSelector(state => state.question)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchQuestions())
    },[dispatch])

    if(loading) {
        return <h1>Идет загрузка...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }
    
    return (
        <div>
            <h3>questions and answers about login</h3>
            <section className='info'>
                <article className='question'>
                    <header>
                        <h4> {} </h4>
                    </header>
            {questions.map()
                
            }
                owInfo && <p>{}</p> }
                </article>/>
            </section>
        )
        </div>
    )
}

export default QuestionList
