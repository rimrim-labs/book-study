package ch02_creating_and_destroying_objects.item03;

public class SingletonSample01 {

    public static final SingletonSample01 INSTANCE = new SingletonSample01();

    private SingletonSample01() {}
}
