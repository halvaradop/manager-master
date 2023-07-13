import logo from "../assets/logo.svg"
import menu from "../assets/hamburger.svg"
import close from "../assets/close.svg"
import { useRef } from "react"

const headerMenu = ["Pricing", "Product", "About Us", "Careers", "Community"]

const Header = () => {
    const menuIconRef = useRef <HTMLImageElement> (null)
    const menuContainerRef = useRef <HTMLElement> (null)

    const handleMenuToggle = () => {
        const classContainer = menuContainerRef.current?.classList
        menuIconRef.current?.setAttribute("src", classContainer?.contains("hidden") ? menu : close)
        classContainer?.toggle("hidden")
    }

    return (
        <header>
            <nav>
                <figure className="w-11/12 h-20 mx-auto flex items-center justify-between relative z-10">
                    <img src={logo} alt="logo icon" />
                    <img src={menu} alt="menu icon" ref={menuIconRef} onClick={handleMenuToggle} />
                </figure>
                <aside className="w-full min-h-screen hidden absolute top-0 left-0 bg-gradient-to-b from-gray/20 to-40% to-blue/60" ref={menuContainerRef}>
                    <menu className="w-11/12 mx-auto mt-20 py-10 rounded-md shadow-sm shadow-neutral-100 bg-white">
                        <ul className="flex items-center flex-col gap-y-5 text-blue-200 text-base font-bold">
                            {headerMenu.map((item, key) => (
                                <li key={key}><a href="#">{item}</a></li>
                            ))}
                        </ul>
                    </menu>
                </aside>
            </nav>
        </header>
    )
}

export { Header }