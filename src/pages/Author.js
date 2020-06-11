import React from 'react'
import '../style/pagebox.css';
import autor from '../images/autor.png'
export const Author = ({ activeCart }) => {
    return (
        <div className={ activeCart === "author"  ? 'author page-box page-box-active' : 'author page-box' }>
            <div className="pageContent">
            <img src={ autor } className="autor" alt="autor" />
            
            <b>Steve Berry</b> jest z wykształcenia prawnikiem. Jego przygoda z&nbsp;pisaniem zaczęła się w 1990 roku. Zadebiutował powieścią <i>Bursztynowa Komnata</i>, która natychmiast stała się bestsellerem. Łączy nakład jego książek przekroczył już 23 miliony egzemplarzy, przetłumaczono je na&nbsp;40 języków i sprzedano do 51 krajów. Razem z żoną Elizabeth założył History Matters, organizację zajmującą się ochroną dziedzictwa historycznego. Jest również założycielem i członkiem International Thriller Writers, grupy zrzeszającej ponad 2600 pisarzy z&nbsp;całego świata. Przez trzy lata pełnił funkcję jej współprzewodniczącego. W ankiecie NPR przeprowadzonej w 2010 roku jego książka <i>Dziedzictwo templariuszy</i> znalazła się w setce najlepszych thrillerów wszech czasów. Jest laureatem m.in. The Spirit of Anne Frank Human Writes Award oraz International Thriller Writers Silver Bullet Award.
            <br/><br/>Więcej na stronie autora: <a href="https://www.steveberry.org" target="blank">www.steveberry.org</a>
            </div>
        </div>
    )
}
