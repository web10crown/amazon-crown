const publicRequest =
    process.env.NODE_ENV === 'production' ? "https://amazon-crown.netlify.app" : "http://localhost:3000";

export { publicRequest };
