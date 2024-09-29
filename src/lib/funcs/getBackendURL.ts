const getBackendURL = () => (process.env["NEXT_PUBLIC_MAIN_API_URL"] ?? '');

export default getBackendURL;
