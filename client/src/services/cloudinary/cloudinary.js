export const uploadSongs = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset"
    //TODO create variable in env
    // process.env_CLOUDINARY_PRESET_SONGS
  );
  formData.append("resource_type", "video");
  const songs = await axios.post(formData);
  //TODO check what songs includes and then return the data we need
  //^^   return songs ??? or songs.data;
};

export const uploadImages = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset"
    //TODO create variable in env
    // process.env.CLOUDINARY_PRESET_IMAGES
  );
  formData.append("resource_type", "image");
  const images = await axios.post(process.env.CLOUDINARY_IMAGE_URL, formData);
  //TODO check images variable to get secure_url and return it
  return;
};
