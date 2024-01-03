/**
 * 메소드 오버로드 시그니처를 선언한다.
 */
function add(a: string, b: string): string;
function add(a: number, b: number): number;

/**
 * 함수 본문을 정의한다.
 */
function add(a: any, b: any): any {
    return a + b;
}

export {
    add
}