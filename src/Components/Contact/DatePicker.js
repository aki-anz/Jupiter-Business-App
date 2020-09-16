import React from 'react';
import DatePick from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Field, ErrorMessage} from 'formik';
import ErrorText from './ErrorText';

const DatePicker = (props) => {
    const {label, name, ...rest} = props;
    return (
        <div className='form-control'>
           <label htmlFor={name}>{label}</label> 
           <Field name={name}>
               {
                   ({form, field}) => {
                       const {setFieldValue} = form;
                       const {value} = field;
                       return (
                        <DatePick
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={val => setFieldValue(name, val)}
                            dateFormat='dd/MM/yyyy'
                            />
                       );
                   }
               }
           </Field>
           <ErrorMessage name={name} component={ErrorText} />
        </div>
    );
}

export default DatePicker;
