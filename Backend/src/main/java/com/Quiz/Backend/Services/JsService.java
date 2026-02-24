package com.quiz.Backend.Services;

import com.quiz.Backend.Entity.JsQuiz;

import java.util.List;

public interface JsService {
    public List<JsQuiz> getAllQuestions();
    public JsQuiz saveQuestion(JsQuiz question);
}
