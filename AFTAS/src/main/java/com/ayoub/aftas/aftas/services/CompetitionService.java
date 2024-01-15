package com.ayoub.aftas.aftas.services;

import com.ayoub.aftas.aftas.Config.exceptions.NotFoundException;
import com.ayoub.aftas.aftas.dto.CompetitionDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CompetitionService {

    CompetitionDto save(CompetitionDto competition) throws NotFoundException;

    CompetitionDto update(CompetitionDto competition) throws NotFoundException;

    void delete(Long id) throws NotFoundException;

    List<CompetitionDto> getAll();
    List<CompetitionDto> getOpenCompetitions();
    List<CompetitionDto> getActiveCompetitions();

    Page<CompetitionDto> getAllEntities(Pageable pageable,String status);

    CompetitionDto getById(Long id) throws NotFoundException;
    Page<CompetitionDto> findByStatus(String status, Pageable pageable);

}