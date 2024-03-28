import React, { useEffect, useInsertionEffect, useState } from 'react'
import InputFieldComponent from '@/common-components/inputField/InputField'
import { Box, Checkbox, FormControlLabel, FormLabel, Grid, MenuItem, OutlinedInput, Select, Step, StepLabel, Stepper, Typography } from '@mui/material'
import CustomCheckbox from '@/common-components/customCheckbox/CustomCheckbox';
import CustomButton from '@/common-components/CustomButton';
import { educations, ethnicityList, fiveHours, healthRate, initialCheckBoxObjects, levelOfIncomes, oneHours, selfEsteemRate } from '@/constant/constant';
import { useFormik } from 'formik';
import * as Yup from "yup";
import DatePickerComponent from '@/common-components/datePicker/datePickerComponent';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/app/store';
import { fetchAllOptionThunk, fetchUserProfileThunk, fetchUserThunk, updateUserProfileThunk } from '@/redux/feature/user-profile/userProfileThunk';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';
const intitalData = {
  firstName: "",
  lastName: "",
  DOB: "",
  education: "",
  checkForm: "",
  firtsLangEng: "",
  gender: "",
  anyMedication: "",
  anyHeadInjury: "",
  levelOfIncome: "",
  dominantHand: "",
  ethnicity: "",
}


const ProfileForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [userDetail, setUserDetail] = useState<any>(intitalData)
  const userId: any = localStorage.getItem("userId")
  const userProfileDetails = useSelector(
    (state: RootState) => state?.userProfile?.userProfileDetails
  );
  const profileFormOptions = useSelector(
    (state: RootState) => state?.userProfile?.options
  );

  const ProfileValidationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("First name is required"),
    DOB: Yup.string().required("Date of birth is required"),
    education: Yup.string().required("Education is required"),
    checkForm: Yup.string().required("Please check this"),
  });

  useEffect(() => {
    if (userProfileDetails || profileFormOptions) return
    dispatch(fetchAllOptionThunk())
    if (userId) {
      dispatch(fetchUserProfileThunk(userId))
    }
    // eslint-disable-next-line
  }, [])


  useEffect(() => {
    setUserDetail({
      firstName: userProfileDetails?.first_name,
      lastName: userProfileDetails?.last_name,
      DOB: userProfileDetails?.birth_date,
      education: userProfileDetails?.education,
      checkForm: userProfileDetails?.checkForm,
      firtsLangEng: userProfileDetails?.isEnglishLanguage,
      gender: userProfileDetails?.gender,
      anyMedication: userProfileDetails?.medication,
      anyHeadInjury: userProfileDetails?.head_injury,
      levelOfIncome: userProfileDetails?.income_level,
      dominantHand: userProfileDetails?.hand_dominant,
      ethnicity: userProfileDetails?.ethinicity,
    })
  }, [userProfileDetails])




  const formik = useFormik({
    initialValues: userDetail as unknown as ProfileFormDetails,
    validateOnChange: true,
    validationSchema: ProfileValidationSchema,
    enableReinitialize: true,
    // regular profile
    onSubmit: async (values: ProfileFormDetails) => {
      const profileFormValue: any = {
        user_id: userId,
        first_name: values.firstName,
        last_name: values.lastName,
        birth_date: values.DOB,
        education: values.education,
        checkForm: values.checkForm,
        isEnglishLanguage: values.firtsLangEng === "" ? undefined : values.firtsLangEng,
        gender: values.gender === "" ? undefined : values.gender,
        medication: values.anyMedication === "" ? undefined : values.anyMedication,
        head_injury: values.anyHeadInjury === "" ? undefined : values.anyHeadInjury,
        income_level: values.levelOfIncome === "" ? undefined : values.levelOfIncome,
        hand_dominant: values.dominantHand === "" ? undefined : values.dominantHand,
        ethinicity: values.ethnicity === "" ? undefined : values.ethnicity,
      };
      dispatch(updateUserProfileThunk(profileFormValue)).then((response: any) => {
        if (response?.payload) {
          toast.success(response.payload.data.message)
          dispatch(fetchUserThunk(userId))
        }
      });
    }
  });

  const handleIncomeChange = (e: any, type: string) => {
    switch (type) {
      case "levelOfIncome":
        formik.setFieldValue("levelOfIncome", e.target.value)
        break;
      case "education":
        formik.setFieldValue("education", e.target.value)
        break;
      case "dominantHand":
        formik.setFieldValue("dominantHand", e.target.value)
        break;
      case "ethnicity":
        formik.setFieldValue("ethnicity", e.target.value)
        break;
    }
  }


  const handleValueChange = (id: any, index: number) => {
    if (id == "gender") {
      setUserDetail({ ...userDetail, [id]: index == 0 ? "Male" : "Female" })
      formik.setFieldValue(id, index == 0 ? true : false)
    } else {
      setUserDetail({ ...userDetail, [id]: index == 0 ? true : false })
      formik.setFieldValue(id, index == 0 ? true : false)
    }
  };


  return (
    <Box className="profile-outer-main-box-wrap profile-form-out-wrap">
      <Box className="profile-form-layout">
        <Typography fontSize={13} fontWeight={600}>Please fill out the form to ensure the most accurate scoring results for the test. Required fields are marked with *</Typography>
        <Typography variant='body1' fontSize={12} mt={1.5}>To utilize the assessments on this site you need to read and agree to the conditions for taking any of the assessments provided by CogQuiz.com. The tests on this site are considered and provided solely as experimental assessments. They are not clinically or medically diagnostic or for use in treating or preventing clinical of medical conditions. If you have questions or concerns about the results or our reporting of your results on any assessment taken on this site, you may want to print your results and discuss them with a licensed medical of psychological professional. CogQuiz.com, CogQuiz, LLC, or the owners of this company and/or website are not responsible for any errors or misinterpretation of the results by users of this website and assessments. By checking accept below you are acknowledging that you have read and understood the conditions for taking any assessment provided on this website.</Typography>

        <FormControlLabel
          control={<Checkbox {...formik.getFieldProps("checkForm")} checked={Boolean(formik?.values?.checkForm)} size="small" name='checkForm' />}
          label={<Typography className='checkbox-label' >I have read and understood</Typography>}
        />
        {formik.touched.checkForm && formik.errors.checkForm && (
          <Typography variant="body2" color="error">{String(formik.errors.checkForm)}</Typography>
        )}
        <Box>
          {/* personal details */}
          <Grid container rowSpacing={2} columnSpacing={3} mt={2}>
            <Grid item xs={6}>
              <InputFieldComponent
                placeHolder='First Name'
                label="* First Name:"
                {...formik.getFieldProps("firstName")}
                name='firstName'
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              />
            </Grid>
            <Grid item xs={6}>
              <InputFieldComponent placeHolder='Last Name' label="* Last Name:"
                {...formik.getFieldProps("lastName")}
                name='lastName'
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              />
            </Grid>
            <Grid item xs={6}>

              <DatePickerComponent
                // name="DOB"
                value={userDetail?.DOB ? dayjs(userDetail?.DOB) : undefined}
                labelText="* Birth Date:"
                onChange={(option) => {
                  if (option) {
                    formik.setFieldValue(
                      "DOB",
                      option.format("YYYY-MM-DD")
                    );
                  }
                }}
                error={formik.touched.DOB && Boolean(formik.errors.DOB)}
              />
            </Grid>
            <Grid item xs={6} display={"flex"} flexDirection={"column"} gap={"10px"}>
              <FormLabel className='profile-label'
              >* Education:</FormLabel>
              <Select
                {...formik.getFieldProps("education")}
                name='education'
                value={formik.values.education ? formik.values.education : ""}
                placeholder='Select Education'
                onChange={(e) => handleIncomeChange(e, "education")}
                input={<OutlinedInput />}
                error={formik.touched.education && Boolean(formik.errors.education)}
                style={{ height: '37px', borderRadius: "6px" }}
              >
                {profileFormOptions?.education.map((education: { id: number, name: string }) => (
                  <MenuItem
                    key={education?.id}
                    value={education?.id}
                  >
                    {education?.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>


          {/* checkbox */}
          <Grid container rowSpacing={2} columnSpacing={3} mt={2}>
            <Grid item xs={6}>
              <FormLabel className='profile-label'>Is English your first language?</FormLabel>
              <CustomCheckbox {...formik.getFieldProps("firtsLangEng")} name={"firtsLangEng"}
                selectedValues={[
                  { label: 'Yes', selected: userDetail.firtsLangEng === true },
                  { label: 'No', selected: userDetail.firtsLangEng === false },
                ]} onChange={handleValueChange} />
            </Grid>
            <Grid item xs={6}>
              <FormLabel className='profile-label'>Gender</FormLabel>
              <CustomCheckbox {...formik.getFieldProps("gender")} name={"gender"}
                selectedValues={[
                  { label: 'Male', selected: userDetail.gender === "Male" },
                  { label: 'Female', selected: userDetail.gender === "Female" },
                ]} onChange={handleValueChange} />
            </Grid>
            <Grid item xs={6}>
              <FormLabel className='profile-label'>Are you currently taking any medications?</FormLabel>
              <CustomCheckbox {...formik.getFieldProps("anyMedication")} name={"anyMedication"}
                selectedValues={[
                  { label: 'Yes', selected: userDetail.anyMedication === true },
                  { label: 'No', selected: userDetail.anyMedication === false },
                ]} onChange={handleValueChange} />
            </Grid>
            <Grid item xs={6}>
              <FormLabel className='profile-label'>Have you ever had a head injury?</FormLabel>
              <CustomCheckbox {...formik.getFieldProps("anyHeadInjury")} name={"anyHeadInjury"}
                selectedValues={[
                  { label: 'Yes', selected: userDetail.anyHeadInjury === true },
                  { label: 'No', selected: userDetail.anyHeadInjury === false },
                ]} onChange={handleValueChange} />
            </Grid>
          </Grid>

          {/* Level of income */}
          <Grid container spacing={2} mt={2}>
            <Grid item xs={4} display={"flex"} flexDirection={"column"} gap={"10px"}>
              <FormLabel className='profile-label'>Level of Income:</FormLabel>
              <Select
                value={formik.values.levelOfIncome ? formik.values.levelOfIncome : ""}
                onChange={(e) => handleIncomeChange(e, "levelOfIncome")}
                input={<OutlinedInput />}
                style={{ height: '37px', borderRadius: "6px" }}
              >
                {profileFormOptions?.income.map((income: { id: number, name: string }) => (
                  <MenuItem
                    key={income?.id}
                    value={income?.id}
                  >
                    {income?.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={4} display={"flex"} flexDirection={"column"} gap={"10px"}>
              <FormLabel className='profile-label'>Dominant Hand</FormLabel>
              <Select
                value={formik.values.dominantHand ? formik.values.dominantHand : ""}
                onChange={(e) => handleIncomeChange(e, "dominantHand")}
                input={<OutlinedInput />}
                style={{ height: '37px', borderRadius: "6px" }}
              >
                {profileFormOptions?.dominantHand.map((income: { id: number, name: string }) => (
                  <MenuItem
                    key={income?.id}
                    value={income?.id}
                  >
                    {income?.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={4} display={"flex"} flexDirection={"column"} gap={"10px"}>
              <FormLabel className='profile-label'>Ethnicity</FormLabel>
              <Select
                value={formik.values.ethnicity ? formik.values.ethnicity : ""}
                onChange={(e) => handleIncomeChange(e, "ethnicity")}
                input={<OutlinedInput />}
                style={{ height: '37px', borderRadius: "6px" }}
              >
                {profileFormOptions?.ethnicity.map((ethnicity: { id: number, name: string }) => (
                  <MenuItem
                    key={ethnicity?.id}
                    value={ethnicity?.id}
                  >
                    {ethnicity?.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>

          <Box>

            <Box mt={5} textAlign={"center"}>
              <Typography color={"#3D3D3D"} fontSize={"14px"} fontWeight={600}>How many hours a week do you engage in stimulating activity such as follows </Typography>
              <Typography color={"#69A6D1"} fontSize={"14px"} fontWeight={600} mb={5}>reading, writing, playing cards, intellectual conversations, computer use</Typography>
              <Stepper activeStep={1} alternativeLabel>
                {fiveHours.map((label) => (
                  <Step completed={false} key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Box mt={5} textAlign={"center"}>
              <Typography color={"#3D3D3D"} fontSize={"14px"} fontWeight={600} mb={5}>How many hours a week do you exercise?</Typography>
              <Stepper activeStep={2} alternativeLabel>
                {oneHours.map((label) => (
                  <Step completed={false} key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Box mt={5} textAlign={"center"}>
              <Typography color={"#3D3D3D"} fontSize={"14px"} fontWeight={600} mb={5}>How would you rate your self-esteem:</Typography>
              <Stepper activeStep={2} alternativeLabel>
                {selfEsteemRate.map((label) => (
                  <Step completed={false} key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Box mt={5} textAlign={"center"}>
              <Typography color={"#3D3D3D"} fontSize={"14px"} fontWeight={600} mb={5}>How would you rate your overall health:</Typography>
              <Stepper activeStep={2} alternativeLabel>
                {healthRate.map((label) => (
                  <Step completed={false} key={label}>
                    <StepLabel >{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
        </Box>
        <Box textAlign={"end"} mt={4}>
          <CustomButton className="save-profile" onBtnClick={formik.handleSubmit} btnText="Save Profile" />
        </Box>
      </Box>
    </Box>
  )
}

export default ProfileForm