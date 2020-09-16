import React from 'react';
import {Field, ErrorMessage} from 'formik';
import ErrorText from './ErrorText';

const Radio = (props) => {
    const {label, name, options, ...rest} = props;
    return (
        <div className='form-control'>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input
                                        type='radio'
                                        id={option.value}
                                        {...field}
                                        value={option.value}
                                        checked={field.value === option.value}
                                        />
                                    <label htmlFor={option.value} className='radio-label'>{option.key}</label>
                                </React.Fragment>
                            );
                        });
                    }
                }
            </Field>
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    );
}

export default Radio;
