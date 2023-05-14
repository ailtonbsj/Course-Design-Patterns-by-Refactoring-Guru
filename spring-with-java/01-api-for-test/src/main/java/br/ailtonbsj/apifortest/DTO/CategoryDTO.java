package br.ailtonbsj.apifortest.DTO;

import java.io.Serializable;
import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CategoryDTO implements Serializable {
    UUID id;
    String name;    
}
