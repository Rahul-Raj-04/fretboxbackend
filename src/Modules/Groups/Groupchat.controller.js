import Chat from "./Groupschat.model.js";


export const createGroupChat = async (req, res) => {
      try {
            const { members, groupName, groupImage } = req.body;

            if (!members || members.length < 2) {
                  return res.status(400).json({ error: "At least two members required for a group chat" });
            }

            const creatorId = req.user._id;
            if (!members.includes(creatorId)) {
                  members.push(creatorId);
            }
            const newChat = new Chat({
                  members,
                  isGroup: true,
                  groupName,
                  groupImage,
            });

            await newChat.save();
            res.status(201).json(newChat);
      } catch (error) {
            console.log("Error in createGroupChat: ", error.message);
            res.status(500).json({ error: "Internal server error" });
      }
};

export const getGroupChats = async (req, res) => {
      try {
            const loggedInUserId = req.user._id;

            // Fetch only groups where logged-in user is a member
            const groups = await Chat.find({
                  isGroup: true,
                  members: loggedInUserId  // Filter groups where the user is a member
            }).populate("members", "name email");

            res.status(200).json(groups);
      } catch (error) {
            console.log("Error in getGroupChats: ", error.message);
            res.status(500).json({ error: "Internal server error" });
      }
};

