import {callDelayedAndWait, delayedResponsePromise, errorPromise} from "../../src/ch04_제네릭_비동기/AsyncSample";

describe('비동기 콜백 테스트', () => {
    test('콜백을 호출한다.', () => {
        callDelayedAndWait();
    })

    test('프로미스를 사용한다.', async () => {
        // when
        delayedResponsePromise()
            .then(() => { console.log('delayedResponsePromise.then'); })

        // then
        const result = await delayedResponsePromise();
        expect(result).toEqual('result');
    });

    test('프로미스 에러를 처리한다.', async () => {
        // when
        errorPromise()
            .catch((err) => {
                console.log(`exception thrown: ${err}`);
            });

        // then
        try {
            await errorPromise();
        } catch (err) {
            if (err instanceof Error) {
                // eslint-disable-next-line jest/no-conditional-expect
                expect(err.message).toEqual('에러 발생!');
            }
        }
    })
})