package com.quiz.Backend.Services.Impl;

import com.quiz.Backend.Entity.JavaQuiz;
import com.quiz.Backend.Repo.JavaQuizRepo;
import com.quiz.Backend.Services.JavaService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JavaServiceImpl implements JavaService {

    private final JavaQuizRepo javaQuizRepo;

    public List<JavaQuiz> getAllQuestions() {
        return javaQuizRepo.findAll();
    }

    public JavaQuiz saveQuestion(JavaQuiz question) {
        return javaQuizRepo.save(question);
    }
}
