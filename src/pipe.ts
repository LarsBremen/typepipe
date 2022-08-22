type opFunction<T, A> = (p: T) => A;
type Res<T> = T;

export function pipe<A, T>(
    op1: opFunction<T, A>,
) : (y: T) => Res<A>;

export function pipe<A, B, T>(
    op1: opFunction<T, A>,
    op2: opFunction<T, B>,
) : (y: T) => Res<B>;

export function pipe<A, B, C, T>(
    op1: opFunction<T, A>,
    op2: opFunction<T, B>,
    op3: opFunction<T, C>,
) : (y: T) => Res<C>;

// eslint-disable-next-line require-jsdoc
export function pipe(...fns: opFunction<any, any>[]): Res<any> {
  return (y: any) => fns.reduce((x, f) => f(x), y);
}
