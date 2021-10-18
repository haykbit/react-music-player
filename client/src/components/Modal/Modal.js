import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import FormSchema from "./FormSchema";
import "./style/modal.scss";
import UploadIcon from "../../assets/images/icons/upload-icon.png";
import { uploadSongFile } from "../../redux/song/action";
import Input from "../Input";
import SongUploadIcon from "../../assets/images/icons/songImageUpload.png";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

const Modal = ({ show, close, userInfo }) => {
  const [song, setSong] = useState("");
  const [songImage, setSongImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  function uploadSong(metadata) {
    dispatch(uploadSongFile(song, metadata, image));
  }

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      setImage(e.target.files[0]);
      reader.onload = function (e) {
        setSongImage(e.target.result);
        setIsUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  useLockBodyScroll();
  return (
    <>
      {show ? (
        <div className="modal-container" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <Formik
              onSubmit={(values) => {
                uploadSong(values);
                close();
              }}
              initialValues={{
                title: "",
                artist: "",
                album: "",
                genre: "",
                songUploadInput: null,
                private: true,
              }}
              validationSchema={FormSchema}
            >
              {({
                errors,
                values,
                touched,
                isValidating,
                isValid,
                handleSubmit,
                handleChange,
                handleBlur,
              }) => (
                <div>
                  <div className="modal-title">Upload Song</div>
                  <form onSubmit={handleSubmit} className="form-box">
                    <div className="left-side-modal">
                      <div className="modal-input-box">
                        <Input
                          className="register-inputs"
                          name="title"
                          label=""
                          autoComplete="on"
                          placeholder="Title"
                          type="text"
                          value={values.title}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          hasErrorMessage={touched.title}
                          errorMessage={errors.title}
                        />
                      </div>
                      <div className="modal-input-box">
                        <Input
                          className="register-inputs"
                          name="artist"
                          label=""
                          autoComplete="on"
                          placeholder="Artist"
                          type="text"
                          value={values.artist}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          hasErrorMessage={touched.artist}
                          errorMessage={errors.artist}
                        />
                      </div>
                      <div className="modal-input-box">
                        <Input
                          className="register-inputs"
                          name="album"
                          label=""
                          autoComplete="on"
                          placeholder="Album"
                          type="text"
                          value={values.album}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          hasErrorMessage={touched.album}
                          errorMessage={errors.album}
                        />
                      </div>
                      <div className="modal-input-box">
                        <select
                          name="genre"
                          className="register-inputs"
                          autoComplete="on"
                          value={values.genre}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          hasErrorMessage={touched.genre}
                          errorMessage={errors.genre}
                        >
                          <option value="">Select a genre</option>
                          <option value="Country">Country</option>
                          <option value="Electronic dance music (EDM)">
                            Electronic dance music (EDM)
                          </option>
                          <option value="Hip-hop">Hip-hop</option>
                          <option value="Indie rock">Indie rock</option>
                          <option value="Jazz">Jazz</option>
                          <option value="K-pop">K-pop</option>
                          <option value="Metal">Metal</option>
                          <option value="Oldies">Oldies</option>
                          <option value="Pop">Pop</option>
                          <option value="Rap">Rap</option>
                          <option value="Rhythm & blues (R&B)">
                            Rhythm & blues (R&B)
                          </option>
                          <option value="Rock">Rock</option>
                          <option value="Techno">Techno</option>
                          <option value="Folk">Folk</option>
                          <option value="Ska">Ska</option>
                          <option value="Reggae">Reggae</option>
                          <option value="Punk">Punk</option>
                        </select>
                      </div>
                      {userInfo.artist ? (
                        <div className="modal-input-box">
                          <select
                            name="private"
                            className="register-inputs"
                            autoComplete="on"
                            value={values.private}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasErrorMessage={touched.private}
                            errorMessage={errors.private}
                          >
                            <option value="true">Private</option>
                            <option value="false">Public</option>
                          </select>
                        </div>
                      ) : null}

                      <div className="modal-image-box">
                        <label
                          className="upload-icon"
                          forHtml="songUploadInput"
                          style={{
                            backgroundImage: `url(${UploadIcon})`,
                          }}
                        >
                          <input
                            name="songUploadInput"
                            onChange={(e) => {
                              setSong(e.target.files[0]);
                            }}
                            type="file"
                            required
                            //TODO create function to upload more than one song at a time
                          ></input>
                        </label>
                      </div>
                      <div className="modal-button-box">
                        <button className="modal-close" onClick={() => close()}>
                          Cancel
                        </button>
                        <button className="submit" type="submit" submitButton>
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="right-side-modal">
                      <div className="upload-image-box">
                        {!isUploaded ? (
                          <>
                            <label htmlFor="upload-input">
                              <p>Upload song image</p>
                              <img
                                className="song-image-upload"
                                alt=""
                                src={SongUploadIcon}
                              />{" "}
                            </label>

                            <input
                              id="upload-input"
                              className="input-upload"
                              type="file"
                              accept=".jpg, .jpeg, .png"
                              onChange={handleImageChange}
                            />
                          </>
                        ) : (
                          <div className="song-image-preview">
                            <img
                              onClick={() => {
                                setIsUploaded(false);
                                setImage(null);
                              }}
                              className="song-image-preview"
                              src={songImage}
                              alt="uploaded-img"
                              id="uploaded-image"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
