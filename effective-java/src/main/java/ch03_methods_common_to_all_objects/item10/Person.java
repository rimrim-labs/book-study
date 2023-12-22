package ch03_methods_common_to_all_objects.item10;

public class Person {

    private final int age;
    private final String name;

    public Person(int age, String name) {
        this.age = age;
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Person))
            return false;

        Person p = (Person) o;
        return p.age == age && p.name == name;
    }
}
