import React from "react";
import * as Mui from "@material-ui/core";
import TabPanel from "@material-ui/lab/TabPanel";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import Board from "./board.js";
import { primaryColor } from "../_config/themes/themesUtility.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textColor: {
    color: "#000000",
  },
  textCapitalize: {
    textTransform: "capitalize",
  },
}));

export default function Tab(props) {
  console.log(props.props.mainTabContent)
  const classes = useStyles();
  const [mainTabvalue, setValue] = React.useState("1");
  const handleChange = (event, newValue) => setValue(newValue);
  const [subTabvalue, setSubValue] = React.useState("3");
  const handleSubChange = (event, newValue) => setSubValue(newValue);

  return (
    <TabContext value={mainTabvalue}>
      <Mui.AppBar
        position="static"
        style={{ background: "#FFFFFF" }}
        elevation={0}
      >
        <TabList onChange={handleChange}>
          {props.props.mainTabContent.map((item, index) => (
            <Mui.Tab
              label={
                <Mui.Typography
                  variant="body1"
                  className={[classes.textColor, classes.textCapitalize]}
                >
                  {item}
                </Mui.Typography>
              }
              value={(1 + index).toString()}
            />
          ))}
        </TabList>
      </Mui.AppBar>

      <TabContext value={subTabvalue}>
        <Mui.AppBar
          position="static"
          style={{ background: "#FFFFFF", width: 1000 }}
          elevation={1}
        >
          <Mui.Grid container direction="row">
            <Mui.Grid item lg={9}>
              <TabList
                onChange={handleSubChange}
                aria-label="simple tabs example"
              >
                {props.props.subTabContent.map((item, index) => (
                  <Mui.Tab
                    label={
                      <Mui.Typography
                        variant="body1"
                        className={[classes.textColor, classes.textCapitalize]}
                      >
                        {item}
                      </Mui.Typography>
                    }
                    value={(1 + index).toString()}
                  />
                ))}
              </TabList>
            </Mui.Grid>
            <Mui.Grid>
              <Mui.Grid container item direction="row" spacing={1}>
                <Mui.Grid item>
                  <Mui.Icon style={{ color: primaryColor }}>apps</Mui.Icon>
                </Mui.Grid>
                <Mui.Grid item>
                  <Mui.Typography
                    variant="subtitle1"
                    className={classes.textColor}
                  >
                    Fields
                  </Mui.Typography>
                </Mui.Grid>
                <Mui.Grid item>
                  <Mui.Icon style={{ color: primaryColor }}>
                    import_export
                  </Mui.Icon>
                </Mui.Grid>
                <Mui.Grid item>
                  <Mui.Typography variant="body1" className={classes.textColor}>
                    Sort
                  </Mui.Typography>
                </Mui.Grid>
                <Mui.Grid item>
                  <Mui.Icon style={{ color: primaryColor }}>
                    filter_alt
                  </Mui.Icon>
                </Mui.Grid>
                <Mui.Grid item>
                  <Mui.Typography variant="body1" className={classes.textColor}>
                    Filter
                  </Mui.Typography>
                </Mui.Grid>
              </Mui.Grid>
            </Mui.Grid>
          </Mui.Grid>
        </Mui.AppBar>
        <TabPanel value="1">Data Related to List</TabPanel>
        <TabPanel value="2">Data Related to List</TabPanel>
        <TabPanel value="3">
          {Boolean(props.props.userID) && <Board userID={props.props.userID} />}
        </TabPanel>
        <TabPanel value="4">Data Related to Calendar</TabPanel>
        <TabPanel value="5">Data Related to Pivot</TabPanel>
        <TabPanel value="6">Data Related to Process</TabPanel>
      </TabContext>
    </TabContext>
  );
}
