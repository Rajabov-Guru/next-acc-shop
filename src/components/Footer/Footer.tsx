import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex flex-shrink-0 h-[70px] rounded-[6px] w-full bg-app_secondary items-center pr-6 text-app_secondary_text justify-end">
            <p>
                Solution for making moneeeey! <Link className="text-white" href="http://google.com">@some_link</Link>
            </p>
        </footer>
    );
};

export default Footer;
