import git from '../../templates/icons/gitCard.svg'
import planet from '../../templates/icons/planetCard.svg'
import '../scss/serciveCard.scss'

function ProjectCard(props){
    let linkArr = []
    linkArr.push(
        <a href={props.links[0]} target="_new"><img src={git}/></a>
    )
    if (props.links.length === 2){
        linkArr.push(
            <a href={props.links[1]} target="_new"><img src={planet}/></a>
        )
    }
    return(
        <div className="card">
            <div className="cardImage">
                <img src={props.image}/>
            </div>
            <div className="cardText">
                <div className="cardName">
                    <h1>{props.title}</h1>
                </div>
                <div className="cardDescription">
                    <h3>{props.description}</h3>
                </div>
                <div className="cardTechnologies">
                    <h3>{props.technologies}</h3>
                </div>
                <div className="cardContact">
                    {linkArr}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard