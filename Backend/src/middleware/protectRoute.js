import { requireAuth } from "@clerk/express";
import User from "../models/user.js";

export const protectRoute = [
  requireAuth(),

  async (req, res, next) => {
    try {
      const { userId, sessionClaims } = req.auth();

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const user = await User.findOneAndUpdate(
        { clerkId: userId }, // find by clerkId
        {
          $setOnInsert: {
            clerkId: userId,
            name: sessionClaims?.name || "User",
            email:
              sessionClaims?.email ||
              `${userId}_${Date.now()}@noemail.com`, 
            profileImage: sessionClaims?.image || "",
          },
        },
        {
          new: true,
          upsert: true,
        }
      );

      req.user = user;
      next();

    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];