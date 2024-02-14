import { useState } from "react";
import Image from "next/image";
import { Box, FormControl, TextField, Typography, } from "@mui/material";
import ContactUsImg from '../../assets/contact.png'
import SendIcon from '../../assets/right-arrow.png'
import CustomButton from "@/common-components/CustomButton";

const initialFormData = {
    name: "",
    email: "",
    message: ""
}

const ContactUs = () => {
    const [formData, setFormData] = useState(initialFormData)

    const handleMessageForm = (e: any) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = () => {
    }

    return (
        <Box id="connect" className="contact-wrap"  >
            <Image height={4000} width={350} src={ContactUsImg.src} alt="contact-us" />
            <Box>
                <Typography variant="h4" className="any-query">Any Query?</Typography>
                <Typography variant="h4" className="write-message">Write Message</Typography>
                <FormControl className="contact-us-form">
                    <TextField label="Enter Your Name" name="name" variant="outlined" onChange={(e) => handleMessageForm(e)} />
                    <TextField label="Enter Your Email" name="email" variant="outlined" onChange={(e) => handleMessageForm(e)} />
                    <TextField multiline rows={4} name="message" label="Enter Your Message" onChange={(e) => handleMessageForm(e)} />
                    <CustomButton className={"send-btn"} onBtnClick={handleSubmit} btnText={"Submit Message"} endIcon={<Image height={17} width={17} src={SendIcon.src} alt={"send-icon"} />} />
                </FormControl>
            </Box>
        </Box>
    );
};

export default ContactUs;
