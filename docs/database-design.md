# Medical Clinic Database Schema Design

## 1. Users Table (Authentication)
- UserID (PK - INT, Identity)
- Email (NVARCHAR 100, Unique)
- PasswordHash (NVARCHAR 255)
- Role (VARCHAR 20) -- 'Admin', 'Doctor', 'Patient'
- CreatedAt (DATETIME)

## 2. Patients Table
- PatientID (PK - INT, Identity)
- UserID (FK -> Users.UserID)
- FirstName (NVARCHAR 50)
- LastName (NVARCHAR 50)
- Phone (VARCHAR 15)
- BirthDate (DATE)
- Address (NVARCHAR 255)

## 3. Doctors Table
- DoctorID (PK - INT, Identity)
- UserID (FK -> Users.UserID)
- FirstName (NVARCHAR 50)
- LastName (NVARCHAR 50)
- Specialization (NVARCHAR 50)
- OfficeNumber (VARCHAR 10)
- IsActive (BIT) -- 1:Active, 0:Inactive

## 4. Appointments Table
- AppointmentID (PK - INT, Identity)
- PatientID (FK -> Patients.PatientID)
- DoctorID (FK -> Doctors.DoctorID)
- AppointmentDate (DATE) -- Example: '2026-05-20'
- AppointmentTime (TIME(0)) -- Example: '14:30:00'
- Status (VARCHAR 20) -- 'Pending', 'Confirmed', 'Cancelled'
- CreatedAt (DATETIME)

## Rules & Constraints
1. A doctor cannot have two appointments at the same Date AND Time.
2. Standard working hours apply for all doctors.