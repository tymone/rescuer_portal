import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <div className='homePage'>
        <h1>Strona przeznaczona do zarządzania czasem pracy pracowników.</h1>
        <p>Strona <u>aktualnie</u> podzielona na 5 podsekcji, z czego:</p>
        <p><strong>Strona główna</strong> - w której znajdą się aktualności z branży lub ważne informacje dla pracowników.</p>
        <p><strong>Harmonogram</strong> - tworzenie harmonogramu pracy dostępny dla pracowników oraz edycje na bierząco.</p>
        <p><strong>Drużyna</strong> - Skład drużyny ratowniczej oraz informacje o szkoleniach/badaniach/ćwiczeniach, możliwość dodawania, edycji oraz usuwania pracownika z listy.</p>
        <p><strong>Lista zadań</strong> - Lista zadań do zrobienia oraz zadań zrobionych.</p>
        <p><strong>Kontakt</strong> - kontakt do poszczególnych osób.</p>

        <h1>Docelowo:</h1>
        <p>pełna synchronizacja z kalendarzem</p>
        <p>podział dostępu na grupy zarejestrowanych użytkowników</p>
      </div>
    );
  }
}
