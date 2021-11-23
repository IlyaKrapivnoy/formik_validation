import Header from './components/Header';
import TextField from './components/FormsUI/TextField';
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

const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
};

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Your name is required, man'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.number()
        .integer()
        .typeError('Please, enter a valid phone number')
        .required('Required'),
});

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

                                    <Grid item xs={6}>
                                        <TextField
                                            name='firstName'
                                            label='First Name'
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField
                                            name='lastName'
                                            label='Last Name'
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField name='email' label='email' />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField name='phone' label='phone' />
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
