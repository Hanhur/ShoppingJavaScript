import { getMainTitle } from "../components/mainTitle.js";
import { getDesc } from "../components/desc.js";

// Страница товара
export function getProductPage(title)
{
    const page = document.createElement("div");
    page.classList.add("page", "product-page", "container");

    const mainTitle = getMainTitle(title);
    const desc = getDesc("Страница в разработке");

    page.append(mainTitle, desc);
    return page;
}