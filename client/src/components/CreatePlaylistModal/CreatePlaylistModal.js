import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import FormSchema from "./FormSchema";
import "./style/createPlaylistModal.scss";
import UploadIcon from "../../assets/images/icons/upload-icon.png";
import { createNewPlaylist } from "../../redux/playlist/action";
import Input from "../Input";
import Textarea from "../Input/Textarea";

const Modal = ({ show, close }) => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  function createPlaylist(playlistData) {
    dispatch(createNewPlaylist(playlistData, image));
  }

  return (
    <>
      {show ? (
        <div className="modal-container playlist" onClick={() => close()}>
          <div className="modal playlist" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">New Playlist</div>

            <Formik
              onSubmit={(values) => {
                createPlaylist(values);
                close();
              }}
              initialValues={{
                title: "",
                description: "",
                genre: "",
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
                  <div className="modal-textarea-box">
                    <Textarea
                      className="textarea-input"
                      name="description"
                      label=""
                      autoComplete="on"
                      placeholder="Description"
                      type="text"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      hasErrorMessage={touched.description}
                      errorMessage={errors.description}
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
                  <div className="modal-image-box">
                    <label
                      className="upload-icon"
                      forHtml="songUploadInput"
                      style={{
                        backgroundImage: `url(${UploadIcon})`,
                      }}
                    >
                      <input
                        name="image"
                        onChange={(e) => {
                          setImage(e.target.files[0]);
                        }}
                        type="file"
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
