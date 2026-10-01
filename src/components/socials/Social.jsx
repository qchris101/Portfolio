import { Route, useNavigate } from "react-router"
import { Button } from "../ui/button"


export default function Social( {url, img} ) {
    const navigate = useNavigate()
    return(
        <div>
            <ul className="flex  space-x-2 gap-2">
                <li>
                    <Button variant= "outline" className="p-4">
                        <a href={url} target="_blank">
                            <img className="w-6 h-6" src={img} alt="Social Link" />
                        </a>
                    </Button>
                </li>
            </ul>
        </div>
    )
}