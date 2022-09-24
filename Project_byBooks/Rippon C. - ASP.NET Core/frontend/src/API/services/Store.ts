import { QuestionData } from "./QuestionData";
import {Store, createStore, combineReducers} from 'redux';

interface QuestionState {
    readonly loading: boolean;
    readonly unanswered: QuestionData[];
    readonly viewing: QuestionData | null;
    readonly searched: QuestionData[];
}

export interface AppState {
    readonly questions: QuestionState;
}

const initialQuestionState: QuestionState ={
    loading: false,
    unanswered: [],
    viewing: null,
    searched: []
}

export const GETTINGUNANSWEREDQUESTIONS =
 'GettingUnansweredQuestions';

//  A const assertion on an object will give it an immutable type. It also will result 
// in string properties having a narrow string literal type rather than the wider 
// string type. 
 export const gettingUnansweredQuestionsAction = () =>
    ({
        type: GETTINGUNANSWEREDQUESTIONS,
    } as const);

export const GOTUNANSWEREDQUESTIONS =
    'GotUnansweredQuestions';
   export const gotUnansweredQuestionsAction = (
        questions: QuestionData[],) =>
            ({
                type: GOTUNANSWEREDQUESTIONS,
                questions: questions,
            } as const)

export const GETTINGQUESTION = 'GettingQuestion';

export const gettingQuestionAction = () =>
    ({
        type: GETTINGQUESTION,
    } as const);

export const GOTQUESTION = 'GotQuestion';

export const gotQuestionAction = (
    question: QuestionData | null,) =>
        ({
            type: GOTQUESTION,
            question: question,
        } as const);

export const SEARCHINGQUESTIONS ='SearchingQuestions';

export const searchingQuestionsAction = () =>
    ({
        type: SEARCHINGQUESTIONS,
    } as const);

export const SEARCHEDQUESTIONS ='SearchedQuestions';

export const searchedQuestionsAction = (
    questions: QuestionData[],) =>
    ({
        type: SEARCHEDQUESTIONS,
        questions,
    } as const);

// ReturnType expects a function type to be passed into it, so we use the 
// typeof keyword to get the type of each function. 
type QuestionsActions =
    | ReturnType<typeof gettingUnansweredQuestionsAction>
    | ReturnType<typeof gotUnansweredQuestionsAction>
    | ReturnType<typeof gettingQuestionAction>
    | ReturnType<typeof gotQuestionAction>
    | ReturnType<typeof searchingQuestionsAction>
    | ReturnType<typeof searchedQuestionsAction>;

const questionsReducer = (
    state = initialQuestionState,
    action: QuestionsActions ) => {
       switch (action.type) {
        case GETTINGUNANSWEREDQUESTIONS: {
            return {
// The spread syntax allows an object to expand into a place where key-value 
// pairs are expected. The syntax consists of three dots followed by the object to 
// be expanded. 
                ...state, 
                loading: true
            }
        }
        case  GOTUNANSWEREDQUESTIONS: {
            return {
                ...state, 
                unanswered: action.questions , 
                loading: false 
            }
        }
        case GETTINGQUESTION: {
            return {
                ...state,
                viewing: null,
                loading: true,
            }
        }
        case GOTQUESTION: {
            return {
                ...state,
                viewing: action.question,
                loading: false,
            }
        }
        case SEARCHINGQUESTIONS: {
            return {
                ...state,
                searched: [],
                loading: true,
            }
        }
        case SEARCHEDQUESTIONS: {
            return {
                ...state,
                searched: action.questions,
                loading: false,
            }
        }
    }
        return state;
    };

const rootReducer = combineReducers<AppState>({
        questions: questionsReducer
    })

export function configureStore(): Store<AppState>{
    const store = createStore(
        rootReducer,
        undefined
    );
    return store;
}

