import { questionAction, QuestionActionTypes, QuestionState, } from "../../types/questions"


const initialState = {
    questions: [],
    loading: false,
    error: null,
    showInfo: false
}

export const questionsReducer =(state=initialState, action:questionAction ): QuestionState => {
    switch (action.type) {
        case QuestionActionTypes.FETCH_QUESTION:
            return {loading: true, error: null, showInfo: false, questions: []}
        case QuestionActionTypes.FETCH_QUESTION_SUCCESS:
            return {loading: false, error: null, showInfo: false, questions: action.payload}
        case QuestionActionTypes.FETCH_QUESTION_ERROR:
            return {loading: false, error:action.payload, showInfo: false, questions:[] }
        case QuestionActionTypes.FETCH_QUESTION_SHOW_INFO:
            return {...state, showInfo: true}
        default:
            return state
    }
}

