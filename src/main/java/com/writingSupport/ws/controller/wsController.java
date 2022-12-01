package com.writingSupport.ws.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// TODO: 요청이 많은 IP 임시 차단 등의 방법을 찾아보자
// TODO: ADMIN PAGE 개발

@Controller
public class wsController {

    @GetMapping("/")
    public String main() {

        return "index";
    }
}
