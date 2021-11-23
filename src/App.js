import Header from './components/Header';
import './App.css';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    formWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(8),
    },
}));

const INITIAL_FORM_STATE = {};

const FORM_VALIDATION = Yup.object().shape({});

function App() {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth='md'>
                    <div className={classes.formWrapper}>
                        <Formik
                            initialValues={{ ...INITIAL_FORM_STATE }}
                            validationSchema={FORM_VALIDATION}
                            onSubmit={(values) => {
                                console.log(values);
                            }}
                        >
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography>Your Details</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Address</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            Booking Information
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Form>
                        </Formik>
                    </div>
                </Container>
            </Grid>
        </Grid>
    );
}

export default App;
