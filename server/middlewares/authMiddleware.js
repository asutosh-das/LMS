import { clerkClient, getAuth } from "@clerk/express";

// Middleware (protect educator route)

export const protectEducator = async (req, res, next) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.json({
        success: false,
        message: "A valid session or User ID is required.",
      });
    }

    const response = await clerkClient.users.getUser(userId);

    if (response.publicMetadata.role !== "educator") {
      return res.json({ success: false, message: "Unauthorized Access!" });
    }
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
