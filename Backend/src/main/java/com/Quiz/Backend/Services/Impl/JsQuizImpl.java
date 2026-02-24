package com.quiz.Backend.Services.Impl;

import com.quiz.Backend.Entity.JavaQuiz;
import com.quiz.Backend.Entity.JsQuiz;
import com.quiz.Backend.Repo.JsRepo;
import com.quiz.Backend.Services.JsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JsQuizImpl implements JsService {

    private final JsRepo jsRepo;

    @Override
    public List<JsQuiz> getAllQuestions() {
        return jsRepo.findAll();
    }

    @Override
    public JsQuiz saveQuestion(JsQuiz question) {
        return jsRepo.save(question);
    }
}
