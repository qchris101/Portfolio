import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { NavLink } from "react-router"

const links = [
    { to: "/", label: "Home"},
    { to: "/about", label: "About"},
    { to: "/projects", label: "Projects"},
    { to: "/resume", label: "Resume"},
]

export default function Navbar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {links.map(({ to, label }) => (
                    <NavigationMenuItem key={to}>
                        <NavigationMenuLink
                            classname={navigationMenuTriggerStyle()}
                            render={<NavLink to={to} end={to === "/"} />}
                            >
                            {label}
                            </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}