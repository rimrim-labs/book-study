package ch02_creating_and_destroying_objects.item05;

import java.util.function.Supplier;

public class FactoryPatternSample<T extends Resource> {

    private final T resource;

    public FactoryPatternSample(Supplier<T> factoryMethod) {
        resource = factoryMethod.get();
    }
}

class Resource {}
