**Uruchomienie aplikacji**

Aby uruchomić tę aplikację internetową, należy zainstalować wszystkie zależności wymienione w pliku package.json.

Aby to zrobić należy otworzyć terminal w folderze projektu i uruchomić poniższą komendę.
-	npm install

Ta komenda spowoduje pobranie i zainstalowanie wszystkich modułów wymienionych w pliku package.json. Po zakończeniu instalacji można uruchomić aplikację. W pliku package.json dostępne są dwie komendy skryptów:
•	start: Uruchamia aplikację w trybie produkcyjnym.
•	dev: Uruchamia aplikację z nodemon w trybie deweloperskim, co oznacza, że serwer będzie automatycznie restartowany po wprowadzeniu zmian w kodzie.

Aby uruchomić aplikację w trybie deweloperskim, można użyć poniższej komendy:
-	npm run dev

Lub w trybie produkcyjnym:
-	npm start

Po uruchomieniu aplikacji, można zobaczyć wiadomość na konsoli o tym, na którym porcie działa serwer (domyślnie na porcie 3000). Teraz można otworzyć przeglądarkę i przejść pod adres http://localhost:3000 (lub inny port). Po przejściu na podany adres aplikacja powinna się uruchomić. Trzeba jednak pamiętać, że przed uruchomieniem aplikacji trzeba mieć skonfigurowaną bazę danych.
Kroki uruchomienia aplikacji:
	Aby doszło do uruchomienia aplikacji musi ona przejść przez pewne kroki, które zachodzą w plikach app.js i www.js. Poniżej przedstawiam opis tych kroków.
1.	Importowanie modułów:
W pierwszym kroku importowane są wszystkie niezbędne moduły. W tym przypadku używane są moduły takie jak http, express, path oraz inne, które są niezbędne do obsługi żądań HTTP, zarządzania ścieżkami i innych aspektów aplikacji.

2.	Konfiguracja aplikacji Express w pliku app.js:
W pliku app.js definiowane są wszystkie ustawienia i konfiguracje dla aplikacji Express. Należy do tego m.in.:
•	Konfiguracja silnika szablonów (w tym przypadku EJS).
•	Konfiguracja obsługi sesji za pomocą express-session [22].
•	Ustawienia parserów dla danych wejściowych.
•	Inicjalizacja połączenia z bazą danych.
•	Dodawanie middleware, takich jak globalne middleware dla zmiennych sesyjnych.
•	Ustawienia statycznych plików.
•	Podłączanie routingu dla różnych ścieżek.

3.	Importowanie aplikacji Express do pliku bin/www.js:
W pliku www.js importuje się obiekt aplikacji Express z pliku app.js. 

4.	Ustalanie portu w pliku www.js:
Normalizacja portu, który ma być używany przez serwer. Port pobierany jest z zmiennych środowiskowych lub domyślnie ustawiany na 3000.

5.	Tworzenie serwera HTTP w pliku www.js:
Tworzenie serwera HTTP, który będzie obsługiwał żądania. W tym przypadku korzystam z modułu http dostępnego w Node.js.

6.	Nasłuchiwanie na zdarzenie "listening" w pliku www.js:
Po utworzeniu serwera, nasłuchiwanie na zdarzenie "listening", które występuje, gdy serwer jest gotowy do obsługi żądań.

7.	Obsługa błędów serwera w pliku www.js:
Nasłuchiwanie na zdarzenie "error" w celu obsługi błędów związanych z nasłuchiwaniem, takich jak problem z dostępem do portu.

8.	Uruchomienie serwera w pliku www.js:
Ostateczny krok to faktyczne uruchomienie serwera na określonym porcie.

Podsumowując, uruchamianie aplikacji w Node.js i Express obejmuje konfigurację aplikacji, utworzenie serwera HTTP, nasłuchiwanie na zdarzenia i ostateczne uruchomienie serwera. Proces ten umożliwia obsługę żądań HTTP, routing, zarządzanie sesjami, dostęp do bazy danych i inne funkcje zdefiniowane w kodzie aplikacji.

