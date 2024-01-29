const liveHost = "URL";
const localHost = "URL";

export const isDevelopment = process.env.NODE_ENV === "development";

//export const host = isDevelopment ? localHost : liveHost;
export const host = liveHost;
