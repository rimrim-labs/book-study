package ch02_creating_and_destroying_objects.item07;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("StackSample 테스트")
class StackSampleTest {

    @Test
    @DisplayName("사용이 끝난 참조를 해제하지 않으면 메모리 누수의 위험이 있다.")
    void memoryLeak() {
        // given
        final StackSample<Integer> stackSample = new StackSample<>();

        // when & then
        assertThrows(OutOfMemoryError.class, () -> {
            for (int i = 0; ; i++) {
                stackSample.push(Integer.valueOf(i));
            }
        });
    }
}
