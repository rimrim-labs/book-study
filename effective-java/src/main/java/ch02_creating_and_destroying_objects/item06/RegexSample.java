package ch02_creating_and_destroying_objects.item06;

import java.util.regex.Pattern;

public class RegexSample {

    private static final Pattern ROMAN = Pattern.compile(
        "^(?=.)M*(C[MD]|D?C{0,3})"
        + "(X[CL]|L?X{0,3})(I[XV]|V?I{0,3}$)"
    );

    static boolean isRomanNumeral(final String s) {
        return ROMAN.matcher(s).matches();
    }
}
