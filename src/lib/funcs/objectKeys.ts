const objectKeys = Object.keys as <T>(object: T) => Extract<keyof T, string>[];

export default objectKeys;
