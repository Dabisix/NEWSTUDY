package com.ssafy.newstudy.model.dao;

import com.ssafy.newstudy.model.dto.UserDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDao {
    UserDto selectUserByEmail(String email);
    void insertUser(UserDto userDto);
    void updateUser(UserDto userDto);
}