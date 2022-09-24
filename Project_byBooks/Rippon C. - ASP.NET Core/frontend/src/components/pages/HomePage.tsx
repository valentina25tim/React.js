/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { 
    gettingUnansweredQuestionsAction, 
    gotUnansweredQuestionsAction,
    AppState
 } from '../../API/services/Store';
import { PrimaryButton } from '../../Styles';
import { QuestionList } from '../../utils/QuestionList';
import { getUnansweredQuestions } from '../../API/services/QuestionData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';


export const HomePage = () => {
    
    const dispatch = useDispatch();

    const questions = useSelector (
        (state: AppState) =>state.questions.unanswered,
    )

    const questionsLoading = useSelector(
        (state: AppState) => state.questions.loading,
    )

    React.useEffect(() => { 
        const doGetUnansweredQuestions = async () => {
            
            dispatch(gettingUnansweredQuestionsAction());
            const unansweredQuestions = await getUnansweredQuestions();
            dispatch(gotUnansweredQuestionsAction(unansweredQuestions));
        };
        doGetUnansweredQuestions();
// eslint-disable-next-line 
    }, []);

    const navigate = useNavigate();

    const handleAsKQuestionClick = () => {
        console.log('ToDo - move to the AskPage')
        navigate ('ask');
    }
   

    return (
    <Page>
        <div css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
        `}>
            <PageTitle>
                Unanswered Questions
            </PageTitle>
            
            <h2>Unanswered Questions</h2>
            
            <PrimaryButton  onClick={handleAsKQuestionClick}>
                Ask a question
            </PrimaryButton>

        </div>

        {questionsLoading 
            ? <div>Loading...</div>
            :<QuestionList data={questions || []}/>
        }
        
    </Page>
    )
}