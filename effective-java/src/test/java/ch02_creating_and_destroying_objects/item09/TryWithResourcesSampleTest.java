package ch02_creating_and_destroying_objects.item09;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("try-resources 테스트")
class TryWithResourcesSampleTest {

    @Test
    @DisplayName("close에서 발생한 예외는 숨겨지고 try 블록 예외가 기록된다.")
    void closeException_suppressed() {
        // when
        final IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, this::method);

        // then
        assertThat(exception.getMessage()).isEqualTo("first exception");
    }

    @Test
    @DisplayName("getSuppressed 메서드로 숨겨진 예외 정보를 가져올 수 있다.")
    void getExceptions_usingGetSuppressed() {
        // given
        final IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, this::method);

        // when
        final Throwable[] suppressed = exception.getSuppressed();

        // then
        assertThat(suppressed).hasSize(1);
        assertThat(suppressed[0]).isInstanceOf(IllegalStateException.class);
        assertThat(suppressed[0].getMessage()).isEqualTo("second exception");
    }

    private void method() {
        try(CloseableSample sample = new CloseableSample()) {
            throw new IllegalArgumentException("first exception");
        }
    }

    private static class CloseableSample implements AutoCloseable {

        @Override
        public void close() {
            throw new IllegalStateException("second exception");
        }
    }
}
