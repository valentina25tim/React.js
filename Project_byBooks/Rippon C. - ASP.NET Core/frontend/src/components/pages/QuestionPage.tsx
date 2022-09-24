/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { 
    gray3, 
    gray6, 
    Fieldset,
    FieldContainer,
    FieldLabel,
    FieldTextArea,
    FormButtonContainer,
    PrimaryButton,
    FieldError,
    SubmissionSuccess} from '../../Styles';
import {
    useSelector,
    useDispatch,} from 'react-redux';
import { 
    AppState,
    gettingQuestionAction,
    gotQuestionAction } from '../../API/services/Store';
import React from "react";
import {useParams} from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { Page } from "./Page";
import { AnswerList } from '../../utils/AnswerList';
import { getQuestion, postAnswer } from "../../API/services/QuestionData";


type FormData = {
    content: string
}

export const QuestionPage = () => {

    const dispatch = useDispatch();

    const question = useSelector(
        (state: AppState) => state.questions.viewing,
    )


//     we are using a union type for the state because the state will be null
// initially while the question is being fetched, and also null if the question isn't 
// found
   
    const {questionId} = useParams();
    const { register, formState: { errors }, handleSubmit, formState } = useForm<FormData>({
        mode: 'onBlur',
       });
    
    const [successfullySubmitted, setSuccessfullySubmitted] =
       React.useState(false)

    React.useEffect(() => {
        const doGetQuestion = async (
            questionId: number,
        ) => {

            dispatch(gettingQuestionAction())
            const foundQuestion = await getQuestion(questionId)
            dispatch(gotQuestionAction(foundQuestion))
        }
        if (questionId)
        {
            // use the 
            // Number constructor to convert questionId from a string into a number.
            doGetQuestion(Number(questionId))
        }
//         If [questionId] wasn't provided, it would get into an infinite loop 
// because every time it called setQuestion, it causes a re-render, which, without 
// [questionId], would always rerun the method

    // eslint-disable-next-line 
    }, [questionId]);


   const submitForm = async (data:FormData) => {
    const result = await postAnswer({
// Notice ! after the reference to the question state variable. This is a non-null 
// assertion operator.
        questionId: question!.questionId,
        content: data.content,
        userName: 'Fred',
        created: new Date(),
        });
    setSuccessfullySubmitted( result ? true : false)
   }



    return (
        <Page>
            <div css={css`
                background-color: white;
                padding: 15px 20px 20px 20px;
                border-radius: 4px;
                border: 1px solid ${gray6};
                box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
                `}
            >
                <div css={css`
                    font-size: 19px;
                    font-weight: bold;
                    margin: 10px 0px 5px;
                    `}
                >
{/* When using triple equals (===), we are checking for strict equality. This means 
both the type and the value we are comparing have to be the same. When using 
a double equals (==), the type isn't checked.  */}
                    {question === null 
                        ? '' 
                        : question.title
                    }
                
                </div>
{/* React Fragment - we can nest multiple elements within it without creating a DOM node.  */}
            {question !== null && (
            <React.Fragment>
                <p css={css`
                    margin-top: 0px;
                    background-color: white;
                    `}
                >          
                    {question.content}
                </p>  
                <div css={css`
                    font-size: 12px;
                    font-style: italic;
                    color: ${gray3};
                `}>
                    {`Asked by ${question.userName} on 
                    ${question.created.toLocaleDateString()} 
                    ${question.created.toLocaleTimeString()}`}
                </div>

                <AnswerList data={question.answers} />

                <form 
                    onSubmit = {handleSubmit(submitForm)}
                    css={css`
                    margin-top: 20px;
                `}>
                    <Fieldset disabled = {
                        formState.isSubmitting ||
                        successfullySubmitted
                    }>
                        <FieldContainer>
                            <FieldLabel htmlFor="content">
                                Your Answer
                            </FieldLabel>
                            
                            <FieldTextArea
                                {...register("content",{
                                    required: true,
                                    minLength: 50,
                                })}
                                id="content"
                                name="content"
                            />
                            {errors.content && errors.content.type === 'required' && (
                                <FieldError>
                                    You must enter the answer
                                </FieldError>
                            )}
                            {errors.content && errors.content.type ==='minLength' && (
                                <FieldError>
                                    The answer must be at least 50 characters
                                </FieldError>
                            )}

                        </FieldContainer>
                        <FormButtonContainer>
                            <PrimaryButton type = "submit">
                                Submit Your Answer
                            </PrimaryButton>
                        </FormButtonContainer>
                        
                        {successfullySubmitted && (
                            <SubmissionSuccess>
                                Your answer was successfully submitted
                            </SubmissionSuccess>
                        )}

                    </Fieldset>

                </form>
                
            </React.Fragment>
            )}

            </div>
        </Page>
    )}