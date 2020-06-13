import React, { FunctionComponent } from "react";
import AboutMeCard, { AboutMeCardProps } from "./AboutMeCard";
import TimeLine, { TimeLineElement } from "./TimeLine";
import {
  ExperienceList,
  BoardContainer,
  StyledBoard
} from "./../styles/Board.styles";

const aboutMeElements: AboutMeCardProps = {
  welcomeText: "Cześć. Jestem Maciej!",
  aboutMeText:
    "Na co dzień zajmuję się tworzeniem aplikacji internetowych wykorzystujących język JavaScript oraz Java. Jestem absolwentem Politechniki Poznańskiej, gdzie uzyskałem tytuł inżyniera na kierunku Informatyka. Aktualnie kontynuuję wspomniany kierunek na studiach drugiego stopnia. W pracy dbam o szczegóły oraz przejrzystość kodu. Programowanie jest moją pracą, ale również pasją."
};

const experienceTimeLineElements: TimeLineElement[] = [
  {
    title: "SNP Poland",
    dateRange: "2019-07-01 - obecnie",
    description: (
      <>
        W SNP Poland zajmuję się projektami, gdzie frontend oparty jest na
        języku JavaScript z wykorzystanie frameworka React, a backend na Javie
        Spring. Głównymi projektami, nad którymi pracowałem są:
        <ExperienceList>
          <li>
            <b>Biblioteka komponentów</b>, w których byłem odpowiedzialny za
            stworzenie zbioru reactowych komponentów, które następnie zostały
            wykorzystane w kolejnych projektach.
          </li>
          <li>
            <b>System zarządzania fakturami</b>, w którym odpowiadałem za
            wykonanie crona w języku Java, który raz dziennie wysyłał wszystkie
            faktury na zdalny serwer sftp.
          </li>
          <li>
            <b>System tworzenia i zarządzania elektronicznymi dokumentami</b>,
            gdzie wykonałem część projektu umożliwiającą klientowi tworzenie
            komponentów, które następnie były wykorzystane przy budowaniu
            schematów elektronicznych dokumentów oraz odpowiadałem za wykonanie
            innych zadań związanych z widokami aplikacji internetowej.
          </li>
          <li>
            <b>Partner Portal</b>,
            w którym byłem odpowiedzialny za implementację części wizualnej aplikacji webowej,
            stworzenie bazy danych przy użyciu silnika PostgreSQL, łączność z bazą danych 
            we frameworku NestJS oraz zapewnianie komunikacji aplikacji klienckiej z serwerem 
            wykorzystując technologię GraphQL.
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

const educationTimeLineElements: TimeLineElement[] = [
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

const projectsTimeLineElements: TimeLineElement[] = [
  {
    title:
      "Alert! - społecznościowy mobilny system powiadomień o wydarzeniach lokalnych",
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

const Board: FunctionComponent<{}> = () => {
  return (
    <BoardContainer>
      <StyledBoard>
        <AboutMeCard {...aboutMeElements} />
        <TimeLine
          title="Doświadczenie"
          icon="work"
          elements={experienceTimeLineElements}
        />
        <TimeLine
          title="Edukacja"
          icon="school"
          elements={educationTimeLineElements}
        />
        <TimeLine
          title="Moje projekty"
          icon="school"
          elements={projectsTimeLineElements}
        />
      </StyledBoard>
    </BoardContainer>
  );
};

export default Board;
