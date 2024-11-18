package eecs3311.app.yuplanner.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eecs3311.app.yuplanner.model.advisor;
import eecs3311.app.yuplanner.repository.advisorRepository;

@Service
public class advisorServiceImpl implements advisorService {

    @Autowired
    private advisorRepository advisorRepository;
    
    @Override
    public advisor saveAdvisor(advisor advisor){
        return advisorRepository.save(advisor);
    }

    @Override
    public List<advisor> getAllAdvisors(){
        return advisorRepository.findAll();
    }
}