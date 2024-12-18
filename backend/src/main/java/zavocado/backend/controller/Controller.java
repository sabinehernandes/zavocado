package zavocado.backend.controller;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import zavocado.backend.dto.AvocadoDto;
import zavocado.backend.model.Avocado;
import zavocado.backend.service.AvocadoService;

import java.util.List;

@RestController
@RequestMapping("${api.base-path}${api.controllers.avocados}")
public class Controller {
    private final AvocadoService service;

    public Controller(AvocadoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<AvocadoDto>> getAllAvocados() {
        List<Avocado> avocados = service.findAll();
        List<AvocadoDto> responseDto = avocados.stream()
                .map(this::mapToDto)
                .toList();
        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<AvocadoDto> createAvocado(@Valid @RequestBody AvocadoDto dto) {
        Avocado avocado = mapToEntity(dto);
        Avocado savedAvocado = service.save(avocado);
        AvocadoDto responseDto = mapToDto(savedAvocado);
        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AvocadoDto> updateAvocado(
            @PathVariable String id,
            @Valid @RequestBody AvocadoDto dto) throws Exception {
        Avocado existingAvocado = service.findById(id)
                .orElseThrow(() -> new Exception("Avocado not found. Id: " + id));

        existingAvocado.setName(dto.name());
        existingAvocado.setPrice(dto.price());
        existingAvocado.setDescription(dto.description());
        existingAvocado.setImage(dto.image());

        Avocado savedAvocado = service.save(existingAvocado);
        AvocadoDto responseDto = mapToDto(savedAvocado);
        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAvocado(@PathVariable String id) throws Exception {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    private Avocado mapToEntity(AvocadoDto dto) {
        Avocado avocado = new Avocado();
        avocado.setId(dto.id());
        avocado.setName(dto.name());
        avocado.setPrice(dto.price());
        avocado.setDescription(dto.description());
        String correctImage = extractFileName(dto.image());
        avocado.setImage(correctImage);
        return avocado;
    }

    private String extractFileName(String imagePath) {
        if (imagePath == null) return null;
        return imagePath.replaceAll("^.*[\\\\/]", "");
    }

    private AvocadoDto mapToDto(Avocado avocado) {
        return new AvocadoDto(
                avocado.getId(),
                avocado.getName(),
                avocado.getPrice(),
                avocado.getDescription(),
                avocado.getImage()
        );
    }
}
