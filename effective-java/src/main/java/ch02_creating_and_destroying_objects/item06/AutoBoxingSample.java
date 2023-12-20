package ch02_creating_and_destroying_objects.item06;

public final class AutoBoxingSample {

    private AutoBoxingSample() {}

    private static long sum() {
        Long sum = 0L;
        for (int i = 0; i < Integer.MAX_VALUE; i++) {
            // 오토박싱
            sum += i;
        }
        return sum;
    }
}
