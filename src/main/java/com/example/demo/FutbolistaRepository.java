package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "futbolistas", path = "futbolistas")
public interface FutbolistaRepository extends CrudRepository<Futbolista, Long> {
    
}
