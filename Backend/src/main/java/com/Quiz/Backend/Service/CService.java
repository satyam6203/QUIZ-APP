package com.Quiz.Backend.Service;

import com.Quiz.Backend.Entity.CQuestion;
import com.Quiz.Backend.Repo.CRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CService {
    
    @Autowired
    CRepo cRepo;

    public List<CQuestion> getAllQuestion(){
        return cRepo.findAll();
    }

    public CQuestion SaveCQuestion(CQuestion cQuestion){
        return cRepo.save(cQuestion);
    }

    public ResponseEntity<String> deleteCQuestion(Long id){
        if(id==null || !cRepo.existsById(id)){
            return ResponseEntity.badRequest().body("The Question is not found From this id");
        }else{
            cRepo.deleteById(id);
            return ResponseEntity.ok().body("Question deleted SuccessFully");
        }
    }

    public ResponseEntity<String> deleAllCQuestion(){
        cRepo.deleteAll();
        return ResponseEntity.ok().body("All Questions are Deleted!");
    }

    public Optional<Optional<CQuestion>> getQuestionById(Long id){
        if(id==null || !cRepo.existsById(id)){
            return Optional.empty();
        }
        else{
            return Optional.of(cRepo.findById(id));
        }
    }

    public ResponseEntity<String> UpdateCQuestion(CQuestion cQuestion){
        if(cQuestion.getId()==null){
            return ResponseEntity.badRequest().body("Question is not found by this id");
        }
        else{
            cRepo.save(cQuestion);
            return ResponseEntity.ok().body("Question Updated SuccessFully");
        }
    }
}
