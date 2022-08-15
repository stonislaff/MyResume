import '../scss/skill.scss'
import star from '../../templates/stars.svg'
import emptyStar from '../../templates/empty_star.svg'
function Skill(props){
    let starArr = []
    let emptyStarCount = 5 - props.marks
    for (let i = 0;i < props.marks;i++){
        starArr.push(<div className="starImg"><img src={star}/></div>)
    }
   for(let j = 0;j < emptyStarCount;j++){
       starArr.push(<div className="emptyStarImg"><img src={emptyStar}/></div>)
   }
    return(
        <div className="skill">
            <div className="skillName">
                <h3>{props.name}</h3>
            </div>
            <div className="skillMarks">
                {starArr}
            </div>
        </div>
    )
}

export default Skill