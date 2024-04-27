import "./basketBtn.css";
import basketSVG from "bundle-text:../../../assets/img/basket.svg";
import { router } from "../../main";

export function getBasketBtn()
{
    const basketBtn = document.createElement("a");
    basketBtn.classList.add("basket__btn");
    basketBtn.href = "/basket";
    basketBtn.innerHTML = basketSVG;

    basketBtn.addEventListener("click", function(event)
    {
        event.preventDefault();

        router.navigate("/basket");
    });

    return basketBtn;
}