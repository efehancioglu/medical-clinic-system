USE MedicalClinicDB;
GO

DELETE Appointments;
DELETE Doctors;
DELETE Patients;
DELETE Users;
DBCC CHECKIDENT ('Appointments',RESEED,0);
DBCC CHECKIDENT ('Users',RESEED,0);
DBCC CHECKIDENT ('Doctors',RESEED,0);
DBCC CHECKIDENT ('Patients',RESEED,0);
GO

INSERT INTO Users(Email, PasswordHash,Role) VALUES
('admin@clinic.com', 'admin123', 'Admin'),
('house@clinic.com', 'doctor123', 'Doctor'),     -- Dr. House
('strange@clinic.com', 'doctor123', 'Doctor'),   -- Dr. Strange
('efe@mail.com', 'user123', 'Patient'),          -- Hasta 1 (Efe)
('emre@mail.com', 'user123', 'Patient'),         -- Hasta 2 (Emre)
('mehmet@mail.com', 'user123', 'Patient');       -- Hasta 3 (Mehmet)
GO

INSERT INTO Doctors(UserID,FirstName,LastName,Specialization,OfficeNumber) VALUES
(
    (SELECT UserID FROM Users WHERE Email = 'house@clinic.com'),'Gregory','House','Diagnostic Medicine','221B'
),
(
    (SELECT UserID FROM Users WHERE Email = 'strange@clinic.com'),
    'Stephen', 'Strange', 'Neurology', 'NY-1'
);
GO

INSERT INTO Patients(UserID,FirstName,LastName,Phone,Birthdate) VALUES
(
    (SELECT UserID FROM Users WHERE Email = 'efe@mail.com'),
    'Efe', 'Hancioglu', '555-0100', '2004-02-28'
),
(
    (SELECT UserID FROM Users WHERE Email = 'emre@mail.com'),
    'Emre', 'Hancioglu', '555-0101', '2014-04-04'
),
(
    (SELECT UserID FROM Users WHERE Email = 'mehmet@mail.com'),
    'Mehmet', 'Hancioglu', '555-0102', '1974-11-02'
);
GO

DECLARE @DoctorHouseID INT = (SELECT DoctorID from Doctors WHERE LastName = 'House');
DECLARE @DoctorStrangeID INT = (SELECT DoctorID from Doctors WHERE LastName = 'Strange');
DECLARE @PatientEfeID INT = (SELECT PatientID from Patients WHERE FirstName = 'Efe');
DECLARE @PatientEmreID INT = (SELECT PatientID from Patients WHERE FirstName = 'Emre');

INSERT INTO Appointments(DoctorID,PatientID,AppointmentDate,AppointmentTime,AppointmentStatus) VALUES
(@DoctorHouseID, @PatientEmreID,'2026-02-20','09:00:00','Confirmed'),
(@DoctorStrangeID,@PatientEfeID,'2026-02-21','10:00:00','Confirmed'),
(@DoctorHouseID,@PatientEfeID,'2026-02-25','12:00:00','Pending');
GO