/**
 * fetch 메서드는 거절 프로미스를 응답하지 않는다.
 */
const checkedFetch: typeof fetch = async (input, init) => {
    const response = await fetch(input, init)
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`)
    }
    return response
}

export {
    checkedFetch
}