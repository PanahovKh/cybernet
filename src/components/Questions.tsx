import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchQuestions } from '../store/action-creaters/question'
import { useTypeSelector } from '../hook/useTypeSelector'
import SingleQuestion from './SingleQuestion'
import '../.././src/index.css'

const QuestionList: React.FC = () => {
    const {questions, error, loading} = useTypeSelector(state => state.question)
    const dispatch = useDispatch()

    // console.log(questions);

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
        <div className='container'>
            <h3>questions and answers about login</h3>
            <section className='info'>
                {questions.map((question) => {
                    return <SingleQuestion key={question.id} {...question} />
                    })  
                }
            </section>
        </div>
    )
}

export default QuestionList
