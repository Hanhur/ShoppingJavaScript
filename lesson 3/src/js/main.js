import Navigo from "navigo";

import { getHeader } from "./components/header/header.js";
import { getPageContainer } from "./components/pageContainer/pageContainer.js";

const app = document.getElementById("app");

export const router = new Navigo('/');

const header = getHeader();
const pageContainer = getPageContainer();


router.on('/', async () => {
    pageContainer.innerHTML = "";
    const moduleMain = await import("./pages/mainPage.js");
    const mainPage = moduleMain.getMainPage();
    pageContainer.append(mainPage);
    header.setActiveLink("home");
});

router.on('/catalog', async () => {
    pageContainer.innerHTML = "";
    const moduleCatalog = await import("./pages/catalogPage.js");
    const catalogPage = moduleCatalog.getCatalogPage();
    pageContainer.append(catalogPage);
    header.setActiveLink("catalog");
});

router.on('/product/:title', async ({data}) => {
    pageContainer.innerHTML = "";
    const moduleProduct = await import("./pages/productPage.js");
    const productPage = moduleProduct.getProductPage(data.title);
    pageContainer.append(productPage);
    header.setActiveLink();
});

router.on('/basket', async () => {
    pageContainer.innerHTML = "";
    const moduleBasket = await import("./pages/basketPage.js");
    const basketPage = moduleBasket.getBasketPage();
    pageContainer.append(basketPage);
    header.setActiveLink("basket");
});

router.on('/order', async () => {
    if(true)
    {
        router.navigate('/');
        return;
    }

    pageContainer.innerHTML = "";
    const moduleOrder = await import("./pages/orderPage.js");
    const orderPage = moduleOrder.getOrderPage();
    pageContainer.append(orderPage);
    header.setActiveLink();
});

// Страница не найдена
router.notFound(async () => {
    pageContainer.innerHTML = "";
    const moduleNotFound = await import("./pages/notFoundPage.js");
    const notFoundPage = moduleNotFound.getNotFoundPage();
    pageContainer.append(notFoundPage);
    header.setActiveLink();
});

router.resolve();

app.append(header.header, pageContainer);