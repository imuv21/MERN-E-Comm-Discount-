import React, { Fragment } from "react";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Typography, Stepper, StepLabel, Step } from "@mui/material";

const CheckoutSteps = ({ activeStep }) => {


    const steps = [
        {
            label: <Typography>Shipping Details</Typography>,
            icon: <LocalShippingIcon />,
        },
        {
            label: <Typography>Confirm Order</Typography>,
            icon: <LibraryAddCheckIcon />,
        },
        {
            label: <Typography>Payment</Typography>,
            icon: <AccountBalanceIcon />,
        },
    ];


    return (
        <Fragment>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((item, index) => (
                    <Step key={index} active={activeStep === index ? true : false} completed={activeStep >= index ? true : false} >
                        <StepLabel
                            style={{
                                color: activeStep >= index ? "var(--btnclr)" : "rgba(0, 0, 0, 0.649)",
                            }} icon={item.icon} >
                            {item.label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Fragment>
    )
};

export default CheckoutSteps;