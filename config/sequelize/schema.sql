/*
CREATE SCHEMA [project-inz-db];

-- Table: User
CREATE TABLE Users (
    ID int NOT NULL IDENTITY(1,1),
    FirstName varchar(255) NOT NULL,
    LastName varchar(100) NOT NULL,
    Email varchar(100) NOT NULL,
    PhoneNumber varchar(100) NOT NULL,
    Password varchar(100) NOT NULL,
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

-- End of file.
*/