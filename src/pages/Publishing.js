import React from 'react'
import '../style/pagebox.css';


export const Publishing = ({ activeCart }) => {
    return (
        <div className={ activeCart === "publishing"  ? 'publishing page-box page-box-active' : 'publishing page-box' }>
            <div className="pageContent">
            WYDAWCA: SONIA DRAGA SP. Z O.O.<br/>
            PL. GRUNWALDZKI 8-10<br/>
            40-950 KATOWICE<br/>
            info@soniadraga.pl<br/>
            <br/><br/>
            <b>Tel.:</b> 327826477, 7826037, Fax: 322537728<br/>
            <b>Dział handlowy:</b> Danuta Czarnowska, 693420384, danuta@soniadraga.com.pl<br/>
            <b>Promocja:</b> Agnieszka Jedlińska, 695672067, agnieszkaj@soniadraga.com.pl<br/>
            <b>Redakcja:</b> Katarzyna Procner-Chlebowska, 693520384, kasia@soniadraga.com.pl<br/>
            <br/>
            <center>
                <a href="http://www.soniadraga.pl" target="_blank">www.soniadraga.pl</a>
                <br/><br/><br/></center>
            All rights reserved. Wszelkie prawa zastrzeżone. Kopiowanie, wypożyczanie, wykorzystywanie do wykonań publicznych i
            nadań RTV bez zezwolenia – zabronione.
            </div>
        </div>
    )
}
