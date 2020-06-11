import React from 'react'
import '../style/pagebox.css';

export const Summary = ({ activeCart }) => {
    return (
        <div className={ activeCart === "summary" ? 'summary page-box page-box-active' : 'summary page-box' }>
            <div className="pageContent pageContent-roll ">
                Najnowsza odsłona bestsellerowej serii o Cottonie Malone<br/>
                <br/>
                Niezrównany Cotton Malone ściga się z czasem, by odnaleźć zbiegłego z konklawe kardynała. Musi także dotrzeć do rycerzy Zakonu Maltańskiego i członków starożytnej sekty <i>Secreti</i>. Poszukiwania doprowadzą go do skrywanych przez wieki tajemnic…<br/>
                <br/>
                <i>Intrygujący thriller osadzony w kontekście historycznym. Berry&nbsp;jest&nbsp;mistrzem gatunku. </i><br/>
                „Associated Press”<br/>
                <br/>
                <i>Urzekające. . . Fani Dana Browna będą się dobrze bawić. </i><br/>
                „Publisher’s Weekly”<br/>
                <br/>
                <i>Kolejna powieść Berry’ego, która nie tylko jest rozrywką na wysokim poziomie, ale także rodzi głębokie i niepokojące pytania.</i> <br/>
                „Fredericksburg Free Lance-Star”<br/>
                <br/>
                Streszczenie:<br/>
                Po śmierci papieża rozpoczynają się przygotowania do kolejnego konklawe, do Watykanu przybywają kardynałowie. Kastor Gallo, kontrowersyjny kardynał, który popadł w niełaskę Watykanu, ucieka&nbsp;z&nbsp;Rzymu na Maltę. Tak próbuje odszukać dokument z IV wieku, z&nbsp;czasów Konstantyna Wielkiego.<br/>
                <br/>
                Były pracownik Wydziału Sprawiedliwości, Cotton Malone, przebywa nad włoskim jeziorem Como, tropiąc losy legendarnej korespondencji Winstona Churchilla i Benita Mussoliniego, która&nbsp;zaginęła w 1945 roku. Ujawnienie jej treści mogłoby wywrócić do góry nogami historię, jaką zna świat. Śladami Malone’a podąża jednak ktoś jeszcze…<br/>
                <br/>
                Pościgiem zaczyna interesować się Zakon Maltański, zgromadzenie o ponad dziewięćsetletniej historii, jedyne, które dotrwało czasów współczesnych. Dziś prowadzą przede wszystkim działalność humanitarną, lecz w ich szeregach znajdują się także członkowie starożytnej sekty Secreti, która zamierza wpłynąć na trwające właśnie konklawe.<br/>
                <br/>

            </div>
        </div>
    )
}
