SELECT given_name, family_name, mark
FROM Enrolments, Students
WHERE Enrolments.mark < 50
AND Enrolments.subject_code = "COMP SCI 2000"
AND Enrolments.student_id = Students.student_id;