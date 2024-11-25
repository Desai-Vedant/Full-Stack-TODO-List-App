import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="d-flex align-items-center p-3 my-3 text-white bg-black rounded shadow-sm">
        <img
          className="me-3"
          src="./src/assets/todo-list-svgrepo-com.svg"
          alt=""
          width="48"
          height="38"
        />
        <div className="lh-1">
          <h1 className="h6 mb-0 text-white lh-1 navbar-title">TODO List</h1>
          <small>Organize your tasks</small>
        </div>
      </div>
    </div>
  );
}
