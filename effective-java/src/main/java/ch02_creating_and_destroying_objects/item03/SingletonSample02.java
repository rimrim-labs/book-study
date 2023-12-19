package ch02_creating_and_destroying_objects.item03;

public class SingletonSample02 {

    private static final SingletonSample02 INSTANCE = new SingletonSample02();

    private SingletonSample02() {}

    public static SingletonSample02 getInstance() {
        return INSTANCE;
    }
}
