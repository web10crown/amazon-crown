const publicRequest =
    process.env.NODE_ENV === 'production' ? "https://apiamazon.vercel.app/" : "http://localhost:3000";

export { publicRequest };
