import React from "react";
import {connect} from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Container,Row,Col } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import {withRouter} from "react-router";

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
    surname: Yup.string().required("Surname is a required field"),
    phone: Yup.string().matches(phoneRegExp,"555 55 55 şeklinde bir numara giriniz").required("Phone is a required field"),
    email: Yup.string().required("Email is a required field").email("include @ , .com" ),
    url: Yup.string().required("Url is a required field").url("include http://"),
    newsletter:Yup.string().required("Name is a required field"),
});

//AddBookForm
const DogsForm = (props) => {
    console.log(props);
  return (
    <div>
      <Container>
        <Formik
            initialValues={{
            name: "",
            surname: "",
            phone: "",
            email: "",
            url: "",
            newsletter:"",
            imageUrl: "",
            status: ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({
            values,
            errors,
            handleChange,
            handleSubmit,
            isSubmitting,
            
            }) => (
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                <Label for="name">Name</Label>
                <Input
                    className={errors.name ? "error" : null}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    invalid={errors.name}
                />
                    {
                        errors.name && <FormFeedback>{errors.name}</FormFeedback>
                    }
                </FormGroup>
                <FormGroup>
                <Label for="surname">Surname</Label>
                <Input
                    className={errors.surname ? "error" : null}
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder="Surname"
                    value={values.name}
                    onChange={handleChange}
                    invalid={errors.name}
                />
                    {
                        errors.name && <FormFeedback>{errors.name}</FormFeedback>
                    }
                </FormGroup>
                <FormGroup>
                <Label for="phone">Telefon</Label>
                <Input
                    className={errors.phone ? "error" : null}
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Author of the book"
                    value={values.phone}
                    onChange={handleChange}
                    invalid={errors.phone}
                />
                    {
                        errors.phone && <FormFeedback>{errors.phone}</FormFeedback>
                    }
                </FormGroup>
                <FormGroup>
                <Label for="email">E-mail Address</Label>
                <Input
                    className={errors.email ? "error" : null}
                    type="email"
                    name="email"
                    id="emial"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                />
                {
                    errors.email && <FormFeedback>{errors.email}</FormFeedback>
                }
                </FormGroup>
            
                <FormGroup>
                <Label for="url">Please include http://</Label>
                <Input className={errors.url ? "error" : null} 
                        type="url" name="url" id="url" value={values.url}
                        onChange={handleChange}/>
                </FormGroup>

                {
                    errors.url && <FormFeedback>{errors.url}</FormFeedback>
                }

                <FormGroup>
                <Label for="newsletter">>Would you like to recieve our email newsletter?</Label>
                <Input  type="checkbox" name="newsletter" id="newsletter" value={values.newsletter}
                        onChange={handleChange}/> Sure!
                </FormGroup>
                
                <Button color="primary">Submit</Button>
            </Form>
            )}
        </Formik>
      
      </Container>  
      
    </div>
  );
};

const mapDispatchToProps = {
    
};

export default withRouter(connect(null, mapDispatchToProps)(DogsForm));

