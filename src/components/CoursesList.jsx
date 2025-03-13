import AddIcon from "@mui/icons-material/Add";
export function CoursesList() {
  return (
    <>
      <div className="flex flex-col mt-4">
        <div className="flex justify-end">
          <button className="bg-violet-600 text-white font-medium p-2 rounded-md">
            <div className="flex gap-1">
              <AddIcon></AddIcon>
              Add Course
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
