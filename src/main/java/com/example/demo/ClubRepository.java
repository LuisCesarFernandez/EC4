package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "clubes", path = "clubes")
public interface ClubRepository extends CrudRepository<Club, Long> {
    
}
