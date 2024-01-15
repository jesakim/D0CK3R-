package com.ayoub.aftas.aftas.services.impl;

 import com.ayoub.aftas.aftas.Config.exceptions.InternalServerError;
 import com.ayoub.aftas.aftas.dto.MemberDto;
import com.ayoub.aftas.aftas.dto.RankingDto;
import com.ayoub.aftas.aftas.entities.Competition;
import com.ayoub.aftas.aftas.entities.Member;
 import com.ayoub.aftas.aftas.entities.RankId;
 import com.ayoub.aftas.aftas.entities.Ranking;
import com.ayoub.aftas.aftas.mappers.CompetitionMapper;
import com.ayoub.aftas.aftas.mappers.MemberMapper;
import com.ayoub.aftas.aftas.respositories.RankingRepository;
import com.ayoub.aftas.aftas.services.CompetitionService;
import com.ayoub.aftas.aftas.services.MemberService;
import com.ayoub.aftas.aftas.services.RankingService;
 import org.springframework.data.domain.Sort;
 import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.IntStream;

@Service
public class RankingServiceImp implements RankingService {

    RankingRepository rankingRepository;
    MemberService memberService;
    CompetitionService competitionService;

    public RankingServiceImp(RankingRepository rankingRepository,MemberService memberService,CompetitionService competitionService) {
        this.rankingRepository = rankingRepository;
        this.memberService = memberService;
        this.competitionService = competitionService;
    }

    @Override
    public Ranking save(RankingDto rankingDto) {
        Competition competition= CompetitionMapper.mapFromDto(
                competitionService.getById(rankingDto.getCompetitionId())
        );

        Member member=MemberMapper.mapFromDto(
                memberService.getById(rankingDto.getMemberId())
        );
        if(getRankingByCompetition_idAndMember_id(competition.getId(), member.getId()) == null) {
            if (findRankingByCompetition_Id(competition.getId()).size() <= competition.getNumberOfParticipants()) {

                Ranking ranking = Ranking.builder()
                        .id(RankId.builder()
                                .memberId(member.getId())
                                .competitionId(competition.getId())
                                .build())
                        .rank(0)
                        .score(0)
                        .competition(competition)
                        .member(member)
                        .build();
                ranking.setScore(0);
                ranking.setRank(0);
                return rankingRepository.save(ranking);
            } else {
                throw new InternalServerError("you can't add participants to this competition because its Full");
            }
        }else {
            throw new InternalServerError("you can't add this member to this competition because this member is already exist");
        }
    }

    @Override
    public Ranking update(Ranking ranking) {
        return rankingRepository.save(ranking);
    }

    @Override
    public void delete(Ranking ranking) {
        rankingRepository.delete(ranking);
    }

    @Override
    public List<Ranking> getAll() {
        return rankingRepository.findAll();
    }

    @Override
    public Ranking getById(RankId id) {

        return rankingRepository.findById(id).get();
    }

    @Override
    public Ranking getRankingByCompetition_idAndMember_id(Long competitionId, Long memberId) {
        return rankingRepository.getRankingByCompetition_idAndMember_id(competitionId, memberId);
    }

    @Override
    public List<Ranking> findRankingByCompetition_Id(Long competition_id) {
        Sort sort = Sort.by(Sort.Order.desc("score"));
        Long competitionId=getAll().get(0).getId().getCompetitionId();
        if(competition_id==null){
            return rankingRepository.findRankingByCompetition_Id(competitionId, sort);
        }
        return rankingRepository.findRankingByCompetition_Id(competition_id, sort);
    }

    @Override
    public  List<MemberDto> getWinners(Long id) {
        List<MemberDto> winners = new ArrayList<>();
        List<Ranking> rankings =findRankingByCompetition_Id(id);
        winners.add(MemberMapper.toDto(rankings.get(0).getMember()));
        winners.add(MemberMapper.toDto(rankings.get(1).getMember()));
        winners.add(MemberMapper.toDto(rankings.get(2).getMember()));
        return winners;
    }


}
