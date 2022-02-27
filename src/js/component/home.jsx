import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Jumbotrom from "./Jumbotrom.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotrom />
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card
							img="https://i.pinimg.com/564x/44/33/d8/4433d8888547381945c925f9e6d4278b.jpg"
							descripcion="The musician is originally from Toronto, Canada, and has a privileged voice that hovers between R&B, soul and even a bit of rock."
							tituboton="Go to wikpedia"
							link="https://es.wikipedia.org/wiki/Daniel_Caesar"
							title="Daniel Caesar"
						/>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card
							img="https://i.pinimg.com/564x/d0/a0/aa/d0a0aa686aee0cd2c9d9d257d9fcd531.jpg"
							descripcion="is an singer, musician, songwriter, record producer, co-founder and leader of the British band Coldplay. He is also known for his activism in campaigns in favor of fair trade and for being against hunger in the world."
							tituboton="Go to wikpedia"
							link="https://es.wikipedia.org/wiki/Chris_Martin"
							title="Chris Martin"
						/>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card
							img="https://i.pinimg.com/564x/49/29/6a/49296ad90cf00c7f6747f7d8b67b6571.jpg"
							descripcion="is an American R&B singer and songwriter. In 2020, Giveon released the EPs, Take Time and When It's All Said and Done."
							tituboton="Go to wikpedia"
							link="https://es.wikipedia.org/wiki/Giveon"
							title="Giveon Evans"
						/>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3">
						<Card
							img="https://i.pinimg.com/564x/88/0a/c2/880ac264ebeb7aea118f394da578d8b6.jpg"
							descripcion="he attended the University of Southern California, but dropped out in 2019 in order to pursue music. She is best known for her 2018 song Remember Me, which has over 90 million streams on Spotify."
							tituboton="Go to wikpedia"
							link="https://en.wikipedia.org/wiki/Umi_(singer) "
							title="Tierra Umi Wilson"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
