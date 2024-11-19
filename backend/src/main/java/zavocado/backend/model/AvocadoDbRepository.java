package zavocado.backend.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AvocadoDbRepository  extends JpaRepository<Avocado, String> {
}
