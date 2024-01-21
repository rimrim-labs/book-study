test('래퍼 객체를 생성해 메서드를 호출한다.', () => {
    const str = 'hello'
    String.prototype.toUpperCase = () => {
        return 'hi'
    }

    expect(str.toUpperCase()).toEqual('hi')
})