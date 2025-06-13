import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // my-limit-key can be replaced by userId , but we dont have auth here so no use
    const { success } = await ratelimit.limit("my-limit-key");

    if (!success)
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later!!" });

    next();
  } catch (error) {
    console.log("Rate limit error", error)
    next(error)
  }
};

export default rateLimiter;
