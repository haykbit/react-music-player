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
  console.log(...formData, "DATA TO UPLOAD");
  try {
    const songs = await axios.post(process.env.REACT_APP_CLOUDINARY_SONGS_API, {
      ...formData,
    });
    console.log(songs, "RESPONSE");
  } catch (err) {
    console.log(err.response.data);
  }

  //TODO check what songs includes and then return the data we need
  //^^   return songs ??? or songs.data;
};

export const uploadImages = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.REACT_APP_CLOUDINARY_IMAGES_PRESET
  );
  formData.append("resource_type", "image");
  const images = await axios.post(process.env.CLOUDINARY_IMAGE_URL, formData);
  //TODO check images variable to get secure_url and return it
  return;
};
