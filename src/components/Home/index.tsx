import ProfileImage from '../../assets/avatar.jpeg';
import CONTACTS from '../Contact/data';
import './styles.css';

const Home = () => (
	<section class='home section' id='home'>
		<div class='intro'>
			<h2 style="
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
">I provide professional web development services to IT companies.</h2>
			<img src={ProfileImage} alt='logo' crossorigin='anonymous' />
			<h1>Robert Wang</h1>
			<span>Senior Software Engineer</span>
			<ul class='social-icons'>
				<li>
					<a href={`mailto:${CONTACTS.email}`} rel='noreferrer' target='_blank'>
						<i class='fa-solid fa-envelope' />
					</a>
				</li>
				<li>
					<a
						href={`tel:${CONTACTS.phoneNumber}`}
						rel='noreferrer'
						target='_blank'
					>
						<i class='fa-brands fa-whatsapp' />
					</a>
				</li>
			</ul>

			<div class='btn btn-default'>
				<a href='#contact'>Contact me</a>
			</div>

			<div class='scroll-down'>
				<h3>Scroll For More</h3>
				<i class='fa-solid fa-angles-down' />
			</div>
		</div>
	</section>
);

export default Home;
