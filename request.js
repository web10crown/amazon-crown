const publicRequest =
    process.env.NODE_ENV === 'production' ? "https://amazon-netlify.vercel.app" : "http://localhost:3000";

export { publicRequest };
