import TextField from '@material-ui/core';

const TextFieldWrapper = () => {
    const configTextField = {
        fullWidth: true,
        variant: 'outlined',
    };
    return (
        <div>
            <TextField
                id='outlined-basic'
                label='Outlined'
                variant='outlined'
                {...configTextField}
            />
        </div>
    );
};

export default TextFieldWrapper;
