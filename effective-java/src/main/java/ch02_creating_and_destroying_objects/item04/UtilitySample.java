package ch02_creating_and_destroying_objects.item04;

public final class UtilitySample {

    private static final String HI = "hi";

    private UtilitySample() {
        throw new AssertionError();
    }

    public static String hi() {
        return HI;
    }
}
