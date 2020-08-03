package com.pauloc.seguranca;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class ConfigCors {

    @Bean
    public FilterRegistrationBean<CorsFilter> corsFilter() {
        var source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration().applyPermitDefaultValues();
        config.addAllowedMethod(HttpMethod.PUT);
        config.addAllowedMethod(HttpMethod.DELETE);
        config.addAllowedMethod(HttpMethod.POST);
        source.registerCorsConfiguration("/**", config);
        var bean = new FilterRegistrationBean<CorsFilter>(new CorsFilter(source));
        bean.setOrder(0);
        return bean;
    }
}