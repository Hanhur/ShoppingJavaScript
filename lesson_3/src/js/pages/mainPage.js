import { getMainTitle } from "../components/mainTitle/mainTitle.js";
import { getProductList } from "../components/productList/productList.js";
import { URL } from "../config.js";

// Главная страница
export function getMainPage()
{
    const page = document.createElement("div");
    page.classList.add("page", "main-page", "container");

    const mainTitle = getMainTitle("Главная страница");

    const product = getProductList();
    product.getProducts(`${URL}/wp-json/wp/v1/products?count=4`);

    page.append(mainTitle, product.productList);
    return page;
}