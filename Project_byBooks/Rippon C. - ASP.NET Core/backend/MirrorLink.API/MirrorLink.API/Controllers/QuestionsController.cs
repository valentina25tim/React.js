using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MirrorLink.API.Data;
using MirrorLink.API.Models;
using System.Collections.Generic;

namespace MirrorLink.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly IDataRepository _dataRepository;

        public QuestionsController(IDataRepository dataRepository)
        {
            _dataRepository = dataRepository;
        }

        [HttpGet]
        public IEnumerable<QuestionGetManyResponse> GetQuestions(string search)
        {
            if (string.IsNullOrEmpty(search))
            {
                return _dataRepository.GetQuestions();
            }
            else
            {
                return _dataRepository.GetQuestionsBySearch(search);

            }
        }

        [HttpGet("unanswered")]
        public IEnumerable<QuestionGetManyResponse> GetUnansweredQuestions()
        {
            return _dataRepository.GetUnansweredQuestions();
        }

        [HttpGet("{questionId}")]
        public ActionResult<QuestionGetSingleResponse> GetQuestion(int questionId)
        {
            var question = _dataRepository.GetQuestion(questionId);

            if (question == null)
            {
                return NotFound();
            }
            return question;
        }

        [HttpPost]
        public ActionResult<QuestionGetSingleResponse> PostQuestion(QuestionPostRequest questionPostrequest)
        {
            var saveQuestion = _dataRepository.PostQuestion(
                new QuestionPostFullRequest
                {
                    Title = questionPostrequest.Title,
                    Content = questionPostrequest.Content,
                    UserId ="1",
                    UserName = "bob.test@test.com",
                    Created = System.DateTime.UtcNow
                });
            return CreatedAtAction(
                nameof(GetQuestion),
                new { questionId = saveQuestion.QuestionId },
                saveQuestion);
        }
        //        We return a call to CreatedAtAction from ControllerBase, which will 
        //return status code 201 with the question in the response.In addition, it also
        //includes a Location HTTP header that contains the path to get the question.

        [HttpPut("{questionId}")]
        public ActionResult<QuestionGetSingleResponse> PutQuestion(int questionId, QuestionPutRequest questionPutRequest)
        {
            var question = _dataRepository.GetQuestion(questionId);

            if (question == null)
            {
                return NotFound();
            }
            questionPutRequest.Title = string.IsNullOrEmpty(questionPutRequest.Title)
                ? question.Title
                : questionPutRequest.Title;
            questionPutRequest.Content = string.IsNullOrEmpty(questionPutRequest.Title)
                ? question.Content
                : questionPutRequest.Content;
            var savedQuestion = _dataRepository.PutQuestion(questionId, questionPutRequest);
            return savedQuestion;
        }

        [HttpDelete("{questionId}")]
        public ActionResult DeleteQuestion (int questionId)
        {
            var question = _dataRepository.GetQuestion(questionId);
            if(question == null)
            {
                return NotFound();
            }
            _dataRepository.DeleteQuestion(questionId);
            return NoContent();
        }

        [HttpPost("{questionId}/answer")]
        public ActionResult<AnswerGetResponse>PostAnswer (int questionId, AnswerPostRequest answerPostRequest)
        {
            var questionExists = _dataRepository.QuestionExists(answerPostRequest.QuestionId.Value);
            if (!questionExists)
            {
                return NotFound();
            }
            var savedAnswer = _dataRepository.PostAnswer(new AnswerPostFullRequest 
            {
                QuestionId =answerPostRequest.QuestionId.Value,
                Content = answerPostRequest.Content,
                UserId = "1",
                UserName = "bob.test@test.com",
                Created = System.DateTime.UtcNow
            });
            return savedAnswer;
        }
    }

}
