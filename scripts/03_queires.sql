--Example of JOIN 1
SELECT 
	A.AppointmentID,
	P.FirstName + ' '+P.LastName AS PatientName,
	D.FirstName + ' '+D.LastName AS DoctorName,
	A.AppointmentDate,		
	A.AppointmentTime,
	A.AppointmentStatus
FROM Appointments A
JOIN Patients P ON A.PatientID = P.PatientID
JOIN Doctors D ON A.DoctorID = D.DoctorID;

--Example of JOIN 2 
SELECT
P.PatientID,
P.FirstName,
P.LastName,
U.Email,
U.CreatedAt AS KayitTarihi
FROM Patients P
JOIN Users U ON U.UserID = P.UserID;

--Example of SELECT 1
SELECT
D.DoctorID,
D.FirstName,
D.LastName,
D.OfficeNumber
FROM Doctors D WHERE D.Specialization = 'Neurology';

--Example of SELECT 2
SELECT
P.FirstName AS PatientName,
P.LastName AS PatientLastname,
D.FirstName AS DoctorFirstName,
D.LastName AS DoctorLastname,
A.AppointmentStatus
FROM Appointments A 
JOIN Patients P ON A.PatientID = P.PatientID
JOIN Doctors D ON A.DoctorID = D.DoctorID
WHERE  A.AppointmentStatus = 'Confirmed';