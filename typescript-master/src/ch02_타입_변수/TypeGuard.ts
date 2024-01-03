type StringOrNumber = string | number;

const UserTypeGuard = function(arg: StringOrNumber): arg is string {
    return typeof arg === 'string';
}

export type {
    StringOrNumber
}

export {
    UserTypeGuard
}