﻿using System;

namespace MirrorLink.API.Models
{
    public class QuestionPostFullRequest
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
        public DateTime Created { get; set; }

    }
}
