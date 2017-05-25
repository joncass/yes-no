export const ADD_QUESTION = 'question/ADD'
export const SET_NEW_QUESTION = 'question/SET_NEW'

const initialState = {
  questions: [],
  newQuestionText: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      const currentQuestions = state.questions
      currentQuestions.push(action.newQuestion)

      return {
        ...state,
        questions: currentQuestions,
      }

    case SET_NEW_QUESTION:
      return {
        ...state,
        newQuestionText: action.newQuestionText,
      }

    default:
      return state
  }
}

export const addQuestion = (newQuestion) => {
  return dispatch => {
    dispatch({
      type: ADD_QUESTION,
      newQuestion: newQuestion,
    })

    dispatch({
      type: SET_NEW_QUESTION,
      newQuestionText: '',
    })
  }
}

export const setNewQuestion = (newQuestionText) => {
  return dispatch => {
    dispatch({
      type: SET_NEW_QUESTION,
      newQuestionText,
    })
  }
}
