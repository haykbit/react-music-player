import axios from "axios";

export const uploadSongs = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.REACT_APP_CLOUDINARY_SONGS_PRESET
  );
  formData.append("resource_type", "video");
  formData.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
  const songs = await axios.post(
    process.env.REACT_APP_CLOUDINARY_SONGS_API,
    formData
  );
  console.log(songs, "RESPONSE");
  return songs.data;
};

export const uploadImages = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.REACT_APP_CLOUDINARY_IMAGES_PRESET
  );
  formData.append("resource_type", "image");
  formData.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
  const images = await axios.post(
    process.env.REACT_APP_CLOUDINARY_IMAGES_API,
    formData
  );
  return images.data;
};
