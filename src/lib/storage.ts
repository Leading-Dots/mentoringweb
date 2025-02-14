import { uploadData, getUrl } from "aws-amplify/storage";

export type FolderType = "profile" | "post" | "comment";

const BASE_URL = import.meta.env.VITE_REACT_APP_STORAGE_URL;

const uploadFileToS3 = async (file: File, type: FolderType, userId: string) => {
  try {
    const fileName = `${type}/${userId}${file.name}`;

    const result = await uploadData({
      path: `public/${fileName}`,
      data: file,
    }).result;

    console.log("Uploaded file to S3:", result);
    const path = result.path;

    const { url } = await getUrl({
      path,
    });

    console.log("Got file from S3:", url);

    return url.toString().split("?")[0];
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
  return uploadFileToS3(file, "profile", userId);
};

export const getProfileImageUrl = async (fileCode: string) => {
  return getFileFromS3(fileCode);
};
