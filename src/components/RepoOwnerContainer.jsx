import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../redux/actionCreators/userActionCreators";

const RepoOwnerContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (match && match.params && match.params.username) {
      const username = match.params.username;
      dispatch(loadUser(username));
    }
  }, [dispatch, match]);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        padding: "40px 0",
        width: "80%",
        margin: "auto",
      }}
    >
      <div>
        <img
          src={user && user.avatar_url ? user.avatar_url : ""}
          alt="avatar"
          width="180px"
          height="180px"
        />
        {user && user.name && (
          <p
            style={{
              padding: "4px",
              color: "rgb(222, 169, 22)",
              fontWeight: "bold",
              maxWidth:"180px"
            }}
          >
            @{user.name}
          </p>
        )}
      </div>
      <div style={{ marginLeft: "40px" }}>
        {Object.keys(user || {}).map((key) =>
          ["avatar_url", "name"].includes(key) ? null : (
            <div key={key} style={{ fontSize: "18px", padding:"4px 0" }}>
              <span style={{ color: "rgb(81, 163, 173)", fontWeight: "bold" }}>
                {key + ": "}
              </span>
              <span>{user[key]}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RepoOwnerContainer;
