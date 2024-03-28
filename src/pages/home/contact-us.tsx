import Image from "next/image";
import { Box, FormControl, TextField, Typography, } from "@mui/material";
import ContactUsImg from '../../assets/contact.png'
import SendIcon from '../../assets/right-arrow.png'
import CustomButton from "@/common-components/CustomButton";
import * as Yup from "yup";
import { useFormik } from "formik";



const ContactUs = () => {
    const ContactUsValidationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required"),
        message: Yup.string().required("Message> is required"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        } as unknown as ContactUsDetails,
        validateOnChange: true,
        validationSchema: ContactUsValidationSchema,
        enableReinitialize: true,
        // regular contact us
        onSubmit: async (values: ContactUsDetails) => {
            const contactUsValue: ContactUsDetails = {
                name: values.name,
                email: values.email,
                message: values.message,
            };
        },
    });

    return (
        <Box id="connect" className="contact-wrap"  >
            <Image height={4000} width={350} src={ContactUsImg.src} alt="contact-us" />
            <Box>
                <Typography variant="h4" className="any-query">Any Query?</Typography>
                <Typography variant="h4" className="write-message">Write Message</Typography>
                <FormControl className="contact-us-form">
                    <TextField label="Enter Your Name"
                        {...formik.getFieldProps("name")}
                        name="name" variant="outlined"
                        error={formik.touched.name && Boolean(formik.errors.name)}
                    />
                    <TextField label="Enter Your Email"
                        {...formik.getFieldProps("email")}
                        name="email" variant="outlined"
                        error={formik.touched.email && Boolean(formik.errors.email)}
                    />
                    <TextField multiline rows={4}
                        {...formik.getFieldProps("message")}
                        name="message" label="Enter Your Message"
                        error={formik.touched.message && Boolean(formik.errors.message)}
                    />
                    <CustomButton className={"send-btn"}  onBtnClick={formik.handleSubmit} btnText={"Submit Message"} endIcon={<Image height={17} width={17} src={SendIcon.src} alt={"send-icon"} />} />
                </FormControl>
            </Box>
        </Box>
    );
};

export default ContactUs;
