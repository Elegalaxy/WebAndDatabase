SELECT given_name, family_name
FROM Students, Enrolments
WHERE Enrolments.subject_code = "COMP SCI 2207"
AND Enrolments.student_id = Students.student_id;