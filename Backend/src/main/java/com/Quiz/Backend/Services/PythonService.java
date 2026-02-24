package com.quiz.Backend.Services;

import com.quiz.Backend.Entity.PythonQuiz;

import java.util.List;

public interface PythonService {
    public List<PythonQuiz> getAllQuestions();
    public PythonQuiz saveQuestion(PythonQuiz question);
}
