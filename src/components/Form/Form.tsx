import { Formik, Form } from "formik";
import TextInput from "../TextInput/TextInput";
import * as Yup from "yup";
import Button from "../Button/Button";
import { ButtonContainer } from "./form.style";

const FormComponent = ({ ...props }) => {
  const { user, onSubmit, title, action, ...rest } = props;

  return (
    <>
      <h4>{title}</h4>
      <Formik
        initialValues={{
          firstName: user ? user.firstName : "",
          lastName: user ? user.lastName : "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await onSubmit(values);
          setSubmitting(false);
        }}
        {...rest}
      >
        <Form>
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <TextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <ButtonContainer>
            <Button type="submit"></Button>
          </ButtonContainer>
        </Form>
      </Formik>
    </>
  );
};

export default FormComponent;
