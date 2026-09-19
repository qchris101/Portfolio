import { Route, useNavigate } from "react-router"
import { Button } from "../ui/button"
import githubLogo from "../../assets/github-logo.png"

export default function Social(){
    const navigate = useNavigate()
    return(
        <div>
            <ul>
                <li>
                    <Button variant= "outline">
                        <a href="https://github.com/qchris101/">
                        {<img className="w-6 h-6" src={githubLogo}/>}
                        </a>
                    </Button>
                </li>
            </ul>
        </div>
    )
}