IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'MedicalClinicDB')
BEGIN
    CREATE DATABASE MedicalClinicDB; -- Creates Database
END
GO

USE MedicalClinicDB;                 -- Uses Database
GO

DROP TABLE IF EXISTS Appointments;   
DROP TABLE IF EXISTS Doctors;
DROP TABLE IF EXISTS Patients;
DROP TABLE IF EXISTS Users;
GO

--1. User Table (Authentication)
CREATE TABLE Users(
    UserID INT PRIMARY KEY IDENTITY(1,1),
    Email NVARCHAR(100) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(255) NOT NULL,
    Role VARCHAR(20) NOT NULL CHECK (Role IN ('Admin','Doctor','Patient')),
    CreatedAt DATETIME DEFAULT GETDATE()
);
GO

--2. Patients Table
CREATE TABLE Patients(
    PatientID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT NOT NULL UNIQUE,
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    Phone VARCHAR(15),
    Birthdate DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);
GO

--3. Doctors Table
CREATE TABLE Doctors(
    DoctorID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT NOT NULL UNIQUE,
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    Specialization NVARCHAR(50) NOT NULL,
    OfficeNumber VARCHAR(10) NOT NULL,
    IsActive BIT DEFAULT 0,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);
GO

--4. Appointments Table
CREATE TABLE Appointments(
    AppointmentID INT PRIMARY KEY IDENTITY(1,1),
    PatientID INT NOT NULL,
    DoctorID INT NOT NULL,
    AppointmentDate DATE NOT NULL,
    AppointmentTime TIME(0) NOT NULL,
    AppointmentStatus VARCHAR(20) DEFAULT 'Pending' CHECK (AppointmentStatus IN ('Pending','Confirmed','Cancelled','Completed')),
    CreatedAt DATETIME DEFAULT GETDATE(),

    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID),

    CONSTRAINT UQ_Doctor_Date_Time UNIQUE (DoctorID, AppointmentDate, AppointmentTime)
);
GO

