using System;

namespace MirrorLink.API.Models
{
    public class AnswerGetResponse
    {
        public int AnswerId { get; set; }   
        public string Content { get; set; } 
        public string UserName { get; set; }
        public DateTime Created { get; set; } 
    }
}
