const getBackendURL = () => (process.env.MAIN_API_URL ?? '');

export default getBackendURL;
