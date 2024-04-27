import { getMainTitle } from "../components/mainTitle/mainTitle.js";

// Каталог
export function getNotFoundPage()
{
    const page = document.createElement("div");
    page.classList.add("page", "catalog-page", "container");

    const mainTitle = getMainTitle("Страница не найдена");

    page.append(mainTitle);
    return page;
}