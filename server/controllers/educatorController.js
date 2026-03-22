import { clerkClient, getAuth } from '@clerk/express';

//update role to educator
export const updateRoleToEducator = async (req, res) => {
  try {
    const { userId } = getAuth(req);

    

    if (!userId) {
      return res.json({
        success: false,
        message: 'Unauthorized: A valid User ID is required.',
      });
    }

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: 'educator',
      },
    });
    res.json({ success: true, message: 'You can publish a course now' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
