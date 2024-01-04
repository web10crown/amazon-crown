const publicRequest =
    process.env.NODE_ENV === 'production' ? "https://amazon-crown.vercel.app" : "http://localhost:3000";

export { publicRequest };
