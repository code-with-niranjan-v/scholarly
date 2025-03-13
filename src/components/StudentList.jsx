import axios from "axios";
import { useEffect, useState } from "react";
import { Student } from "./Student";

export function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/user/allstudent")
      .then((res) => {
        setStudents(res.data.data);
      });
  }, []);
  return (
    <>
      <div className="flex flex-col gap-y-4">
        {students.map((student, key) => (
          <Student
            name={student.name}
            id={student.id}
            department={student.department}
          />
        ))}
      </div>
    </>
  );
}
