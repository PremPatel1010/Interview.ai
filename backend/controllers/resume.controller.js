import { parseDocx} from "../services/resumeParser.service.js";
import Resume from "../models/resume.model.js";

export const uploadResume = async (req, res) => {
  try {

    const {userId} = req.userId;
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;
    const fileType = req.file.mimetype;

    let parsedData;
    if(
      fileType ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      parsedData = await parseDocx(filePath);
    } else {
      return res.status(400).json({ error: "Unsupported file type" });
    }

    const resume = new Resume({
      userId: userId, 
      filePath,
      parsedData,
    });

    await resume.save();

    res.status(200).json({
      message: "Resume uploaded and parsed successfully",
      data: parsedData,
    });
  } catch (error) {
    console.error("Error uploading resume:", error);
    res.status(500).json({ error: "Failed to upload and parse resume" });
  }
};

export const getParsedResume = async (req, res) => {
  try {
   
    const {userId} = req.userId;

    // Fetch the most recent resume for the user
    const resume = await Resume.findOne({ userId }).sort({ createdAt: -1 });

    if (!resume) {
      return res.status(404).json({ error: "No resume found for this user" });
    }

    res.status(200).json({ data: resume.parsedData });
  } catch (error) {
    console.error("Error fetching parsed resume:", error);
    res.status(500).json({ error: "Failed to fetch parsed resume" });
  }
};
