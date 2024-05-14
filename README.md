# System zarządzania cyfrową biblioteką

## Spis treści
1. [Opis projektu](#opis-projektu)
2. [Funkcjonalności](#funkcjonalności)
3. [Instrukcje obsługi](#instrukcje-obsługi)
4. [Struktura projektu MVC](#struktura-projektu-mvc)

## Opis projektu
Projekt polega na utworzeniu aplikacji do zarządzania kolekcją książek elektronicznych. Użytkownicy będą mieli możliwość przeglądania, dodawania, edycji i usuwania książek z katalogu. Projekt zostanie zrealizowany w oparciu o architekturę MVC (Model-View-Controller).

## Funkcjonalności
- Przeglądanie katalogu książek.
- Dodawanie nowych książek do kolekcji.
- Edycja informacji o istniejących książkach.
- Usuwanie książek z katalogu.

## Instrukcje obsługi
1. **Instalacja**
   - Sklonuj repozytorium: `git clone https://github.com/olegric/MVC-Project-Zad1`
   - Zainstaluj zależności: `npm install`

2. **Uruchomienie aplikacji**
   - Uruchom serwer: `npm start`
   - Otwórz przeglądarkę i przejdź do adresu `http://localhost:3000`

3. **Obsługa aplikacji**
   - Przeglądanie katalogu książek: Po uruchomieniu aplikacji przejdź do strony głównej, gdzie wyświetlona zostanie lista dostępnych książek.
   - Dodawanie nowych książek: Kliknij link "Dodaj Nową Książkę" i wypełnij formularz dodawania książki.
   - Edycja informacji o książkach: Kliknij link "Edytuj" obok książki, którą chcesz edytować, i wprowadź nowe dane do formularza edycji.
   - Usuwanie książek: Kliknij przycisk "Usuń" obok książki, którą chcesz usunąć, aby ją usunąć z katalogu.

## Struktura projektu MVC
- **Model (models):** Definicja modelu książki (np. tytuł, autor, rok wydania).
- **Kontroler (controllers):** Obsługa żądań HTTP, interakcja z modelem i przekazywanie danych do widoku.
- **Widok (views):**
   - Widok katalogu książek.
   - Formularz dodawania nowej książki.
   - Formularz edycji informacji o książce.
