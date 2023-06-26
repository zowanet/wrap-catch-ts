export default function wrapCatchSync<
	T extends (
		...args: Array<any>
	) => any,
>(
	callback: T,
): (
	...args: Parameters<T>
) => (
	| ReturnType<T>
	| Error
) {
	if (typeof callback !== 'function') {
		throw new Error('wrapCatchSync(): Missing or invalid argument \'callback\'; expected function');
	} else {
		return (
			...args: Parameters<T>
		): (
			| ReturnType<T>
			| Error
		) => {
			try {
				return callback(...args);
			} catch (error: unknown) {
				return (
					error instanceof Error
					? error
					: new Error(String(error))
				);
			}
		};
	}
}
