import React from "react";
import * as Mui from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { makeStyles } from "@material-ui/core/styles";
import {
  primaryColor,
  secondaryBlue,
  infoColor,
  errorColor,
  successColor,
  warningColor,
} from "../_config/themes/themesUtility.js";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
    backgroundColor: "#F6F8FA",
    height: 550,
  },
  media: {
    height: 150,
  },
  paper: {
    height: 4,
  },
  paperContent: {
    height: 150,
    padding: 10,
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  grid: {
    margin: "auto",
  },
}));

function Calendar(props) {
  const useStyles = makeStyles((theme) => ({
    calendar: {
      backgroundColor: "#F2F2F2",
      padding: theme.spacing(1, 1),
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 15,
      marginLeft: 20,
    },
  }));
  const classes = useStyles();

  return (
    <Mui.Paper className={classes.calendar} elevation={0}>
      <Mui.Icon>calendar_today</Mui.Icon>
      <Mui.Typography variant="body1">{props.date}</Mui.Typography>
    </Mui.Paper>
  );
}

function CircularProgressWithLabel(props) {
  const getColorProgress = (value) => {
    if (value < 35) {
      return errorColor;
    } else if (value > 35 && value < 80) {
      return infoColor;
    } else {
      return successColor;
    }
  };

  return (
    <Mui.Box
      position="relative"
      display="inline-flex"
      style={{ marginTop: "15px", marginLeft: "10px" }}
    >
      <Mui.CircularProgress
        variant="static"
        {...props}
        style={{ color: getColorProgress(Math.round(props.value)) }}
      />
      <Mui.Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Mui.Typography
          variant="overline"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Mui.Typography>
      </Mui.Box>
    </Mui.Box>
  );
}

export default function DisplayCard(props) {
  const classes = useStyles();

  const getColor = (title) => {
    switch (title) {
      case "onTrack":
        return secondaryBlue;
      case "delayed":
        return errorColor;
      case "onHold":
        return warningColor;
      default:
        return primaryColor;
    }
  };

  return (
    <Mui.Card className={classes.root}>
      <Mui.CardHeader
        action={<Mui.Icon style={{ color: primaryColor }}>more_horiz</Mui.Icon>}
        title={
          <Mui.Typography align="left" variant="h6">
            {props.props.description}
          </Mui.Typography>
        }
      />
      {props.props.courseList.map((item) => (
        <Mui.CardContent className={classes.media}>
          <Mui.Card square>
            <Mui.Paper
              className={classes.paper}
              style={{ backgroundColor: getColor(props.props.title) }}
              square
            ></Mui.Paper>
            <Mui.CardHeader
              title={
                <Mui.Typography align="left" style={{ marginTop: -10 }}>
                  {item.name}
                  {Boolean(item.notification) && (
                    <Mui.Badge badgeContent={item.notification} color="primary">
                      <Mui.Icon style={{ color: primaryColor }}>
                        notifications
                      </Mui.Icon>
                    </Mui.Badge>
                  )}
                </Mui.Typography>
              }
              action={
                <Mui.IconButton aria-label="settings">
                  <Mui.Icon style={{ color: primaryColor }}>
                    more_verti
                  </Mui.Icon>
                </Mui.IconButton>
              }
            ></Mui.CardHeader>
            <Mui.CardActions>
              <Mui.Grid direction="row" container>
                <Mui.Grid item xs={4} lg={6}>
                  <Mui.Grid
                    container
                    direction="row"
                    alignItems="flex-start"
                    justify="flex-start"
                    lg={8}
                    xs={12}
                  >
                    <AvatarGroup max={2}>
                      {item.teacher.map((image, index) => (
                        <Mui.Avatar
                          alt="Remy Sharp"
                          src={image}
                          className={classes.large}
                        />
                      ))}
                    </AvatarGroup>
                    {item.more && (
                      <Mui.Icon style={{ color: primaryColor }}>
                        add_circle_outline
                      </Mui.Icon>
                    )}
                  </Mui.Grid>
                </Mui.Grid>
                <Mui.Grid item xs={8} lg={6}>
                  <Mui.Grid
                    container
                    direction="row"
                    alignItems="flex-end"
                    justify="flex-end"
                  >
                    <Calendar date={item.date} />
                    <CircularProgressWithLabel
                      variant="static"
                      value={item.progress}
                    />
                  </Mui.Grid>
                </Mui.Grid>
              </Mui.Grid>
            </Mui.CardActions>
          </Mui.Card>
        </Mui.CardContent>
      ))}
    </Mui.Card>
  );
}
