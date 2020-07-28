import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Script from 'react-load-script';
import axios from 'axios';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';
import {
    StyledContainer,
    StyledWrapper,
    StyledIntro,
    StyledPrivacy,
    StyledFormGroup,
    StyledLabel,
    StyledInput,
    StyledFocusInput,
    StyledSelect,
    StyledButtonContainer,
    StyledButtonWrapper,
    StyledButton,
    StyledError
} from './styles';
import { ReactComponent as NextIcon } from '../assets/icons/next.svg';
import technicians from '../data/technicians';
import services from '../data/services';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Mailing address is required'),
    service: Yup.string().required('Service is required'),
    phone: Yup.string().required('Phone number is required').matches(phoneRegExp, 'Phone number is not valid')
})

let autoComplete;

const CheckInForm = () => {
    const history = useHistory();
    const [formatAddress, setFormatAddress] = useState('');
    const [addressError, setAddressError] = useState('');

    const handleScriptLoad = () => {
        autoComplete = new window.google.maps.places.Autocomplete(
            document.getElementById('address'),
            { componentRestrictions: { country: "us"} }   
        )
        autoComplete.setFields(['address_components', 'formatted_address']);
        // Fire an event when a suggest name is selected
        autoComplete.addListener('place_changed', handlePlaceSelect);
    }

    const handlePlaceSelect = () => {
        const addressObject = autoComplete.getPlace();
        const formattedAddress = addressObject.formatted_address;
        setFormatAddress(formattedAddress);
    }



    const sendCustomer = async (name, address, service, technician, phone, setSubmitting, resetForm) => {
        try {
            await axios({
                method: 'POST',
                url: `https://formspree.io/moqkpjnv`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({
                    name,
                    address,
                    service,
                    technician,
                    phone,
                    setSubmitting,
                    resetForm
                })
            })
            setSubmitting(false)
            resetForm();
            history.push('/success');
        }
        catch (err) {
            setSubmitting(false);
            alert(err);
        }
    }

    return (
        <StyledContainer>
            <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4H8NmmDbEXDLe92A7hip3o6Af0pMfLTQ&libraries=places" onLoad={handleScriptLoad} />
            <StyledWrapper>
                    <StyledIntro>Your wonderful treatment starts here!</StyledIntro>
                    <StyledPrivacy>We respect our customer’s privacy. Therefore, we guarantee that your information will not be shared with anyone. </StyledPrivacy>
                    <Formik
                        initialValues={{
                            name:'',
                            address:'',
                            phone:'',
                            service:'',
                            technician: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            console.log(values);
                            const { name, service, technician, phone } = values
                            const formattedPhoneNumber = formatPhoneNumber(phone)
                            if(formatAddress.length < 8) {
                                setAddressError('Address is too short!')
                            }
                            sendCustomer(name, formatAddress, service, technician, formattedPhoneNumber, setSubmitting, resetForm);
                        }}
                    >
                    {({values, touched, errors, isSubmitting, setFieldValue, handleChange, handleBlur}) => (
                        <Form>
                        {/* Name Field */}
                        <StyledFormGroup>
                            <StyledLabel>Your Name</StyledLabel>
                            <StyledInput 
                                component="input"
                                as={FastField}
                                type="text" 
                                name="name"
                                id="name" 
                                error={touched.name && errors.name ? 1 : 0}
                                placeholder="Enter your name"/>
                            <StyledFocusInput />
                            <ErrorMessage component={StyledError} name="name" />
                        </StyledFormGroup>
                        {/* Address Field */}
                        <StyledFormGroup>
                            <StyledLabel>Mailing Address</StyledLabel>
                            <StyledInput
                                component="input"
                                as={FastField}
                                value={values.address}
                                type="text" 
                                name="address" 
                                id="address"
                                error={touched.address && errors.address ? 1 : 0}
                                placeholder="Enter your mailing address" />
                            <StyledFocusInput />
                            <ErrorMessage component={StyledError} name="address" />
                            <StyledError>{addressError}</StyledError>
                        </StyledFormGroup>
                        {/* Phone Field */}
                        <StyledFormGroup>
                            <StyledLabel>Your Phone</StyledLabel>
                            <StyledInput 
                                component="input"
                                as={FastField}
                                type="text" 
                                name="phone" 
                                id="phone"
                                error={touched.phone && errors.phone ? 1 : 0}
                                placeholder="856-840-5559"/>
                            <StyledFocusInput />
                            <ErrorMessage component={StyledError} name="phone" />
                        </StyledFormGroup>
                        {/* Service */}
                        <StyledFormGroup>
                            <StyledLabel>Needed Services</StyledLabel>
                            <StyledSelect 
                                value={values.service}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="service"
                                id="service"
                                component="select"
                                error={touched.service && errors.service ? 1 : 0}>
                                    {
                                        services &&
                                        services.map((service, i) => (
                                            <option value={service.value} key={i}>{service.text}</option>
                                        ))
                                    }
                            </StyledSelect>
                            <ErrorMessage component={StyledError} name="service" />
                        </StyledFormGroup>
                        {/* Technician Field */}
                        <StyledFormGroup>
                            <StyledLabel>Technician (optional)</StyledLabel>
                            <StyledSelect 
                                value={values.technician}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                name="technician" 
                                component="select"
                                id="technician"
                                >
                                    {
                                        technicians &&
                                        technicians.map((technician, i) => (
                                            <option value={technician} key={i}>{technician}</option>
                                        ))
                                    }
                            </StyledSelect>
                            <ErrorMessage component={StyledError} name="technician" />
                        </StyledFormGroup>
                        {/* Button Field */}
                        <StyledButtonContainer>
                            <StyledButtonWrapper>
                                <StyledButtonWrapper>
                                    <StyledButton type="submit" disabled={isSubmitting}>
                                        Submit
                                        <NextIcon />
                                    </StyledButton>
                                </StyledButtonWrapper>
                            </StyledButtonWrapper>
                        </StyledButtonContainer>
                        </Form>          
                    )}
                    </Formik>
            </StyledWrapper>
        </StyledContainer>
    )
}

export default CheckInForm;