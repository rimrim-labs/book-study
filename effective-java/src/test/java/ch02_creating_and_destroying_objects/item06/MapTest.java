package ch02_creating_and_destroying_objects.item06;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Map 객체 테스트")
public class MapTest {

    @Test
    @DisplayName("Map.keySet은 매번 동일한 객체를 반환한다")
    void keySet_always_equals() {
        // given
        final Map<String, Long> map = new HashMap<>();
        map.put("hi", 1L);
        map.put("byte", 2L);

        // when
        final Set<String> keySet = map.keySet();
        map.put("good", 3L);

        // then
        assertThat(keySet).isSameAs(map.keySet());
    }

    @Test
    @DisplayName("Map.keySet을 수정하면 모든 keySet이 영향을 받는다")
    void keySet_affects_toAll() {
        // given
        final Map<String, Long> map = new HashMap<>();
        map.put("hi", 1L);
        map.put("byte", 2L);

        // when
        final Set<String> keySet = map.keySet();
        keySet.clear();

        // then
        assertThat(map.keySet()).isEmpty();
    }
}
