package com.Quiz.Backend.Controller;

import com.Quiz.Backend.Entity.CQuestion;
import com.Quiz.Backend.Service.CService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/quiz/c")
public class CQuestionController {

    @Autowired
    CService cService;

    @GetMapping("/all-question")
    public List<CQuestion> cQuestions(){
        try{
            return cService.getAllQuestion();
        }
        catch(Exception e){
            e.printStackTrace();
            return List.of();
        }
    }

    @PostMapping("/add-question")
    public CQuestion saveCQuestion(CQuestion cQuestion){
        try{
            return cService.SaveCQuestion(cQuestion);
        }
        catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping("/get-question/{id}")
    public Optional<Optional<CQuestion>> findByQuestionId(@PathVariable Long id){
        try{
            return cService.getQuestionById(id);
        }
        catch(Exception e){
            e.printStackTrace();
            return Optional.empty();
        }
    }

    @PutMapping("/update-question/{id}")
    public ResponseEntity<String> UpdateCQuestion(@RequestBody CQuestion cQuestion){
        try{
            cService.UpdateCQuestion(cQuestion);
            return ResponseEntity.ok().body("Question Updated SuccessFully");
        }
        catch(Exception e){
            return ResponseEntity.status(500).body("Uable to Update Question by this id");
        }
    }

    @DeleteMapping("/delete-question/{id}")
    public ResponseEntity<String> DeleteCQuestion(@PathVariable Long id){
        try{
            cService.deleteCQuestion(id);
            return ResponseEntity.ok().body("Question deleted SuccessFully");
        }
        catch(Exception e){
            return ResponseEntity.status(500).body("Unale to Delete All Question");
        }
    }

    @DeleteMapping("/delete-all")
    public ResponseEntity<String> deleteAllCQuestion(){
        try{
            cService.deleAllCQuestion();
            return ResponseEntity.ok().body("All question Deleted SuccessFully");
        }
        catch(Exception e){
            return ResponseEntity.status(500).body("Unable to delete All C  Question");
        }
    }
}
