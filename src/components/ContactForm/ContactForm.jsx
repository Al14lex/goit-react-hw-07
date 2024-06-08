import { Formik, Form, Field } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
// import { nanoid } from 'nanoid'
import { ErrorMessage } from "formik";

import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  tel: Yup.string().matches(/^\d+$/, "Only numbers are allowed for this field ").min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});


export default function ContactForm () {

const nameFieldId = useId();
const telFieldId = useId();
  
  const dispatch = useDispatch();

const handleSubmit = (values, actions) => {
      //  values.id = nanoid();
        const { username, tel } = values;
        dispatch(addContact(username, tel));
        actions.resetForm();
};

const initialValues = {
  username: "",
  tel: "",
};
  
return (
      <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}>
    
          <Form style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px"
          }}>
              <label htmlFor={nameFieldId}>Name</label>
              <Field type="text" name="username" id={nameFieldId} />
              <ErrorMessage name="username" component="span" />
              
              <label htmlFor={telFieldId}>Number</label>
              <Field type="tel" name="tel" id={telFieldId} />
              <ErrorMessage name="tel" component="span" />
              
            <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}


