import { uploadData, getUrl } from "aws-amplify/storage";

export type FolderType = "profile" | "post" | "comment";

const BASE_URL = import.meta.env.VITE_REACT_APP_STORAGE_URL;

const uploadFileToS3 = async (
  file: File,
  type: FolderType,
  userId: string,
  name?: string
) => {
  try {
    const timestamp = new Date().toISOString();
    const file_name = name ? name : file.name;
    const fileName = `${type}/${userId}/${file_name}-${timestamp}`;

    const result = await uploadData({
      path: `public/${fileName}`,
      data: file,
    }).result;

    console.log("Uploaded file to S3:", result);
    const path = result.path;

    const downloadUrl = `${BASE_URL}${path}`;

    console.log("Got file from S3:", downloadUrl);

    return downloadUrl;
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw error;
  }
};

const getFileFromS3 = async (fileCode: string) => {
  try {
    const filePath = `public/${fileCode}`;
    const url = await getUrl({
      path: filePath,
    });

    console.log("Got file from S3:", url);
    return url.url;
  } catch (error) {
    console.error("Error getting file from S3:", error);
    throw error;
  }
};

export const uploadProfileImage = async (file: File, userId: string) => {
  return uploadFileToS3(file, "profile", userId, "profile.png");
};

export const getProfileImageUrl = async (fileCode: string) => {
  return getFileFromS3(fileCode);
};


export const uploadResume = async (file: File, userId: string) => {
  return uploadFileToS3(file, "profile", userId, "resume.pdf");
}