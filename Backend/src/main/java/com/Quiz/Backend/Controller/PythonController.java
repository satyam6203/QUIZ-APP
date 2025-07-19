package com.Quiz.Backend.Controller;

import com.Quiz.Backend.Entity.PythonQuestion;
import com.Quiz.Backend.Service.PythonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/quiz/python")
public class PythonController {

    @Autowired
    PythonService pythonService;

    @GetMapping("/all-question")
    public List<PythonQuestion> getAllPythonQuestion(){
        try{
            return pythonService.getAllQuestion();
        }
        catch(Exception e){
            e.printStackTrace();
            return List.of();
        }
    }

    @PostMapping("/save-question")
    public PythonQuestion pythonQuestion(@RequestBody PythonQuestion pythonQuestion){
        try{
            return pythonService.pythonQuestion(pythonQuestion);
        }
        catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping("/get-question/{id}")
    public Optional<Optional<PythonQuestion>> getPythonQuestionById(@PathVariable Long id){
        try{
            return pythonService.getPytonQuestionById(id);
        }
        catch(Exception e){
            e.printStackTrace();
            return Optional.empty();
        }
    }

    @PutMapping("/update-question/{id}")
    public ResponseEntity<String> updatePythonQuestion(@RequestBody PythonQuestion pythonQuestion){
        try{
            pythonService.UpdatePythonQuestion(pythonQuestion);
            return ResponseEntity.ok().body("Updated SuccessFully");
        }
        catch(Exception e){
            return ResponseEntity.status(500).body("Failed to update the question");
        }
    }

    @DeleteMapping("/delete-all")
    public ResponseEntity<String> deletePyhonQuestion(){
        try{
            return pythonService.DeleteAllPythonQuestion();
        }
        catch(Exception e){
            return ResponseEntity.status(500).body("Failed to delete");
        }
    }

    @DeleteMapping("/delete-question/{id}")
    public ResponseEntity<String> deleteQuestionByIdBy(@PathVariable Long id){
        try{
            pythonService.deletePythonQuestion(id);
            return ResponseEntity.ok().body("Question is deleted SuccessFully");
        }
        catch(Exception e){
            return ResponseEntity.status(500).body("Question is not find with this id & unable to delete");
        }
    }   
}
