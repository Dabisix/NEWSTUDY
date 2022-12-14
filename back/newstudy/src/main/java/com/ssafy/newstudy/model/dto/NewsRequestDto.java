package com.ssafy.newstudy.model.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class NewsRequestDto {
    private Integer page = 1;
    private Integer start_no = 0;
    private Integer per_page = 30;
    private Integer total_cnt;  // 해당 카테고리 전체 뉴스 수

    private Integer n_id;

    private Integer startlevel = 1;
    private Integer endlevel = 6;
    private Integer[] categoryid;
    private String titlekeyword;
    private String contentkeyword;
    private LocalDate startdate;
    private LocalDate enddate;

    public void setStartlevelAndEndlevel(int startlevel, int endlevel){
        this.startlevel = startlevel;
        this.endlevel = endlevel;
    }

    public void setPage(Integer page){
        if(page == null || page == 0) {
            setPage(1);
            return;
        }
            this.page = page;
            this.start_no = (page - 1) * per_page;
    }
}
