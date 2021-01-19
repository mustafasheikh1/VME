import React, { useEffect, useState } from "react";
import userIcon from "../images/userIcon.png";
import API from '../services/api';

const api = new API();

const Profile = (props) => {
  const [user, setUser] = useState(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( async () => {
    let usr = await api.getProfile();
    setUser(usr);
    console.log(usr)
  },[])

  return (
    <React.Fragment>
      <h1 style={{ paddingLeft: "30px" }}>
        <strong>Profile </strong>
      </h1>

      <div className="data" style={{ paddingTop: "10px" }}>
        <div className="row">
          <div className="col-sm-3" style={{ paddingLeft: "50px" }}>
            <img
              src={ user?.profile_picture ? user?.profile_picture : userIcon}
              alt=""
              style={{
                width: "150px",
                paddingTop: "130px",
              }}
            />
            <h2
              style={{
                paddingTop: "10px",
                paddingRight: "70px",
                fontSize: "23px",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <strong>{user?.firstname} {user?.lastname}</strong>
            </h2>
          </div>
          <div className="col-sm-8">
            <table className="table">
              <tbody style={{ fontSize: "20px" }}>
                <tr>
                  <td>
                    <h3 style={{ fontSize: "23px" }}>Name:</h3>
                    <p>{user?.firstname} {user?.lastname}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3 style={{ fontSize: "23px" }}>Username:</h3>
                    <p>{user?.user?.username}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3 style={{ fontSize: "23px" }}>Email:</h3>
                    <p>{user?.user?.email}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3 style={{ fontSize: "23px" }}>User Type:</h3>
                    <p>User</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <button
        className="btn btn-success"
        style={{ marginBottom: "50px", marginLeft: "300px" }}
        onClick={() => props.history.push("/passwordChange")}
      >
        Change Password
      </button> */}
    </React.Fragment>
  );
};

export default Profile;
