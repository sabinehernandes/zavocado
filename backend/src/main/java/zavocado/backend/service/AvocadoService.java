package zavocado.backend.service;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import zavocado.backend.model.Avocado;
import zavocado.backend.model.AvocadoDbRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AvocadoService {

    private final AvocadoDbRepository repository;

    public AvocadoService(AvocadoDbRepository repository) {
        this.repository = repository;
    }

    public Optional<Avocado> findById(String id) {
        return repository.findById(id);
    }

    public List<Avocado> findAll() {
        return repository.findAll();
    }

    @Transactional
    public Avocado save(Avocado avocado) {
        return repository.save(avocado);
    }

    public void deleteById(String id) throws Exception {
        if (!repository.existsById(id)) {
            throw new Exception("Avocado not found. Id: " + id);
        }
        repository.deleteById(id);
    }
}
