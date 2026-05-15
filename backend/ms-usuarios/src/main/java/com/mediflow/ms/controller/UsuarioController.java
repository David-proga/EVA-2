package com.mediflow.ms.controller;

import org.springframework.web.bind.annotation.*;

// Añadimos allowCredentials y allowedHeaders para que sea más flexible en desarrollo
@CrossOrigin(
    origins = "http://localhost:5173", 
    allowedHeaders = "*", 
    allowCredentials = "true"
)
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @GetMapping("/test")
    public String test() {
        return "ms-usuarios funcionando 🚀";
    }
}