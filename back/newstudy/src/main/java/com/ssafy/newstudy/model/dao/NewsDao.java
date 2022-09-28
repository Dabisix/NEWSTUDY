package com.ssafy.newstudy.model.dao;

import com.ssafy.newstudy.model.dto.NewsRequestDto;
import com.ssafy.newstudy.model.dto.NewsResponseDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface NewsDao {
    NewsResponseDto selectNews(Integer n_id);
    List<NewsResponseDto> selectNewsList(NewsRequestDto newsRequestDto);
    Integer selectNewsListCnt(NewsRequestDto newsRequestDto);
    List<String> getNewsKeyword(Integer n_id);
    List<NewsResponseDto> selectNewsListOrderByCnt(Integer c_id);
    List<NewsResponseDto> selectRelatedNewsList(Integer n_id);
    List<NewsResponseDto> selectRecommendNewsList();
    void updateViewCnt(Integer n_id);
}