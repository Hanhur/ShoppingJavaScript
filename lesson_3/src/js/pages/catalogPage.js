import { getMainTitle } from "../components/mainTitle/mainTitle.js";
import { getProductList } from "../components/productList/productList.js";
import { URL } from "../config.js";

// Каталог
export function getCatalogPage()
{
    const page = document.createElement("div");
    page.classList.add("page", "catalog-page", "container");

    const mainTitle = getMainTitle("Каталог");

    const product = getProductList();
    product.getProducts(`${URL}/wp-json/wp/v1/products`);

    page.append(mainTitle, product.productList);
    return page;
}