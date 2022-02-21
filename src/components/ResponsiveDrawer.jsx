import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TableInfo from "./TableInfo"

const drawerWidth = 240;

const useStyles = makeStyles({
  paperStyle: {
    padding: "5px",
    margin: "5px",
    // width: "",
    height: "125px",
    maxWidth: "500px",
    flexGrow: 1,
  },
  GraphPaper: {
    padding: "5px",
    marginTop: "5px",
    marginRight: "30px",
    marginLeft: "5px",
    height: "500px",
  },
  BarPaper: {
    padding: "5px",
    margin: "5px",
    height: "500px",
  },
  Table: {
    padding: "5px",
    margin: "5px",
    marginTop: "15px",
    height: "400px",
  },
});

function ResponsiveDrawer(props) {
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {}}

            // alert(`selected index ${index}`);

            // if (index === 0) {
            //   alert("selected index 0");
            // } else if (index === 1) {
            //   alert("selected index 1 ");
            // } else if (index === 2) {
            //   alert("selected index 2 ");
            // } else if (index === 3) {
            //   alert("selected index 3 ");
            // }
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Navbar
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box sx={{ flexGrow: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Paper elevation={3} className={classes.paperStyle}>
                Hello1
              </Paper>
            </Grid>

            <Grid item xs={3}>
              <Paper elevation={3} className={classes.paperStyle}>
                Box 2
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={3} className={classes.paperStyle}>
                Box3
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={3} className={classes.paperStyle}>
                box4
              </Paper>
            </Grid>
          </Grid>
          {/* bottom  grid  */}
          <Grid container sx={{ marginTop: "20px" }}>
            <Grid item xs={8}>
              <Paper elevation={3} className={classes.GraphPaper}>
                Graph
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={3} className={classes.BarPaper}>
                Bar component
              </Paper>
            </Grid>
          </Grid>
          {/* ------------------------------------------ */}
          <Paper elevation={3} className={classes.Table}>
            <TableInfo />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
