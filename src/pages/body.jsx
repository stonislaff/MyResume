import './scss/body.scss';
import background from '../templates/background.mp4'
import myphoto from '../templates/myphoto.jpg'
import  './components/skill'
import Skill from "./components/skill";
import BackgroundVideo from "./components/background";
function Body() {
    document.title = 'Stanislav Sobkovich - Resume'
    return (
        <div className="Body">
            <body>
                <BackgroundVideo/>
                <div className="myPhoto">
                    <img src={myphoto}></img>
                </div>
                <div className="myName">
                    <h1>Stanislav Sobkovich</h1>
                </div>
                <div className="information">
                    <div className="aboutMe">
                        <h1>About me</h1>
                        <h3>Date of birth: <span>03.07.2003</span></h3>
                        <h3>Region: <span>Ukraine, Rivne</span></h3>
                        <h3>Education: <a href="https://rcnubip.org.ua/" target="_new"><span>this college</span></a></h3>
                        <h3>Speciality:	<span>121, Software Engineering</span></h3>
                    </div>
                    <div className="languagesList">
                        <h1>Languages</h1>
                        <h3>Ukrainian: <span id="ukrainian">Native</span></h3>
                        <h3>Russian: <span id="russian">Native</span></h3>
                        <h3>English: <span id="english">B1</span></h3>
                    </div>
                    <div className="skillsList">
                        <h1>Skills</h1>
                        <Skill marks={4} name={"JS"}/>
                        <Skill marks={4} name={"React"}/>
                        <Skill marks={3} name={"C#"}/>
                        <Skill marks={2} name={"Unity"}/>
                        <Skill marks={3} name={"WPF"}/>
                        <Skill marks={3} name={"WinForms"}/>
                        <Skill marks={5} name={"Python"}/>
                        <Skill marks={3} name={"Flask"}/>
                        <Skill marks={5} name={"Aiogram"}/>
                        <Skill marks={5} name={"Telebot"}/>
                        <Skill marks={2} name={"Beautiful Soup"}/>
                        <Skill marks={3} name={"Selenium"}/>
                        <Skill marks={5} name={"HTML"}/>
                        <Skill marks={5} name={"CSS"}/>
                        <Skill marks={4} name={"SCSS/SAAS"}/>
                        <Skill marks={4} name={"Responsive layout"}/>
                        <Skill marks={3} name={"MongoDB"}/>
                        <Skill marks={5} name={"SQlite"}/>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default Body;
