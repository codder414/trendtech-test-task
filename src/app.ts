export function run(nums: number[]): string {
	if (nums.length < 3) {
		return nums.join();
	}

	const result: number[][] = [[nums[0]]];

	for (let i = 1; i < nums.length; i++) {
		const currentNum = nums[i];
		const lastRange = result[result.length - 1];
		const lastEl = lastRange[lastRange.length - 1];
		if (lastEl === undefined) {
			lastRange.push(currentNum);
			continue;
		}
		if (currentNum - lastEl === 1) {
			lastRange.push(currentNum);
		} else if (currentNum - lastEl > 1) {
			result.push([currentNum]);
		}
	}

	return result
		.reduce((result, range) => {
			if (range.length === 2) {
				result += `${range[0]},${range[1]},`;
			} else if (range.length > 1) {
				result += `${range[0]}-${range[range.length - 1]},`;
			} else {
				result += `${range[0]},`;
			}
			return result;
		}, '')
		.slice(0, -1);
}
