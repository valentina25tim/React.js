import React from "react";
import {
    Fieldset,
    FieldContainer,
    FieldLabel,
    FieldInput,
    FieldTextArea,
    FormButtonContainer,
    PrimaryButton,
    FieldError,
    SubmissionSuccess
   } from '../../Styles';
import { useForm } from 'react-hook-form';
import { postQuestion } from "../../API/services/QuestionData";
import { Page } from "./Page";

type FormData = {
    title: string;
    content: string;
   };

export const AskPage = () => {
    
    // formState contains information such as whether the form is being submitted and 
    // whether the form is valid
    const { register, formState: { errors }, handleSubmit, formState} = useForm<FormData>({
        mode: 'onBlur',
       });
    
    const[successfullySubmitted, setSuccessfullySubmitted] = React.useState(false)
    
    const submitForm = async (data: FormData) => {
        const result = await postQuestion({
            title: data.title,
            content: data.content,
            userName: 'Fred',
            created: new Date()
        });
        setSuccessfullySubmitted(result ? true : false);
       };
       
    
       return (
        <Page title="Ask a question">
            <form onSubmit={handleSubmit(submitForm)}>
{/* You may notice an isSubmitted flag within formState. This indicates whether 
a form has been submitted and is true, even if the form is invalid. This is why we 
use our own state (successfullySubmitted) to indicate that a valid form has 
been submitted. */}
 
                <Fieldset disabled={
                    formState.isSubmitted||
                    successfullySubmitted
                }>
                    
                    
                    <FieldContainer>
{/* htmlFor attribute. This 
means a screen reader will read out the label when the input has focus. In addition, 
clicking on the label will automatically set focus on the input.  */}
                        <FieldLabel htmlFor="title">
                            Title
                        </FieldLabel>
{/* For VALIDATION look there https://react-hook-form.com/api/useform/register/ */}
                        <FieldInput
                            {...register('title',{
                                required : true,
                                minLength : 10,
                                maxLength : 300,
                            })
                               
                                }
                            id="title"
                            name="title"
                            type="text"
                        />
                        {errors.title && errors.title.type === 'minLength'&& (
                            <FieldError>
                                The title must be at least 10 characters
                            </FieldError>
                        ) }
                    </FieldContainer>
                    
                    
                    <FieldContainer>
                        <FieldLabel htmlFor="content">
                            Content
                        </FieldLabel>
                        <FieldTextArea
                            {...register('content',{
                                required: true,
                                minLength: 50,
                            })}
                            id="content"
                            name="content"
                        />
                        {errors.content && errors.content.type === 'required' && (
                            <FieldError>
                                You must enter the question content
                            </FieldError>
                        )}
                        {
                            errors.content && errors.content.type === 'minLength' && (
                                <FieldError>
                                    The content must be at least 50 characters
                                </FieldError>
                            )
                        }
                    </FieldContainer>
                    
                    
                    <FormButtonContainer>
                        <PrimaryButton type="submit">
                            Submit Your Question
                        </PrimaryButton>
                    </FormButtonContainer>

                    {successfullySubmitted && (
                        <SubmissionSuccess>
                            Your question was successfully submitted
                        </SubmissionSuccess>
                    )}


                </Fieldset>
            </form>
        </Page>
    );
}

export default AskPage;