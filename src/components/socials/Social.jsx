import { Route, useNavigate } from "react-router"
import { Button } from "../ui/button"
import githubLogo from "../../assets/github-logo.png"
import goodreadsLogo from "../../assets/goodreads.svg"
import linkedInLogo from "../../assets/linkedin.png"

export default function Social(){
    const navigate = useNavigate()
    return(
        <div>
            <ul>
                <li>
                    <Button variant= "outline">
                        <a href="https://github.com/qchris101/" target="_blank">
                        {<img className="w-6 h-6" src={githubLogo}/>}
                        </a>
                    </Button>
                    <Button variant= "outline">
                        <a href="https://www.goodreads.com/user/show/186102119-christian-quintana" target="_blank">
                        {<img className="w-6 h-6" src={goodreadsLogo}/>}
                        </a>
                    </Button>
                    <Button variant= "outline">
                        <a href="https://www.linkedin.com/in/christian-quintana-/" target="_blank">
                        {<img className="w-6 h-6" src={linkedInLogo}/>}
                        </a>
                    </Button>
                </li>
            </ul>
        </div>
    )
}