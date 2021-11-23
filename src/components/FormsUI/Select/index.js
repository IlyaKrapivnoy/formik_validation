import { TextField, MenuItem } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

const SelectWrapper = ({ name, options, ...otherProps }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = (e) => {
        const { value } = e.target;
        setFieldValue(name, value);
    };

    const configSelect = {
        ...field,
        select: true,
        variant: 'outlined',
        fullWidth: true,
        onChange: handleChange,
    };

    return <TextField {...configSelect} />;
};

export default SelectWrapper;
