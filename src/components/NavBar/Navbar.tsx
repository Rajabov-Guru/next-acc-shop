import {MyRoute, routes} from "@/lib/consts/routes";
import Link from "next/link";

type NavbarItem = {
    title: string
    route: MyRoute
}

const navbarItems: NavbarItem[] = [
    {
        title: "Контакты",
        route: routes.contacts
    },
    {
        title: "Правила магазина",
        route: routes.rules
    },
    {
        title: "FAQ",
        route: routes.faq
    },
    {
        title: "Карта сайта",
        route: routes.map
    },
    {
        title: "ПК",
        route: routes.policy
    },
]

const Navbar = () => {
    return (
        <div className="flex gap-[14px] text-[14px] flex-col items-center sm:flex-row">
            {navbarItems.map((item) => (
                <Link
                    key={item.route}
                    href={item.route} className="h-full text-center flex align-middle font-bold">
                    <div className="h-min my-auto">
                        {item.title}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Navbar;
