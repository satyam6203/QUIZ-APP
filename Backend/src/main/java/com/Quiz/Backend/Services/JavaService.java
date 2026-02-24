package com.quiz.Backend.Services;

import com.quiz.Backend.Entity.JavaQuiz;

import java.util.List;

public interface JavaService {
    public List<JavaQuiz> getAllQuestions();
    public JavaQuiz saveQuestion(JavaQuiz question);
}
