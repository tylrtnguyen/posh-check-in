import React, { useState } from 'react';
import {
    StyledContainer,
    StyledWrapper,
    StyledForm,
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




const CheckInForm = () => {
    const [technician, setTechnician] = useState('');
    const [service, setService] = useState('');

    const handleServiceChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setService(e.target.value);
    }
    const handleTechnicianChange = (e) => {
        e.prevenDefault();
        console.log(e.target.value);
        setTechnician(e.target.value);
    }

    return (
        <StyledContainer>
            <StyledWrapper>
                <StyledForm>
                    <StyledIntro>Your wonderful treatment starts here!</StyledIntro>
                    <StyledPrivacy>We respect our customer’s privacy. Therefore, we guarantee that your information is 100% in our system. </StyledPrivacy>
                    <StyledFormGroup>
                        <StyledLabel>Your Name</StyledLabel>
                        <StyledInput type="text" name="name" placeholder="Enter your name"/>
                        <StyledFocusInput />
                    </StyledFormGroup>
                    <StyledFormGroup>
                        <StyledLabel>Your Address</StyledLabel>
                        <StyledInput type="text" name="name" placeholder="Enter your address"/>
                        <StyledFocusInput />
                    </StyledFormGroup>
                    <StyledFormGroup>
                        <StyledLabel>Needed Services</StyledLabel>
                        <StyledSelect value={service} onChange={e => handleServiceChange(e)}>
                                {
                                    services &&
                                    services.map((service, i) => (
                                        <option value={service.value} key={i}>{service.text}</option>
                                    ))
                                }
                        </StyledSelect>
                    </StyledFormGroup>
                    <StyledFormGroup>
                        <StyledLabel>Technician (optional)</StyledLabel>
                        <StyledSelect value={technician} onChange={e => handleTechnicianChange(e)}>
                                {
                                    technicians &&
                                    technicians.map((technician, i) => (
                                        <option value={technician} key={i}>{technician}</option>
                                    ))
                                }
                        </StyledSelect>
                    </StyledFormGroup>
                    <StyledButtonContainer>
                        <StyledButtonWrapper>
                            <StyledButtonWrapper>
                                <StyledButton>
                                    Submit
                                    <NextIcon />
                                </StyledButton>
                            </StyledButtonWrapper>
                        </StyledButtonWrapper>
                    </StyledButtonContainer>
                </StyledForm>
            </StyledWrapper>
        </StyledContainer>
    )
}

export default CheckInForm;