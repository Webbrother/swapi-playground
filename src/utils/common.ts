export const noop = () => {};

export const searchParamsToObject = (params: URLSearchParams) => Object.fromEntries(params.entries());