-----------------------------------------------------------------------

**Połączenie z bazą danych**

W celu efektywnego zarządzania infrastrukturą aplikacji oraz łatwiejszego przenoszenia pomiędzy środowiskami deweloperskimi a produkcyjnymi, zdecydowołem się na użycie narzędzia Docker. Poniżej przedstawiam proces połączenia z bazą danych w kontekście Docker Compose, który umożliwia zdefiniowanie, konfigurację i uruchomienie wielu kontenerów jednocześnie.

W moim projekcie wykorzystuje plik docker-compose.yml, w którym definiuje usługi, takie jak MySQL oraz PHPMyAdmin, oraz ich konfiguracje.

Aby uruchomić to środowisko deweloperskie, wystarczy użyć tego polecenia w terminalu.
-	docker-compose up

To spowoduje uruchomienie kontenerów zdefiniowanych w pliku docker-compose.yml, w tym bazy danych MySQL.
	
W celu ustanowienia połączenia z bazą danych MySQL, używam biblioteki Sequelize. Plik sequelize.js zawiera konfigurację połączenia oraz jest eksportowany jako obiekt sequelize, który jest później wykorzystywany w innych plikach projektu.

W tym przypadku obiekt Sequelize, który reprezentuje połączenie z bazą danych ma następujące parametry:
•	Nazwa bazy danych: ‘project-inz’
•	Nazwa użytkownika: ‘root’
•	Hasło użytkownika: ‘root’
•	Adres hosta bazy danych: ‘localhost’
•	Dialekt bazy danych: ‘mysql’

W folderze model zostały zdefiniowane modele User, Desk i Booking.

W pliku init.js inicjalizuje modele oraz relacje pomiędzy nimi, a następnie używamy sequelize.sync() do synchronizacji struktury bazy danych zdefiniowanej w modelach.

Tworzenie tabel w bazie danych MySQL za pomocą schematu:

W celu precyzyjnej definicji struktury bazy danych, stworzyłem schemat tabel za pomocą języka SQL.

-- Table: Users
CREATE TABLE Users (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    PhoneNumber VARCHAR(100) NOT NULL,
    Password VARCHAR(100) NOT NULL,
    SessionId VARCHAR(100) NULL
);

-- Table: Desks
CREATE TABLE Desks (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    DeskName VARCHAR(255) NOT NULL,
    DeskNumber VARCHAR(100) NOT NULL,
    Floor VARCHAR(100) NOT NULL,
    Type VARCHAR(100) NOT NULL
);

-- Table: Bookings
CREATE TABLE Bookings (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    User_ID INT NOT NULL,
    Desk_ID INT NOT NULL,
    BookingDate DATE NOT NULL,
    BookingTime TIME NOT NULL,
    FOREIGN KEY (Desk_ID) REFERENCES Desks (ID),
    FOREIGN KEY (User_ID) REFERENCES Users (ID)
);

W celu wygodnej administracji bazą danych MySQL oraz wizualizacji struktury tabel, korzystamy z narzędzia phpMyAdmin. Po uruchomieniu środowiska Docker, można uzyskać dostęp do interfejsu phpMyAdmin, przechodząc do przeglądarki internetowej i wpisując adres http://localhost:8183.

Aby zalogować się do naszego interfejsu bazy danych należy użyć danych zdefiniowanych w pliku docker-compose.yml.
•	Użytkownik: root
•	Hasło: root

Będąc zalogowanym w interfejsie można stworzyć nową bazę danych i po jej stworzeniu w zakładce SQL należy wkleić wcześniej przedstawiony schemat tabel i nacisnąć przycisk Go. Po wykonaniu zapytania w naszej bazie danych powinny zostać stworzone tabele Users, Desks i Bookings.
