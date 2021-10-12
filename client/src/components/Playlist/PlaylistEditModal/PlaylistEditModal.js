import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editSong } from "../../redux/song/action";
import { Formik } from "formik";
import FormSchema from "./FormSchema";
import "./style/songEditModal.scss";
import Input from "../Input";

const PlaylistEditModal = ({ show, close, song }) => {
  const dispatch = useDispatch();
  function updateSong(metadata) {
    dispatch(editSong(song._id, metadata));
  }

  return (
    <>
      {show ? (
        <div className="edit-modal-container" onClick={() => close()}>
          <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
            <div className="edit-modal-title">Edit Song</div>

            <Formik
              onSubmit={(values) => {
                updateSong(values);
                close();
              }}
              initialValues={{
                title: song.title,
                artist: song.artist,
                album: song.album,
                genre: song.genre,
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
                  <div className="edit-modal-input-box">
                    <Input
                      className="edit-inputs"
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
                  <div className="edit-modal-input-box">
                    <Input
                      className="edit-inputs"
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
                  <div className="edit-modal-input-box">
                    <Input
                      className="edit-inputs"
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
                  <div className="edit-modal-input-box">
                    <select
                      name="genre"
                      className="edit-inputs"
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

                  <div className="edit-modal-button-box">
                    <button
                      className="edit-modal-close"
                      onClick={() => close()}
                    >
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

export default PlaylistEditModal;
