package ch03_methods_common_to_all_objects.item10;

public class CaseInsensitiveString {

    private final String s;

    public CaseInsensitiveString(String s) {
        this.s = s;
    }

    @Override
    public boolean equals(Object o) {
        if (o instanceof CaseInsensitiveString)
            return s.equalsIgnoreCase(((CaseInsensitiveString) o).s);

        if (o instanceof String)
            return s.equalsIgnoreCase((String) o);

        return false;
    }
}
