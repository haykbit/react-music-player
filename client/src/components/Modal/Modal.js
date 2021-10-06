import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import FormSchema from "./FormSchema";
import "./style/modal.scss";
import UploadIcon from "../../assets/images/icons/upload-icon.png";
import { uploadSongFile } from "../../redux/song/action";
import Input from "../Input";

const Modal = ({ show, close }) => {
  const [song, setSong] = useState("");
  const dispatch = useDispatch();

  function uploadSong(metadata) {
    dispatch(uploadSongFile(song, metadata));
  }

  return (
    <>
      {show ? (
        <div className="modal-container" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">Upload Song</div>

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
                <form onSubmit={handleSubmit}>
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
                </form>
              )}
            </Formik>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
