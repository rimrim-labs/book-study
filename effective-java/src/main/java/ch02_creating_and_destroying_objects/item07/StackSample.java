package ch02_creating_and_destroying_objects.item07;

import java.util.Arrays;
import java.util.EmptyStackException;

public class StackSample<E> {


    private E[] elements;
    private int size = 0;
    private static final int DEFAULT_INITIAL_CAPACITY = 16;

    public StackSample() {
        elements = (E[]) new Object[DEFAULT_INITIAL_CAPACITY];
    }

    public  void push(E e) {
        ensureCapacity();
        elements[size++] = e;
    }

    public E memoryLeakPop() {
        if (size == 0)
            throw new EmptyStackException();

        return elements[--size]; // 메모리 누수의 위험 있음
    }

    public E pop() {
        if (size == 0)
            throw new EmptyStackException();
        E result = elements[--size]; // 다 쓴 참조 해제
        elements[size] = null;
        return result;
    }

    /**
     * 원소를 위한 공간을 적어도 하나 확보한다.
     * 배열 크기를 늘려야 할 때마다 대략 두 배씩 늘린다.
     */
    private void ensureCapacity() {
        if (elements.length == size) {
            elements = Arrays.copyOf(elements, 2 * size + 1);
        }
    }
}
