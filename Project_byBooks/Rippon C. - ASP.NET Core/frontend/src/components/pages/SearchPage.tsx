/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
 AppState,
 searchingQuestionsAction,
 searchedQuestionsAction,
} from '../../API/services/Store'; 
// The useSearchParams hook from React Router is used to access query 
// parameters.
import { useSearchParams } from 'react-router-dom';
import { QuestionList } from '../../utils/QuestionList';
import { searchQuestions } from '../../API/services/QuestionData';
import { Page } from './Page';


export const SearchPage = () => {

    const dispatch = useDispatch();

    const questions = useSelector(
        (state: AppState) => state.questions.searched)

    const [searchParams] = useSearchParams();
    const search = searchParams.get('criteria')||"";

    React.useEffect(() => {
        const doSearch = async (criteria: string) => {
            dispatch(searchingQuestionsAction());
            const foundResults = await searchQuestions (criteria);
            dispatch(searchedQuestionsAction(foundResults))
        }
        doSearch(search)
        // eslint-disable-next-line
    }, [search])


    return (
        <Page title="Search Results">
            {search && (
                <p css={css`
                    font-size: 16px;
                    font-style: italic;
                    margin-top: 0px;
                `}>
                    for "{search}"
                </p>
            )}
            <QuestionList data={questions}/>
        </Page>
    )
}