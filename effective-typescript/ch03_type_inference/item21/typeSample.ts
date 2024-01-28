/**
 * const
 */
const v = {
    x: 1
}

v.x = 3
// v.y = 3

/**
 * const 단언문
 */
const ca = {
    x: 1 as const,
    y: 2
}

const cb = {
    x: 1,
    y: 2
} as const
