import { router } from "../main.js";

import { getMainTitle } from "../components/mainTitle/mainTitle.js";
import { getDesc } from "../components/desc/desc.js";

// Корзина
export function getBasketPage()
{
    const page = document.createElement("div");
    page.classList.add("page", "basket-page", "container");

    const mainTitle = getMainTitle("Корзина");
    const desc = getDesc("Страница в разработке");

    // Ссылка оформления заказа
    let linkOrder = document.createElement("a");
    linkOrder.classList.add("btn");
    linkOrder.href = "/order";
    linkOrder.textContent = "Оформление заказа";

    linkOrder.addEventListener("click", function(event)
    {
        event.preventDefault();

        router.navigate('/order');
    });

    page.append(mainTitle, desc, linkOrder);
    return page;
}