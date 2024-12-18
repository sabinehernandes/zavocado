package zavocado.backend.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "avocados")
public class Avocado {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "avocados_id")
    private String id;

    private String name;

    private double price;

    private String description;

    @Column(name = "image")
    private String image;

    public Avocado(String id, String name, double price, String description, String image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    public Avocado(){}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Avocado avocado)) return false;
        return price == avocado.price && Objects.equals(id, avocado.id) && Objects.equals(name, avocado.name) && Objects.equals(description, avocado.description) && Objects.deepEquals(image, avocado.image);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, price, description, image);
    }
}
