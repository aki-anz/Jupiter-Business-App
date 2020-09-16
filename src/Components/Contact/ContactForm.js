import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const ContactForm = () => {
   const radioOptions = [
    {key: 'Satisfied', value: 'rOption1'},
    {key: 'Neutral', value: 'rOption2'},
    {key: 'Disappointed', value: 'rOptioin3'}
   ];
   const initialValues = {
       fullName: '',
       email: '',
       radioOption: '',
       feedback: '',
       selectDate: null
   };
   const validationSchema = Yup.object({
       fullName: Yup.string().required('Name Required'),
       email: Yup.string().email('Invalid Email').required('Email Required'),
       radioOption: Yup.string().required('Option Required'),
       feedback: Yup.string().required('Feedback Required'),
       selectDate: Yup.date().required('Date Required').nullable()
   });
   const onSubmit = (onSubmitProps) => {
       onSubmitProps.setSubmitting(false);
       onSubmitProps.resetForm();
   }
    return (
        <>
            <Formik
             initialValues={initialValues}
             validationSchema={validationSchema}
             onSubmit={onSubmit}
             >
                 {formik => (
                     <Form>
                         <FormikControl 
                         control='input'
                         type='fullName'
                         label='Full Name'
                         name='fullName'
                         />
                         <FormikControl 
                         control='input'
                         type='email'
                         label='Email'
                         name='email'
                         />
                        <FormikControl
                        control='date'
                        className='date'
                        label='Service Date'
                        name='selectDate'
                        />
                         <FormikControl
                         control='radio'
                         label='Customer Experience'
                         name='radioOption'
                         options={radioOptions}
                         />
                         <FormikControl
                         control='textarea'
                         label='Feedback'
                         name='feedback'
                         />
                         <button type='submit' disabled={!formik.isValid}>Submit</button>
                     </Form>
                 )}
             </Formik>
        </>
    );
}

export default ContactForm;
