import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#8F31AA',
            secondary: "#FFF"
            // contrastText: '#000',
        },
        text: {
            primary: '#8F31AA',
            // secondary: '#000',
            disabled: '#E6D5F8',
        },
        action: {
            active: '#8F31AA',
            disabled: '#8F31AA',
            // hover: '#000',
            // selected: '#000',
        }
    },
});

export default theme;
