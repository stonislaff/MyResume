import '../scss/footer.scss'
import linkedin from '../../templates/icons/linkedin.svg'
import instagram from '../../templates/icons/instagram.svg'
import telegram from '../../templates/icons/telegram.svg'
import git from '../../templates/icons/git.svg'
function Footer(){
    return(
                <footer>
                    <div className="icons">
                        <div className="icon">
                            <a href="https://www.linkedin.com/in/stanislav-sobkovich-b8350a247/" target="_new"><img src={linkedin}/></a>
                        </div>
                        <div className="icon">
                            <a href="https://github.com/stonislaff" target="_new"><img src={git}/></a>
                        </div>
                        <div className="icon">
                            <a href="https://t.me/stonislaff" target="_new"><img src={telegram}/></a>
                        </div>
                        <div className="icon">
                            <a href="https://www.instagram.com/stonislaff/" target="_new"><img src={instagram}/></a>
                        </div>
                    </div>
                </footer>
    )
}


export default Footer