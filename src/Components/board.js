/*eslint-disable*/
import React, { useEffect } from "react";
import DisplayCard from "./displayCard.js";
import CommonServices from "../services/CommonServices.js";
import * as Mui from "@material-ui/core";
import "regenerator-runtime";

export default function Board(props) {
  const [onTrack, setOnTrackData] = React.useState({});
  const [onDelayed, SetOnDelayedData] = React.useState({});
  const [onHold, setOnHoldData] = React.useState({});
  const [error, setError] = React.useState(false);

  useEffect(() => {
    getOnTrackData();
    getOnDelayedData();
    getOnHoldData();
  }, []);

  const getOnTrackData = async () => {
    let response = await CommonServices.getOnTrack(props.userID);

    if (response.status === 404) {
      setError(true);
    } else {
      setOnTrackData(response);
    }
  };
  const getOnDelayedData = async () => {
    let response = await CommonServices.getOnDelayed(props.userID);

    if (response.status === 404) {
      setError(true);
    } else {
      SetOnDelayedData(response);
    }
  };

  const getOnHoldData = async () => {
    let response = await CommonServices.getOnHold(props.userID);

    if (response.status === 404) {
      setError(true);
    } else {
      setOnHoldData(response);
    }
  };

  return (
    <div>
      <Mui.Grid container direction="row" spacing={4}>
        {/* On Track Display card */}
        {onTrack.data && (
          <Mui.Grid item xs={12} lg={4}>
            <DisplayCard props={onTrack.data} />
          </Mui.Grid>
        )}

        {onDelayed.data && (
          <Mui.Grid item xs={12} lg={4}>
            <DisplayCard props={onDelayed.data} />
          </Mui.Grid>
        )}

        {onHold.data && (
          <Mui.Grid item xs={12} lg={4}>
            <DisplayCard props={onHold.data} />
          </Mui.Grid>
        )}
      </Mui.Grid>
    </div>
  );
}
