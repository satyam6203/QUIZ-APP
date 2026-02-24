package com.quiz.Backend.Controller;

import com.quiz.Backend.Entity.JavaQuiz;
import com.quiz.Backend.Services.JavaService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/java/quiz")
@AllArgsConstructor
public class JavaQuizController {

    private final JavaService javaService;

    @GetMapping("/questions")
    public List<JavaQuiz> getQuestions() {
        return javaService.getAllQuestions();
    }

    @PostMapping(value = "/save", consumes = "application/json", produces = "application/json")
    public JavaQuiz saveQuestion(@RequestBody JavaQuiz question) {
        return javaService.saveQuestion(question);
    }
}
