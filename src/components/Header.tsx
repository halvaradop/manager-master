import { useRef, useEffect } from "react"
import { UnorderedList } from "./UnorderesList"
import { Button } from "./Button"
import logo from "../assets/logo.svg"
import menu from "../assets/hamburger.svg"
import close from "../assets/close.svg"

const headerMenu = ["Pricing", "Product", "About Us", "Careers", "Community"]

// add new variant of a project inside tailwind file
const Header = () => {
    const menuIconRef = useRef <HTMLImageElement> (null)
    const menuContainerRef = useRef <HTMLElement> (null)

    const handleMenuToggle = () => {
        const classContainer = menuContainerRef.current?.classList
        menuIconRef.current?.setAttribute("src", classContainer?.contains("hidden") ? close : menu)
        classContainer?.toggle("hidden")
    }

    useEffect(() => {
        const matchContainer = matchMedia("(min-width: 900px)")
        const toggleMatch = () => {
            menuContainerRef.current?.classList.add("hidden")
            menuIconRef.current?.setAttribute("src", menu)
        }
        matchContainer.addEventListener("change", toggleMatch)
        return () => matchContainer.removeEventListener("change", toggleMatch)
    }, [])


    return (
        <header>
            <nav className="base:w-10/12 base:h-24 base:mx-auto base:flex base:items-center base:justify-between">
                <figure className="w-11/12 h-20 mx-auto flex items-center justify-between relative z-10 base:w-auto base:h-full base:m-0">
                    <img src={logo} alt="logo icon" />
                    <img className="base:hidden" src={menu} alt="menu icon" ref={menuIconRef} onClick={handleMenuToggle} />
                </figure>
                <aside className="w-full min-h-screen hidden absolute top-0 left-0 bg-gradient-to-b from-gray/20 to-40% to-blue/60 base:flex-1 base:w-auto base:min-h-fit base:block base:relative base:bg-none" ref={menuContainerRef}>
                    <menu className="w-11/12 mx-auto mt-20 py-10 rounded-md shadow-sm shadow-neutral-100 bg-white sm:py-12 base:mt-0 base:p-0 base:shadow-none">
                        <UnorderedList className="base:flex-row base:justify-center base:gap-x-4 base:font-normal" variant="flex-200" color="blue-200" listItems={headerMenu} />
                    </menu>
                </aside>
                <Button className="hidden base:block" children="Get Started" size="baseFull" color="red-100" />
            </nav>
        </header>
    )
}

export { Header }