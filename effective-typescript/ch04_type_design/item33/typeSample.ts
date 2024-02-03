/**
 * keyof
 */
type AlbumType = 'studio' | 'live'

const album = {
    name: 'album',
    type: 'studio' as AlbumType,
    releasedAt: new Date()
}

function pick<T>(records: T[], key: keyof T) {
    return records.map(r => r[key])
}

function pickWithDetailReturnType<T, K extends keyof T>(records: T[], key: K) {
    return records.map(r => r[key])
}

// 반환 타입 - (string | Date)[]
pick([album], 'name')

// 반환 타입 - string[]
pickWithDetailReturnType([album], 'name')
