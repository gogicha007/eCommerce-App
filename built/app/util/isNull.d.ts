export default function isNullable(value: unknown): value is null | undefined;
export declare function notNullable<T>(value: T): value is NonNullable<T>;
