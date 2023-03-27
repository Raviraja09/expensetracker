import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile, updateProfile } from "./Action";

const Profile = ({ token, userId }) => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const photoUrlRef = useRef();

  useEffect(() => {
    async function fetchProfile() {
      const response = await getUserProfile(token, userId);
    }
    fetchProfile();
  }, [token, userId]);

  function cancelHandler(e) {
    e.preventDefault();
    navigate("/welcome");
  }

  function updateProfileHandler(e) {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredUrl = photoUrlRef.current.value;
    const userProfile = {
      idToken: token,
      displayName: enteredName,
      photoUrl: enteredUrl,
    };
    dispatch(
      updateProfile({
        displayName: enteredName,
        photoUrl: enteredUrl,
      })
    );
    updateProfile(userProfile);
  }

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Contact Details</h3>
        <button className="btn btn-secondary" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
      <form onSubmit={updateProfileHandler}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            ref={nameRef}
            defaultValue={displayName}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photoUrl">Profile Photo URL:</label>
          <input
            type="text"
            className="form-control"
            id="photoUrl"
            ref={photoUrlRef}
            defaultValue={photoUrl}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </React.Fragment>
  );
};

export default Profile;
