import Header from './Header';
import './App.css';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(8),
    },
}));

function App() {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth='md'>
                    <div className={classes.formWrapper}>Form starts here</div>
                </Container>
            </Grid>
        </Grid>
    );
}

export default App;
