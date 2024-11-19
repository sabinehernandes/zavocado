package zavocado.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import zavocado.backend.model.Avocado;
import zavocado.backend.service.AvocadoService;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class AvocadoServiceTest {

    @Autowired
    private AvocadoService service;

    @Test
    public void testSave() {
        Avocado avocado = new Avocado();
        avocado.setName("Test Avocado");
        avocado.setPrice(100);
        avocado.setDescription("Test Description");
        avocado.setImage("images/test.jpg");

        Avocado savedAvocado = service.save(avocado);
        assertNotNull(savedAvocado.getId());
    }
}
