import React from "react";
import clsx from "clsx";
import * as Mui from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import TabPanel from "@material-ui/lab/TabPanel";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import Board from "./board.js";
import { primaryColor } from "../_config/themes/themesUtility.js";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 170;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  imgDrawer: {
    width: "100px",
    height: "100px",
  },
  imgNavigation: {
    width: "50px",
    height: "60px",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: primaryColor,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  margin: {
    margin: theme.spacing(1),
    border: "1px solid #0000FF",
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [mainTabvalue, setValue] = React.useState("1");
  const [subTabvalue, setSubValue] = React.useState("3");
  const handleChange = (event, newValue) => setValue(newValue);
  const handleSubChange = (event, newValue) => setSubValue(newValue);
  const [open, setOpen] = React.useState(false);
  const [displaySearch, setSearch] = React.useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const search = () => setSearch(true);
  const hideSearch = () => setSearch(false);
  const drawerElements = [
    {
      name: "Home",
      icon: "home",
    },
    {
      name: "Search",
      icon: "search",
    },
    {
      name: "Board",
      icon: "developer_board",
    },
    {
      name: "Resources",
      icon: "people",
    },
    {
      name: "Statics",
      icon: "analytics",
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      {!displaySearch && (
        <Mui.AppBar
          color="red"
          elevation={0}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Mui.Toolbar>
            <Mui.IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <Mui.Icon style={{ color: primaryColor }}>menu</Mui.Icon>
            </Mui.IconButton>
            {!open && (
              <img
                alt="Logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSH8H4SdO7nsrpdXZiLtfG2kYnu1-P3ZcYUw&usqp=CAU"
                className={classes.imgNavigation}
              />
            )}
            <Mui.Grid
              container
              direction="row"
              alignItems="flex-start"
              justify="flex-start"
            >
              <Mui.Typography variant="h5" noWrap>
                &nbsp;{props.props.title}
              </Mui.Typography>
            </Mui.Grid>
            <Mui.Grid
              container
              direction="row"
              alignItems="flex-end"
              justify="flex-end"
              spacing={1}
            >
              <Mui.Grid item>
                <Mui.IconButton
                  className={classes.margin}
                  size="small"
                  onClick={search}
                >
                  <Mui.Icon style={{ color: primaryColor }}>search</Mui.Icon>
                </Mui.IconButton>
              </Mui.Grid>
              <Mui.Grid item>
                <Mui.IconButton className={classes.margin} size="small">
                  <Mui.Icon style={{ color: primaryColor }}>
                    add_circle_outline
                  </Mui.Icon>
                </Mui.IconButton>
              </Mui.Grid>
              <Mui.Grid item>
                <Mui.Avatar
                  alt="Remy Sharp"
                  src="https://image.freepik.com/free-vector/vector-avatar-smiling-man-facial-expression_102172-203.jpg"
                  className={classes.large}
                />
              </Mui.Grid>
              <Mui.Grid item>
                <Mui.Typography variant="body1">{props.props.userName}</Mui.Typography>
              </Mui.Grid>
            </Mui.Grid>
          </Mui.Toolbar>

          <TabContext value={mainTabvalue}>
            <Mui.AppBar position="static" color="red" elevation={0}>
              <TabList onChange={handleChange}>
                {props.props.mainTabContent.map((item, index) => (
                  <Mui.Tab
                    label={
                      <Mui.Typography
                        variant="body1"
                        style={{ textTransform: "capitalize" }}
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
              <Mui.AppBar position="static" color="" elevation={1}>
                <Mui.Grid container direction="row">
                  <Mui.Grid item lg={10}>
                    <TabList
                      onChange={handleSubChange}
                      aria-label="simple tabs example"
                    >
                      {props.props.subTabContent.map((item, index) => (
                        <Mui.Tab
                          label={
                            <Mui.Typography
                              variant="body1"
                              style={{ textTransform: "capitalize" }}
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
                        <Mui.Typography variant="subtitle1">Fields</Mui.Typography>
                      </Mui.Grid>
                      <Mui.Grid item>
                        <Mui.Icon style={{ color: primaryColor }}>
                          import_export
                        </Mui.Icon>
                      </Mui.Grid>
                      <Mui.Grid item>
                        <Mui.Typography variant="body1">Sort</Mui.Typography>
                      </Mui.Grid>
                      <Mui.Grid item>
                        <Mui.Icon style={{ color: primaryColor }}>filter_alt</Mui.Icon>
                      </Mui.Grid>
                      <Mui.Grid item>
                        <Mui.Typography variant="body1">Filter</Mui.Typography>
                      </Mui.Grid>
                    </Mui.Grid>
                  </Mui.Grid>
                </Mui.Grid>
              </Mui.AppBar>
              <TabPanel value="1">Data Related to List</TabPanel>
              <TabPanel value="2">Data Related to List</TabPanel>
              <TabPanel value="3">
                {Boolean(props.props.userID) && (
                  <Board userID={props.props.userID} />
                )}
              </TabPanel>
              <TabPanel value="4">Data Related to Calendar</TabPanel>
              <TabPanel value="5">Data Related to Pivot</TabPanel>
              <TabPanel value="6">Data Related to Process</TabPanel>
            </TabContext>
          </TabContext>
        </Mui.AppBar>
      )}

      {displaySearch && (
        <Mui.AppBar
          color="red"
          elevation={5}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Mui.Toolbar>
            <Mui.TextField id="standard-basic" label="Search" fullWidth />
            <Mui.Icon onClick={hideSearch}>close</Mui.Icon>
          </Mui.Toolbar>
        </Mui.AppBar>
      )}

      <Mui.Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <img
            alt="Logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSH8H4SdO7nsrpdXZiLtfG2kYnu1-P3ZcYUw&usqp=CAU"
            className={classes.imgDrawer}
          />
          <Mui.IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <Mui.Icon style={{ color: "#FFFFFF" }}>keyboard_arrow_left</Mui.Icon>
            ) : (
              <Mui.Icon style={{ color: "#FFFFFF" }}>keyboard_arrow_right</Mui.Icon>
            )}
          </Mui.IconButton>
        </div>
        <Mui.List>
          {drawerElements.map((item, index) => (
            <Mui.ListItem button key={index}>
              <Mui.ListItemIcon>
                <Mui.Icon style={{ color: "#FFFFFF" }}>{item.icon}</Mui.Icon>
              </Mui.ListItemIcon>
              <Mui.ListItemText style={{ color: "#FFFFFF" }}>
                {item.name}
              </Mui.ListItemText>
            </Mui.ListItem>
          ))}
        </Mui.List>
      </Mui.Drawer>
    </div>
  );
}
