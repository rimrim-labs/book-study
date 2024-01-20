/**
 * 구조적 타이핑으로 목 객체 생성하기.
 */
interface MySqlDB<T>{
    runQuery: (sql: string) => T[]
}

function getFruits(db: MySqlDB<string>) {
    return db.runQuery("SELECT * FROM fruits")
}

test('getFruits 테스트', () => {
    const fruits = getFruits({
        runQuery: (sql: string) => ['apple', 'pear']
    })

    expect(fruits).toEqual(['apple', 'pear'])
})

/**
 * 클래스에도 구조적 타이핑이 적용된다.
 */
class Author {
    constructor(public first: string, public second: string) {}
}

test('구조적 타이핑 테스트', () => {
    const author = new Author('a', 'b')
    const notAuthorInstance: Author = {
        first: 'q',
        second: 'w'
    }

    expect(author).toBeInstanceOf(Author)
    expect(notAuthorInstance).not.toBeInstanceOf(Author)
})