type opFunction<T, A> = (p: T) => A;
type Res<T> = T;

// eslint-disable-next-line require-jsdoc
export function pipe(...fns: opFunction<any, any>[]): Res<any> {
  return (y: any) => fns.reduce((x, f) => f(x), y);
}
