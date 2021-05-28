import React from "react";
import {
    AppBar,
    Button,
    Card,
    CardContent,
    IconButton,
    makeStyles,
    theme,
    ThemeProvider,
    Toolbar,
    Typography
} from "library-utils";
import {Link as RouterLink, Route, Switch, useRouteMatch} from "react-router-dom";
import {Refresh} from "@material-ui/icons";
import {ComponentOne} from "library-components";

const AppStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = AppStyle();
    const match = useRouteMatch('/component-1');

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Demo
                        </Typography>

                        {match ? (
                            <IconButton color="inherit" href={"/"}><Refresh/></IconButton>
                        ) : null
                        }
                        {match ? null :
                            <Button color="inherit"
                                    component={RouterLink}
                                    to="/component-1">
                                Load Library Component
                            </Button>}

                    </Toolbar>
                </AppBar>
                <Card style={{"padding": 5}}>
                    <CardContent>
                        <Typography variant="body2" component="p">
                            Clicking "LOAD LIBRARY COMPONENT" loads a material-ui-CARD from the MAIN-APP
                        </Typography>
                        {match ? (
                            <Typography variant="body1" gutterBottom>
                                {'"note: PURPLE theming is gone for a toss"'}
                            </Typography>
                        ) : null}
                    </CardContent>
                </Card>
                <Switch>
                    <Route path="/component-1" exact>
                        <ComponentOne/>
                    </Route>
                </Switch>
            </ThemeProvider>
        </div>
    );
}

export default App;
