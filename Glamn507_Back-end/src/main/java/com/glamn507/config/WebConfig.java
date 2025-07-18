package com.glamn507.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // CORS 허용할 경로
		        .allowedOrigins(
		                "http://localhost:3000",
		                "http://172.30.1.39:3000",
		                "https://glamn507.com",
		                "https://www.glamn507.com",
		                "https://d3ulk7eitkm0v6.cloudfront.net"
		            )
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // 허용할 HTTP 메서드
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
