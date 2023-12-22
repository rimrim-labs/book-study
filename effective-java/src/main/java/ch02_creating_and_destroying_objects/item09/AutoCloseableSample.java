package ch02_creating_and_destroying_objects.item09;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class AutoCloseableSample implements AutoCloseable {

    @Override
    public void close() {
      log.info("instance closed");
    }
}
