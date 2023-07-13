import { UnorderedList } from "./UnorderesList"
import { imagesCompanies } from "../utils/images"
import logo from "../assets/logo.svg"
import { Input } from "./Input"

const footerAbout = ["Home", "Pricing", "Products", "About Us"]
const footerCommunity = ["Careers", "Community", "Privacy Policy"]

const Footer = () => {
    return (
        <footer className="w-full bg-blue-200">
            <section className="w-11/12 mx-auto py-14 flex items-center flex-col gap-10 base:w-10/12 base:py-12 base:grid base:grid-cols-[auto_1fr_1fr] base:gap-x-5">
                <form className="w-full max-w-md flex items-center justify-center gap-x-3 base:col-start-3">
                    <Input className="w-full" color="blue-100" size="baseFull2" placeholder="Updates in your inbox..." />
                    <Input type="submit" value="Go" color="red-100" size="baseFull" />
                </form>
                <article className="w-full grid grid-cols-2 justify-items-center base:gap-x-5 base:col-start-2 base:row-start-1 base:row-span-2">
                    <UnorderedList className="" variant="flex-100" listItems={footerAbout} />
                    <UnorderedList className="" variant="flex-100" listItems={footerCommunity} />
                </article>
                <figure className="w-10/12 max-w-sm flex items-center justify-between gap-x-8 base:gap-x-3">
                    {imagesCompanies.map((link, key) => (
                        <img className="w-8 base:w-6 base:h-6" key={key} src={link} alt="company icon" />
                    ))}
                </figure>        
                <img className="base:-order-1" src={logo} alt="logo icon" />
                <p className="text-blue text-sm text-center base:text-end">Copyright 2023. All Rights Reserved</p>
            </section>
        </footer>
    )
}

export { Footer }