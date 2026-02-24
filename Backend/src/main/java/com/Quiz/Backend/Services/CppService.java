package com.quiz.Backend.Services;

import com.quiz.Backend.Entity.CppQuiz;

import java.util.List;

public interface CppService {
    public List<CppQuiz> getAllQuestions();
    public CppQuiz saveQuestion(CppQuiz question);
}
