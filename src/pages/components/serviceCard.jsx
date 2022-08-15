import '../scss/serciveCard.scss'
import tgImg from '../../templates/icons/telegramCard.svg'
import mailImg from '../../templates/icons/mailCard.svg'

function ServiceCard(props){
        return(
            <div className="card">
                <div className="cardImage"><img src={props.image}/></div>
                <div className="cardText">
                    <div className="cardName"><h2>{props.name}</h2></div>
                    <div className="cardDescription"><h3>{props.description}</h3></div>
                    <div className="cardTechnologies"><h3>{props.technologies}</h3></div>
                    <div className="cardContact">
                        <a><img src={tgImg}/></a>
                        <a><img src={mailImg}/></a>
                    </div>
                </div>
            </div>
        )
}

export default ServiceCard