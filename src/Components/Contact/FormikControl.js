import React from 'react';
import Input from './Input';
import DatePicker from './DatePicker';
import Radio from './Radio';
import TextArea from './TextArea';

const FormikControl = (props) => {
    const {control, ...rest} = props;
    switch(control) {
        case 'input': 
            return <Input {...rest} />
        case 'date':
            return <DatePicker {...rest}/>
        case 'radio':
            return <Radio {...rest} />
        case 'textarea':
            return <TextArea {...rest} />
        default: return null;
    }
}

export default FormikControl;
