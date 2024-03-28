import Image from "next/image";
import { Box, Container, List, ListItemText, Typography } from "@mui/material";
import FooterImage from "../assets/footer-image.png";
import Logo from '../assets/logo/logo.png'
import FacebookIcon from '../assets/socialIcon/facebook.png'
import LinkedinIcon from '../assets/socialIcon/Linkedin.png'
import YoutubeIcon from '../assets/socialIcon/youtube.png'
import InstaIcon from '../assets/socialIcon/Insta.png'
import Link from "next/link";

const Footer = () => {
	return (
		<Box className="fixed-footer-wrap">
			<Container className="footer-container">
				<Box className='footer-insideWrap'>
					<Box className="footer-top">
						<Box className="bar-logo">
							<Box className="logo-left-wrap">
								<Image src={Logo.src} width={200} height={100} alt="logo" />
							</Box>
							<Typography className="logo-text">
								Understand Your Brain and Boost Your Potential. Discover Your Cognitive Profile. Take Control of Your Mental Health. Optimize Your Brain With Quizzes.
							</Typography>
						</Box>
						<Box >
							<List className="bar-menu-item">
								<ListItemText className="primary-text" primary="Menu" />
								<Link href={'/'}><ListItemText primary="Home" /></Link>
								<Link href={'/#about'}><ListItemText primary="About" /></Link>
								<Link href={'/#test-category'}><ListItemText primary="Test Categories" /></Link>
								<Link href={'/#available-test'}><ListItemText primary="Available Tests" /></Link>
							</List>
						</Box>
						<Box className="bar-menu-item">
							<List className="bar-menu-item">
								<ListItemText className="primary-text" primary="Tests" />
								<Link href={'/#custom-test'}><ListItemText primary="Custom Tests" /></Link>
								<Link href={'/#desktop-test'}><ListItemText primary="Desktop Tests" /></Link>
								<Link href={'/#connect'}><ListItemText primary="Connect" /></Link>
							</List>
						</Box>
					</Box>
					<Box className="footer-bottom">
						<Box>
							<Typography variant="h4" className="follow-us-text">Follow us</Typography>
							<Box className="share-icons">
								<Link href="https://www.facebook.com/people/CogQuiz/100069467757239/" target="_blank"><Image src={FacebookIcon.src} height={50} width={50} alt="facebook" /></Link>
								<Link href="https://www.linkedin.com/company/cogquiz-neuropsychological-tests/about/" target="_blank"><Image src={LinkedinIcon.src} height={50} width={50} alt="linkedin" /></Link>
								<Link href="https://www.youtube.com/@cogquizadmin6618/videos" target="_blank"><Image src={YoutubeIcon.src} height={50} width={50} alt="youtube" /></Link>
								<Link href="https://www.instagram.com/cogquiz" target="_blank"><Image src={InstaIcon.src} height={50} width={50} alt="insta" /></Link>
							</Box>
						</Box>
						<Box>
							<Typography className="copyright-text">Copyright © 2024 CogQuiz. All Rights Reserved.</Typography>
						</Box>
					</Box>
				</Box>

			</Container>
			<Box className="footer-image">
				<Image width={100} layout="responsive" height={100} src={FooterImage.src} alt="footer-wave" />
			</Box>
		</Box>
	);
};

export default Footer;
