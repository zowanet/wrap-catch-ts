export default function wrapCatchAsync<
	T extends (
		...args: Array<any>
	) => any,
>(
	callback: T,
): (
	...args: Parameters<T>
) => (
	Promise<
		| Awaited<
			ReturnType<T>
		>
		| Error
	>
) {
	if (typeof callback !== 'function') {
		throw new Error('wrapCatchAsync(): Missing or invalid argument \'callback\'; expected function');
	} else {
		return async (
			...args: Parameters<T>
		): (
			Promise<
				| Awaited<
					ReturnType<T>
				>
				| Error
			>
		) => {
			try {
				return await callback(...args);
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
