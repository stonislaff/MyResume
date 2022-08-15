import '../scss/serciveCard.scss'


function ServiceCard(props){
        return(
            <div className="card">
                    <div className="cardName"><h2>{props.name}</h2></div>
                    <div className="cardDescription"><h3>{props.description}</h3></div>
                    <div className="cardTechnologies"><h3>{props.technologies}</h3></div>
                    <div className="cardImage"><img src={props.image}/></div>
            </div>
        )
}

export default ServiceCard