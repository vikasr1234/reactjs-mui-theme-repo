import React from "react";
import {Card, CardContent, CardHeader, IconButton, ThemeProvider} from "@material-ui/core";
import {theme} from "library-utils";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {BrowserRouter, Link as RouterLink, Route, Switch} from "react-router-dom";
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
    const [loaded, setLoaded] = React.useState(false);

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Demo
                            </Typography>

                            {loaded ? (
                                <IconButton color="inherit" href={"/"}><Refresh/></IconButton>
                            ) : null
                            }
                            {loaded ? null :
                                <Button color="inherit"
                                        onClick={() => setLoaded(true)}
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
                            {loaded ? (
                                <Typography variant="body1" gutterBottom>
                                    {'"note: PURPLE theming is gone for a toss"'}
                                </Typography>
                            ) : null}
                        </CardContent>
                    </Card>
                    <div>
                        <Switch>
                            <Route path="/component-1">
                                <ComponentOne/>
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
