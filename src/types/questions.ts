export interface QuestionState {
    questions: any[];
    loading: boolean;
    error: null | string
}

export enum QuestionActionTypes {
    FETCH_QUESTION = 'FETCH_QUESTION',
    FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS',
    FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR'
}

interface fetchQuestionAction {
    type: QuestionActionTypes.FETCH_QUESTION
}
interface fetchQuestionSuccessAction {
    type: QuestionActionTypes.FETCH_QUESTION_SUCCESS,
    payload: any[]
}
interface fetchQuestionErrorAction {
    type: QuestionActionTypes.FETCH_QUESTION_ERROR,
    payload: string
}

export type  questionAction  = fetchQuestionAction | fetchQuestionSuccessAction | fetchQuestionErrorAction