package com.Quiz.Backend.Service;

import com.Quiz.Backend.Entity.PythonQuestion;
import com.Quiz.Backend.Repo.PythonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PythonService {
    @Autowired
    PythonRepo pythonRepo;

    public List<PythonQuestion> getAllQuestion(){
        return pythonRepo.findAll();
    }

    public PythonQuestion pythonQuestion(PythonQuestion pythonQuestion){
        return pythonRepo.save(pythonQuestion);
    }

    public ResponseEntity<String> UpdatePythonQuestion(PythonQuestion pythonQuestion){
        if(pythonQuestion.getId()==null){
            return ResponseEntity.badRequest().body("Question is not find with this id!");
        }else{
            pythonRepo.save(pythonQuestion);
            return ResponseEntity.ok().body("Question Updated SuccessFully");
        }
    }

    public Optional<Optional<PythonQuestion>> getPytonQuestionById(Long id){
        if(id==null || !pythonRepo.existsById(id)){
            return Optional.empty();
        }
        else{
            return Optional.of(pythonRepo.findById(id));
        }
    }

    public ResponseEntity<String> deletePythonQuestion(Long id){
        if(id==null || !pythonRepo.existsById(id)){
            return ResponseEntity.badRequest().body("Question is not Found with this id!");
        }
        else{
            pythonRepo.deleteById(id);
            return ResponseEntity.ok().body("Question Deleted SuccessFully");
        }
    }

    public ResponseEntity<String> DeleteAllPythonQuestion(){
        pythonRepo.deleteAll();
        return ResponseEntity.ok().body("All Queations Are Deleted");
    }
}
