package ch02_creating_and_destroying_objects.item02;

public class BuilderSample {

    private final int id;
    private final int number;
    private final String name;
    private final String favorite;
    private final String location;

    private BuilderSample(Builder builder) {
        id = builder.id;
        number = builder.number;
        name = builder.name;;
        favorite = builder.favorite;
        location = builder.location;
    }

    public static class Builder {
        /* 필수 매개변수 */
        private final int id;
        private final String name;

        /* 선택 매개변수 초기화 */
        private int number = 0;
        private String favorite = "";
        private String location = "";

        Builder(int id, String name) {
            this.id = id;
            this.name = name;
        }

        public Builder number(int val) {
            this.number = val;
            return this;
        }

        public Builder favorite(String favorite) {
            this.favorite = favorite;
            return this;
        }

        public Builder location(String location) {
            this.location = location;
            return this;
        }

        public BuilderSample build() {
            return new BuilderSample(this);
        }
    }
}
