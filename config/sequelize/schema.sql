/*
CREATE SCHEMA [project-inz-db];

//mssql

-- Table: User
CREATE TABLE Users (
    ID int NOT NULL IDENTITY(1,1),
    FirstName varchar(255) NOT NULL,
    LastName varchar(100) NOT NULL,
    Email varchar(100) NOT NULL,
    PhoneNumber varchar(100) NOT NULL,
    Password varchar(100) NOT NULL,
    SessionId varchar(100) NULL,
    CONSTRAINT User_pk PRIMARY KEY (ID)
);

-- Table: Desk
CREATE TABLE Desks (
    ID int NOT NULL IDENTITY(1,1),
    DeskName varchar(255) NOT NULL,
    DeskNumber varchar(100) NOT NULL,
    Floor varchar(100) NOT NULL,
    Type varchar(100) NOT NULL,
    CONSTRAINT Desk_pk PRIMARY KEY (ID)
);

-- Table: Booking
CREATE TABLE Bookings (
    ID int NOT NULL IDENTITY(1,1),
    User_ID int NOT NULL,
    Desk_ID int NOT NULL,
    BookingDate date NOT NULL,
    BookingTime time NOT NULL,
    CONSTRAINT Booking_pk PRIMARY KEY (ID),
    CONSTRAINT Booking_Desk FOREIGN KEY (Desk_ID) REFERENCES Desks (ID),
    CONSTRAINT Booking_User FOREIGN KEY (User_ID) REFERENCES Users (ID)
);

//mysql

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

-- End of file.
*/