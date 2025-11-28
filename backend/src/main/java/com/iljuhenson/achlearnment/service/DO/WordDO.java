package com.iljuhenson.achlearnment.service.DO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class WordDO {

    private String word;
    private Double start;
    private Double end;
}
