import React from "react";
import PropType from "prop-types";

export const Card = (props) => {
	return (
		<div>
			<div classNameName="container">
				<div classNameName="row">
					<div classNameName="col-3">
						<div className="card" style={{ width: "18rem" }}>
							<img
								src={props.img}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5>{props.title}</h5>
								<p className="card-text">{props.descripcion}</p>
								<a
									href={props.link}
									className="btn btn-primary">
									{props.tituboton}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
//Aqui ponemos los tipos de variables que se van a utilizar para poner las diferentes informaciones en la carta
Card.propTypes = {
	title: PropType.string,
	img: PropType.string,
	descripcion: PropType.string,
	link: PropType.string,
	tituboton: PropType.string,
};
export default Card;
