import { AppBar } from "../components/AppBar";
import { Menu } from "../components/Menu";

export function ProfessorHome() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <AppBar></AppBar>
        <div className="w-screen min-h-screen flex flex-col items-center">
          <div className="mt-3">
            <Menu></Menu>
          </div>
          <p>Professor Home</p>
        </div>
      </div>
    </>
  );
}
