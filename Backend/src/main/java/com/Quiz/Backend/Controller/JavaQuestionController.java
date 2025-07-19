package com.Quiz.Backend.Controller;

import com.Quiz.Backend.Entity.JavaQuestion;
import com.Quiz.Backend.Service.JavaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/quiz/java")
public class JavaQuestionController {

    @Autowired
    JavaService javaService;

    @GetMapping("/all-question")
    public List<JavaQuestion> JavaQuestion(){
        try{
            return javaService.getAllQuestion();
        }
        catch(Exception e){
            e.printStackTrace();
            return List.of();
        }
    }

    @PostMapping("/save-question")
    public JavaQuestion SaveJavaQuestion(@RequestBody JavaQuestion javaQuestion){
        try{
            return javaService.saveJavaQuestion(javaQuestion);
        }
        catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping("/get-question/{id}")
    public Optional<Optional<JavaQuestion>> findByQuestionId(@PathVariable Long id){
        try{
            return javaService.getQuestionById(id);
        }
        catch(Exception e){
            e.printStackTrace();
            return Optional.empty();
        }
    }

    @PutMapping("/update-question/{id}")
    public ResponseEntity<String> UpdateQuestion(@RequestBody JavaQuestion javaQuestion){
        try{
            javaService.UpdateJavaQuestion(javaQuestion);
            return ResponseEntity.ok().body("Question Updated SuccessFully");
        }
        catch(Exception e){
            return ResponseEntity.status(500).body("Uable to Update Question by this id");
        }
    }

    @DeleteMapping("/delete-question/{id}")
    public ResponseEntity<String> DeleteQuestion(@PathVariable Long id){
        try{
            javaService.deleteJavaQuestion(id);
            return ResponseEntity.ok().body("Question deleted SuccessFully");
        }
        catch(Exception e){
            return ResponseEntity.status(500).body("Unale to Delete All Question");
        }
    }

    @DeleteMapping("/delete-all")
    public ResponseEntity<String> deleteAllJavaQuestion(){
        try{
            javaService.deleAllQuestion();
            return ResponseEntity.ok().body("All question Deleted SuccessFully");
        }
        catch(Exception e){
            return ResponseEntity.status(500).body("Unable to delete the Java Question");
        }
    }
}
