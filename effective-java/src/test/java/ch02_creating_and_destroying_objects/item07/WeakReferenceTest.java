package ch02_creating_and_destroying_objects.item07;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Map;
import java.util.Objects;
import java.util.WeakHashMap;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("약한 참조 테스트")
public class WeakReferenceTest {

    @Test
    @DisplayName("WeakHashMap은 키가 참조되는 동안만 엔트리가 유효하다")
    void weakHashMap() {
        // given
        final Map<Fruit, String> weakMap = new WeakHashMap<>();
        Fruit fruitKey = new Fruit("apple");

        // when
        weakMap.put(fruitKey, "test");
        fruitKey = null;

        System.gc();

        // then
        assertThat(weakMap.keySet()).isEmpty();
    }

    private static class Fruit {
        private final String name;

        public Fruit(String name) {
            this.name = name;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (o == null || getClass() != o.getClass()) {
                return false;
            }
            Fruit fruit = (Fruit) o;
            return Objects.equals(name, fruit.name);
        }

        @Override
        public int hashCode() {
            return Objects.hash(name);
        }
    }
}
