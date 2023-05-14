package br.ailtonbsj.apifortest.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import br.ailtonbsj.apifortest.DTO.ProductDTO;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/product")
public class ProductController {
    List<ProductDTO> list = new ArrayList<>();

    @PostMapping
    public String save(@RequestBody ProductDTO product) {
        product.setId(UUID.randomUUID());
        list.add(product);
        return Integer.toString(list.size());
    }

    @GetMapping
    public String listAll() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsString(list);
        } catch (JsonProcessingException e) {
            throw new ResponseStatusException(
                HttpStatus.INTERNAL_SERVER_ERROR, "Error");
        }
    }

    @DeleteMapping("{id}")
    public void remove(@PathVariable UUID id) {
        list.removeIf(entity -> entity.getId().equals(id));
    }
}
