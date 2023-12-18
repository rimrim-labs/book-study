package ch02_creating_and_destroying_objects.item01;

@FunctionalInterface
public interface FactoryMethodSample {

    static FactoryMethodSample getInstance(final int value) {
        return () -> value;
    }

    int getValue();
}
