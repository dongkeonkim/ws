package com.writingSupport.ws.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class wsController {

    @GetMapping("/")
    public String main() {

        return "index";
    }

}
