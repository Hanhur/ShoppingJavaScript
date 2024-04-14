import { getMainTitle } from "../components/mainTitle/mainTitle.js";
import { getDesc } from "../components/desc/desc.js";

// Каталог
export function getOrderPage()
{
    const page = document.createElement("div");
    page.classList.add("page", "catalog-page", "container");

    const mainTitle = getMainTitle("Оформление");
    const desc = getDesc("Здесь оформление заказа");

    page.append(mainTitle, desc);
    return page;
}