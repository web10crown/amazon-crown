const publicRequest =
    process.env.NODE_ENV === 'production' ? "https://apiamazon.vercel.app" : "http://localhost:5000";

export { publicRequest };
