import axios from 'axios'
import { Dispatch } from 'redux'
import { questionAction, QuestionActionTypes } from '../../types/questions'



export const fetchQuestions = () => {
    return async (dispatch: Dispatch<questionAction>) => {
        try {
            dispatch({ type: QuestionActionTypes.FETCH_QUESTION })
            const response = await axios.get('https://https://jsonplaceholder.typicode.com/comments?_limit=5.typicode.com/users')
            setTimeout(() => {
                dispatch({ type: QuestionActionTypes.FETCH_QUESTION_SUCCESS, payload: response.data})
            },500)
        } catch (error) {
            dispatch({ 
                type: QuestionActionTypes.FETCH_QUESTION_ERROR, 
                payload: 'Произашло ошибка при загрузке пользавателей'
            })
        }
    }
}