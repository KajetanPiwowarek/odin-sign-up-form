CREATE SCHEMA IF NOT EXISTS `project-inz-db`;

-- tables
-- Table: User
CREATE TABLE Users (
    ID int NOT NULL AUTO_INCREMENT,
    FirstName varchar(255) NOT NULL,
    LastName varchar(100) NOT NULL,
    Email varchar(100) NOT NULL,
    PhoneNumber varchar(100) NOT NULL,
    Password varchar(100) NOT NULL,
    CONSTRAINT User_pk PRIMARY KEY (ID)
);

-- Table: Desk
CREATE TABLE Desks (
    ID int NOT NULL,
    DeskName varchar(255) NOT NULL,
    DeskNumber varchar(100) NOT NULL,
    Floor varchar(100) NOT NULL,
    Type varchar(100) NOT NULL,
    CONSTRAINT Desk_pk PRIMARY KEY (ID)
);

-- Table: Booking
CREATE TABLE Bookings (
    ID int NOT NULL,
    User_ID int NOT NULL,
    Desk_ID int NOT NULL,
    BookingDate date NOT NULL,
    BookingTime time NOT NULL,
    CONSTRAINT Booking_pk PRIMARY KEY (ID)
);

-- foreign keys
-- Reference: Booking_Desk (table: Booking)
ALTER TABLE Bookings ADD CONSTRAINT Booking_Desk FOREIGN KEY Booking_Desk (Desk_ID)
    REFERENCES Desks (ID);

-- Reference: Booking_User (table: Booking)
ALTER TABLE Bookings ADD CONSTRAINT Booking_User FOREIGN KEY Booking_User (User_ID)
    REFERENCES Users (ID);

-- End of file.