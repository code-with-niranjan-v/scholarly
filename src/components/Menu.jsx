import { useState } from "react";
import { StudentList } from "./StudentList";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { CoursesList } from "./CoursesList";
import VideocamIcon from "@mui/icons-material/Videocam";
import PeopleIcon from "@mui/icons-material/People";
export function Menu() {
  const [tab, setTab] = useState("courses");
  const selectTab = (tab) => {
    setTab(tab);
  };
  return (
    <>
      <div className="min-w-lg flex flex-col justify-center">
        <div className="flex flex-row gap-8 p-3">
          <div
            onClick={() => {
              selectTab("courses");
            }}
            className={`p-3 ${
              tab == "courses"
                ? "bg-violet-600 text-white"
                : "bg-gray-200 text-gray-500"
            }  font-medium rounded-md`}
          >
            <div className="flex flex-row gap-1">
              <AutoStoriesIcon />
              Courses
            </div>
          </div>
          <div
            onClick={() => {
              selectTab("lectures");
            }}
            className={`p-3 ${
              tab == "lectures"
                ? "bg-violet-600 text-white"
                : "bg-gray-200 text-gray-500"
            }  font-medium rounded-md`}
          >
            <div className="flex flex-row gap-1">
              <VideocamIcon />
              Lectures
            </div>
          </div>
          <div
            onClick={() => {
              selectTab("students");
            }}
            className={`p-3 ${
              tab == "students"
                ? "bg-violet-600 text-white"
                : "bg-gray-200 text-gray-500"
            }  font-medium rounded-md`}
          >
            <div className="flex flex-row gap-1">
              <PeopleIcon />
              Students
            </div>
          </div>
        </div>
        {tab === "students" && <StudentList />}
        {tab === "courses" && <CoursesList />}
      </div>
    </>
  );
}
