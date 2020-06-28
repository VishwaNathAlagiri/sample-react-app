import React from "react";
import Drawer from "../Components/drawer.js";
import * as Mui from "@material-ui/core";
import CommonServices from "../services/CommonServices.js";
import {
  primaryColor,
  errorColor,
  secondaryColor,
} from "../_config/themes/themesUtility.js";
import "regenerator-runtime";

export default function Home() {
  const [userID, setUserID] = React.useState("");
  const [error, setError] = React.useState(true);
  const [isLoginFailed, loginFailed] = React.useState(false);
  const [userData, setUserData] = React.useState({
    title: "",
    userName: "",
    userNo: "",
    mainTabContent: [],
    subTabContent: [],
  });

  const getData = async () => {
    let response = await CommonServices.getUserDetails(userID);

    if (response.status === 404) {
      loginFailed(true);
      setError(true);
    } else {
      setError(false);
      setUserData(response.data);
    }
  };

  return (
    <div>
      {!isLoginFailed && (
        <Mui.Dialog open={error}>
          <Mui.DialogTitle>Login</Mui.DialogTitle>
          <Mui.DialogContent>
            <Mui.Grid container spacing={1} alignItems="flex-end">
              <Mui.Grid item>
                <Mui.TextField
                  autoFocus
                  margin="dense"
                  label="Enter User ID"
                  fullWidth
                  value={userID}
                  onChange={(e) => setUserID(e.target.value)}
                  style={{ color: primaryColor }}
                />
              </Mui.Grid>
              <Mui.Grid item>
                <Mui.IconButton size="large" onClick={getData} disabled={!Boolean(userID.length)}>
                  <Mui.Icon style={{ color: primaryColor }} >search</Mui.Icon>
                </Mui.IconButton>
              </Mui.Grid>
            </Mui.Grid>
          </Mui.DialogContent>
        </Mui.Dialog>
      )}

      {isLoginFailed && (
        <Mui.Dialog open={error}>
          <Mui.DialogTitle>
            Login Failed!
            <Mui.Icon style={{ color: errorColor }}>error</Mui.Icon>
          </Mui.DialogTitle>
          <Mui.DialogContent>
            User ID :{userID} does not exists
            <Mui.Typography align="right">
              <Mui.Button
                variant="outlined"
                size="small"
                onClick={()=>{loginFailed(false)}}
                style={{ color: secondaryColor, textTransform: "capitalize" }}
              >
                Try Again
              </Mui.Button>
            </Mui.Typography>
          </Mui.DialogContent>
        </Mui.Dialog>
      )}

      {!error && (
        <div>
          <Drawer
            props={{
              title: userData.title,
              userName: userData.userName,
              userID: userData.userNo,
              mainTabContent: userData.mainTabContent,
              subTabContent: userData.subTabContent,
            }}
          />
        </div>
      )}
    </div>
  );
}
