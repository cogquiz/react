interface SignUpDetails {
  name: string;
  email: string;
  // role?: number;
  role?: string;
  password: string;
  confirmPassword: string;
}
interface LoginDetails {
  emailOrName: string;
  password: string;
  remember?: boolean
}
