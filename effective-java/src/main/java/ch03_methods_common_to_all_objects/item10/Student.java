package ch03_methods_common_to_all_objects.item10;

public class Student extends Person {

    private final int studentId;

    public Student(int age, String name, int studentId) {
        super(age, name);
        this.studentId = studentId;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Person))
            return false;

        if (!(o instanceof Student)) {
            return super.equals(o);
        }

        return super.equals(o) && ((Student) o).studentId == studentId;
    }
}
