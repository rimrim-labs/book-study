package ch02_creating_and_destroying_objects.item03;

import static org.assertj.core.api.Assertions.assertThat;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("싱글턴 테스트")
class SingletonSample01Test {

    @Test
    @DisplayName("reflection을 사용해 private 생성자를 호출한다.")
    void reflection_callPrivateConstructor()
        throws NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        // given
        final Class<SingletonSample01> singletonSample01Class = SingletonSample01.class;
        final Constructor<SingletonSample01> constructor = singletonSample01Class.getDeclaredConstructor();
        constructor.setAccessible(true);

        // when
        final SingletonSample01 instance = constructor.newInstance();

        // then
        assertThat(instance).isNotEqualTo(SingletonSample01.INSTANCE);
    }
}
