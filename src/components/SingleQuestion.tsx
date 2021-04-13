import React from 'react'
import { useTypeSelector } from '../hook/useTypeSelector'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion:React.FC  = ({name:string, body: string}) => {
    const {showInfo} = useTypeSelector(state => state.question)

    return(
        <article className='question'>
            <header>
                <h4> {name} </h4>
                <button className='btn' onClick={()=> (!showInfo)}>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />} </button>
            </header>
            {showInfo && <p>{body}</p> }
    </article>
    )
}

export default SingleQuestion