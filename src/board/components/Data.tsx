import React from "react";
import { AboutMeCardProps } from "./AboutMeCard";
import { TimeLineElement } from "./TimeLine";
import { ExperienceList } from "../styles/Board.styles";

export const aboutMeElements: AboutMeCardProps = {
    welcomeText: "Cześć. Jestem Maciej!",
    aboutMeText: `Na co dzień zajmuję się tworzeniem aplikacji internetowych wykorzystujących 
    język JavaScript oraz Java. Jestem absolwentem Politechniki Poznańskiej, gdzie uzyskałem 
    tytuł inżyniera na kierunku Informatyka. Aktualnie kontynuuję wspomniany kierunek na studiach
    drugiego stopnia. Ze względu na moje zainteresowania związane z prowadzeniem projektów 
    informatycznych w marcu 2021 roku rozpocząłem studia podyplomowe na Wyższej Szkole Bankowiej,
    kierunku Zarządzanie projektami. W pracy dbam o szczegóły, przejrzystość kodu oraz skuteczną komunikację
    z klietami i współpracownikami. Ważna dla mnie jest terminowość w realizacji zadań i projektów. 
    Programowanie jest moją pracą, ale również pasją.`
};

export const experienceTimeLineElements: TimeLineElement[] = [
    {
        title: "SNP Poland",
        dateRange: "2019-07-01 - obecnie",
        description: (
            <>
                W SNP Poland zajmuję się projektami, gdzie frontend oparty jest na
                języku TypeScript z wykorzystanie frameworka React, a backend na Javie
                Spring i NestJs. Głównymi projektami, nad którymi pracowałem są:
                <ExperienceList>
                    <li>
                        <b>Software download portal</b>,
                        czyli system służący do pobierania oprogramowania zawiązanego z SAP. W tym projekcie odpowiadałem za
                        zarządzanie zespołem, komunikację z klietem wewnętrznym, prowadzenie spotkań, ustalanie i prioryteryzację zadań.
                        Do moich obowiązków należał również development frontendu.
                    </li>
                    <li>
                        <b>Partner Portal</b>,
                        w którym byłem odpowiedzialny za implementację części wizualnej aplikacji webowej,
                        stworzenie bazy danych przy użyciu silnika PostgreSQL, łączność z bazą danych
                        we frameworku NestJS oraz zapewnianie komunikacji aplikacji klienckiej z serwerem
                        wykorzystując technologię GraphQL.
                    </li>
                    <li>
                        <b>System zarządzania fakturami</b>,
                        w którym odpowiadałem za wykonanie crona w języku Java, który raz dziennie wysyłał wszystkie
                        faktury na zdalny serwer sftp.
                    </li>
                    <li>
                        <b>Biblioteka komponentów</b>,
                        w których byłem odpowiedzialny za stworzenie zbioru reactowych komponentów,
                        które następnie zostały
                        wykorzystane w kolejnych projektach.
                    </li>
                    <li>
                        <b>System tworzenia i zarządzania elektronicznymi dokumentami</b>,
                        gdzie wykonałem część projektu umożliwiającą klientowi tworzenie
                        komponentów, które następnie były wykorzystane przy budowaniu
                        schematów elektronicznych dokumentów oraz odpowiadałem za wykonanie
                        innych zadań związanych z widokami aplikacji internetowej.
                    </li>
                </ExperienceList>
            </>
        )
    },
    {
        title: "F.H. Mogilmed",
        dateRange: "2018-07-01 - 2018-10-01",
        description: (
            <>
                W firmie F.H. Mogilmed byłem odpowiedzialny za obsługę programu Kamsoft
                służącego do zarządzania aptekami.
            </>
        )
    }
];

export const educationTimeLineElements: TimeLineElement[] = [
    {
        title: "Wyższa Szkoła Bankowa w Poznaniu",
        dateRange: "2021-03-01 - obecnie",
        description: (
            <>
                Studia podyplomowe na kierunku Zarządzanie projektami - Akademia Project Managera.
            </>
        )
    },
    {
        title: "Politechnika Poznańska",
        dateRange: "2020-03-01 - obecnie",
        description: (
            <>
                Studia drugiego stopnia na kierunku Informatyka o specjalności gry i
                technologie internetowe na wydziale Informatyki.
            </>
        )
    },
    {
        title: "Politechnika Poznańska",
        dateRange: "2016-10-01 - 2020-02-13",
        description: (
            <>
                Studia pierwszego stopnia na kierunku Informatyka na wydziale
                Informatyki.
            </>
        )
    },
    {
        title: "Liceum ogólnokształcące w Mogilnie",
        dateRange: "2013-09-01 - 2016-05-20",
        description: <>Profil matematyczno-fizyczny.</>
    }
];

export const projectsTimeLineElements: TimeLineElement[] = [
    {
        title: "Alert! - społecznościowy mobilny system powiadomień o wydarzeniach lokalnych",
        dateRange: "2020",
        description: (
            <>
                Ten projekt to moja praca dyplomowa. Jest to aplikacja mobilna, która w
                jednym miejscu gromadzi i udostępnia użytkownikom informacje na temat
                wypadków i awarii, a także wydarzeń kulturalnych i sportowych. W
                projekcie byłem odpowiedzialny za logikę oraz część widoków aplikacji
                mobilnej napisanej w języku Kotlin.
            </>
        )
    }
];
