import { questionAction, QuestionActionTypes, QuestionState } from "../../types/questions"


const initialState = {
    questions: [],
    loading: false,
    error: null
}

export const questionsReducer =(state=initialState, action:questionAction ): QuestionState => {
    switch (action.type) {
        case QuestionActionTypes.FETCH_QUESTION:
            return {loading: true, error: null, questions: []}
        case QuestionActionTypes.FETCH_QUESTION_SUCCESS:
            return {loading: false, error: null, questions: action.payload}
        case QuestionActionTypes.FETCH_QUESTION_ERROR:
            return {loading: false, error:action.payload, questions:[] }
        default:
            return state
    }
}