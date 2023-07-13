import { UnorderedList } from "./UnorderesList"
import { imagesCompanies } from "../utils/images"
import logo from "../assets/logo.svg"

const footerAbout = ["Home", "Pricing", "Products", "About Us"]
const footerCommunity = ["Careers", "Community", "Privacy Policy"]

const Footer = () => {
    return (
        <footer className="w-full bg-blue-200">
            <section className="w-11/12 mx-auto py-10 flex items-center flex-col gap-y-10">
                <article className="w-full grid grid-cols-2 justify-items-center">
                    <UnorderedList className="" variant="flex-100" listItems={footerAbout} />
                    <UnorderedList className="" variant="flex-100" listItems={footerCommunity} />
                </article>
                <figure className="w-10/12 flex items-center justify-between gap-x-8">
                    {imagesCompanies.map((link, key) => (
                        <img className="w-8" key={key} src={link} alt="company icon" />
                    ))}
                </figure>
                <img src={logo} alt="logo icon" />
                <p className="text-blue text-sm">Copyright 2023. All Rights Reserved</p>
            </section>
        </footer>
    )
}

export { Footer }