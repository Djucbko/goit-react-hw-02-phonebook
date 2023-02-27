
import { Formik, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { FormWrapper, AddButton, InputForm } from "./ContactForm.styled";

const schema = Yup.object().shape({
    name: Yup.string().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`).required(),
    number: Yup.string().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required(),
});

export const ContactForm = ({addContact}) => {
    const initialValues = {
        name: '',
        number: '',
    }
    
    const handleSubmit = (data, {resetForm}) => {
        addContact(data);
        resetForm();
    }

    return (
        <Formik initialValues={initialValues} 
        validationSchema={schema} 
        onSubmit={handleSubmit}>
            <FormWrapper>
                <label htmlFor="name"> Name</label>
                    <InputForm type="text" name="name"/>
                    <ErrorMessage name='name' component='div' />
                <label htmlFor="number"> Number</label>
                    <InputForm type='tel' name="number"/>
                    <ErrorMessage name='number' component='div' />
                <AddButton type="submit">Add contact</AddButton>
            </FormWrapper>
        </Formik>
    )
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
}