function delayedResponseWithCallback(callback: Function) {
    function delayedAfterTimeout() {
        console.log('delayedAfterTimeout');
        callback();
    }
    setTimeout(delayedAfterTimeout, 1000);
}

export function callDelayedAndWait() {
    function afterWait() {
        console.log('afterWait');
    }
    console.log('calling delayedResponseWithCallback');
    delayedResponseWithCallback(afterWait);
    console.log('after calling delayedResponseWithCallback');
}

function fnDelayedPromise(
    resolve: (str: string) => void,
    reject: (msg: string) => void,
) {
    function afterTimeout() {
        resolve('result');
    }
    setTimeout(afterTimeout, 1000);
}

export function delayedResponsePromise(): Promise<string> {
    return new Promise<string>(fnDelayedPromise)
}

export function errorPromise(): Promise<string> {
    return new Promise<string>(
(
            resolve: (val: string) => void,
            reject: (msg: string) => void,
        ) => {
                reject('에러 발생!');
        }
    )
}