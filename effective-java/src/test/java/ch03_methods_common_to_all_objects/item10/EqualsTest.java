package ch03_methods_common_to_all_objects.item10;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.LinkedList;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("equals 메서드 테스트")
public class EqualsTest {

    @Test
    @DisplayName("equals 메서드를 제대로 구현하지 않으면 컬렉션 프레임워크는 정상 동작하지 않는다.")
    void collection_goes_wrong() {
        // given
        final LinkedList<TestClass> list = new LinkedList<>();
        list.add(new TestClass("hi"));

        // when & then
        assertThat(list.contains(new TestClass("hi"))).isFalse();
    }

    @Test
    @DisplayName("equals 메서드는 대칭성을 만족하도록 구현해야 한다.")
    void equals_symmetry() {
        // given
        final CaseInsensitiveString cstr = new CaseInsensitiveString("Hi");
        final String str = "hi";

        // when & then
        assertThat(cstr).isEqualTo(str);
        assertThat(str).isNotEqualTo(cstr);
    }

    @Test
    @DisplayName("equals 메서드는 추이성을 만족하도록 구현해야 한다.")
    void equals_transitivity() {
        // given
        final Student first = new Student(12, "test", 2345);
        final Person second = new Person(12, "test");
        final Student third = new Student(12, "test", 1234);

        // when & then
        assertThat(first.equals(second)).isTrue();
        assertThat(second.equals(third)).isTrue();
        assertThat(third.equals(first)).isFalse();
    }

    private static class TestClass {
        private String field;

        public TestClass(final String field) {
            this.field = field;
        }
    }
}
