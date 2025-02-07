export function WaitUntil(fn: () => boolean) {
	return new Promise<void>(res => {
		const timerId = setInterval(() => {
			if(!fn())
				return;
			clearInterval(timerId);
			res();
		});
	});
}