import { getNavigationLink } from "../navigationLink/navigationLink";
import { getLogo } from "../logo/logo";
import { getBasketBtn } from "../basketBtn/basketBtn";
import "./header.css";

// Создать шапку
export function getHeader()
{
    const header = document.createElement("header");
    header.classList.add("header");

    const container = document.createElement("div");
    container.classList.add("container", "header__container");

    const logo = getLogo();
    logo.classList.add("header__logo");

    const basketBtn = getBasketBtn();

    const nav = document.createElement("nav");
    nav.classList.add("header__navigation");

    const links = {
        "home": getNavigationLink("/", "Главная страница"),
        "catalog": getNavigationLink("/catalog", "Каталог"),
        "basket": basketBtn,
    }

    for(const oneLink in links)
    {
        nav.append(links[oneLink]);
    }

    const setActiveLink = function(link = "")
    {
        for(const oneLink in links)
        {
            links[oneLink].classList.remove("active");
        }

        if(link !== "")
        {
            links[link].classList.add("active");
        }
    }
    
    container.append(logo, nav, basketBtn);
    header.append(container);

    return {
        header,
        setActiveLink
    }
}
