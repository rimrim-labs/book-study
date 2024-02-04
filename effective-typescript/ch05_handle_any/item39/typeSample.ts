/**
 * 객체 형태 매개변수
 */
function containKeys(obj: {[key: string]: any}, searchKey: string) {
    for (const key in obj) {
        if (key === searchKey) return true
    }
    return false
}

function containKeys_withObject(obj: object, searchKey: string) {
    for (const key in obj) {
        if (key === searchKey) return true
    }
    return false
}

function containKeys_withAllObject(obj: {}, searchKey: string) {
    for (const key in obj) {
        if (key === searchKey) return true
    }
    return false
}

containKeys_withAllObject({ a: 'hi'}, 'hi')