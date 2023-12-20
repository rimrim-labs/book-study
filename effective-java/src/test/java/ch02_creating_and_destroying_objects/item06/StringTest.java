package ch02_creating_and_destroying_objects.item06;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.util.StopWatch;

@DisplayName("스트링 객체 생성 테스트")
public class StringTest {

    private static final int ITER_COUNT = 100_000;

    @Test
    @DisplayName("매번 새로운 스트링을 생성한다.")
    void always_create_new_string() {
        // given
        final StopWatch watch = new StopWatch();
        watch.start();

        // when
        for (int i = 0; i < ITER_COUNT; i++) {
            final String hello = new String("hello");
        }

        watch.stop();

        // then
        long totalTimeNanos = watch.getTotalTimeNanos();
        System.out.println("elapsed time " + totalTimeNanos);

        assertThat(totalTimeNanos).isGreaterThan(2_000_000);
    }

    @Test
    @DisplayName("문자열 풀에 캐싱된 스트링을 재사용한다.")
    void reuse_cached_string() {
        // given
        final StopWatch watch = new StopWatch();
        watch.start();

        // when
        for (int i = 0; i < ITER_COUNT; i++) {
            final String hello = "hello";
        }

        watch.stop();

        // then
        long totalTimeNanos = watch.getTotalTimeNanos();
        System.out.println("elapsed time " + totalTimeNanos);

        assertThat(totalTimeNanos).isLessThan(1_000_000);
    }
}
