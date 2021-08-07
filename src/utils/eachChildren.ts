import { Children, cloneElement, isValidElement, ReactNode } from 'react';

export type Options = Partial<{
    maxDepth: number;
    visit: 'breadthFirst' | 'depthFirst';
}>;

type MapReturn<T, C> = C extends null | undefined
    ? C
    : Array<Exclude<T, boolean | null | undefined>>;

function _map<T, C extends ReactNode>(
    children: C | C[],
    fn: (element: ReactNode) => T,
    maxDepth: number,
    depth: number,
): MapReturn<T, C> {
    return Children.map(children, (child) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (
            isValidElement(child) &&
            child.props.children &&
            depth !== maxDepth
        ) {
            child = cloneElement(child, {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                children: _map(child.props.children, fn, maxDepth, depth + 1),
            }) as C;
        }

        return fn(child);
    }) as MapReturn<T, C>;
}

/**
 * Recursively iterates through all `children` and returns the transformed result of applying `fn` to each child.
 *
 * Recurses depth first, post-order.
 *
 * @param children - the React children.
 * @param fn - the function that will be applied to every child element.
 * @param options - {@link Options}
 *
 */
export function map<T, C extends ReactNode>(
    children: C | C[],
    fn: (element: ReactNode) => T,
    options: Omit<Options, 'visit'> = {},
): MapReturn<T, C> {
    const maxDepth = options.maxDepth ?? -1;
    return _map(children, fn, maxDepth, 0);
}
