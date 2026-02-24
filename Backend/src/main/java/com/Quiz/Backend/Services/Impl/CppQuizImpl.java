package com.quiz.Backend.Services.Impl;

import com.quiz.Backend.Entity.CppQuiz;
import com.quiz.Backend.Entity.JavaQuiz;
import com.quiz.Backend.Repo.CppRepo;
import com.quiz.Backend.Services.CppService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CppQuizImpl implements CppService {

    private final CppRepo cppRepo;

    public List<CppQuiz> getAllQuestions() {
        return cppRepo.findAll();
    }

    public CppQuiz saveQuestion(CppQuiz question) {
        return cppRepo.save(question);
    }
}
