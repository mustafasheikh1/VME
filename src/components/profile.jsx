import React from "react";
import userIcon from "../images/userIcon.png";

const Profile = (props) => {
  return (
    <React.Fragment>
      <h1>
        <strong>Profile </strong>
      </h1>

      <div className="data" style={{ paddingTop: "10px" }}>
        <div className="row">
          <div className="col-sm-3" style={{ paddingLeft: "50px" }}>
            <img
              src={userIcon}
              alt=""
              style={{
                width: "150px",
                paddingTop: "130px",
              }}
            />
          </div>
          <div className="col-sm-8">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <h3>Name:</h3>
                    <p>Usman Afzal</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Username:</h3>
                    <p>itschowdhry</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Email:</h3>
                    <p>usman_9@outlook.com</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>User Type:</h3>
                    <p>Admin</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <button
        className="btn btn-success"
        style={{ marginBottom: "50px", marginLeft: "290px" }}
        onClick={() => props.history.push("/passwordChange")}
      >
        Change Password
      </button>
    </React.Fragment>
  );
};

export default Profile;
