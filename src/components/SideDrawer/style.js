const drawerWidth = 240;

export default theme => ({
    rootMobile: {
        flexGrow: 1,
        height: 430,
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        width: "100%",
    },
    navIconHide: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    toolbarMobile: theme.mixins.toolbar,
    drawerPaperMobile: {
        width: drawerWidth,
        [theme.breakpoints.up("md")]: {
            position: "relative",
        },
    },
    contentMobile: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    title: {
        flex: 1,
        paddingTop: "10px",
        paddingLeft: "16px",
    },
    rootWeb: {
        flexGrow: 1,
        height: 430,
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex",
    },
    appBarWeb: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperWeb: {
        position: "relative",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbarWeb: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
    contentWeb: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});
