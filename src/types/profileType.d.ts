interface ProfileFormDetails {
  firstName: string;
  lastName: string;
  DOB: Date;
  education: string;
  checkForm: Boolean;
  firtsLangEng?: string;
  gender?: string;
  anyMedication?: string;
  anyHeadInjury?: string;
  levelOfIncome?: string;
  dominantHand?: string;
  ethnicity?: string;
}

interface AddParticipantDetails {
  userName: string;
  email: string;
  password: string;
  viewResult: boolean;
}