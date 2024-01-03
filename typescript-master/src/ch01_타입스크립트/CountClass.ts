/**
 * 생성될 때의 환경을 기억하는 클로저를 선언한다.
 */

class CountClass {
    private _count: number;

    constructor() {
        this._count = 0;
    }

    countUp() {
        this._count++;
    }

    getCount() {
        return this._count;
    }
}

export {}