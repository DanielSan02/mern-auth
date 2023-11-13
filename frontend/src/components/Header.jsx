import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-6">
        <Link to="/">
          <h1 className="font-bold">Ebriancos</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Productos</li>
          </Link>
          <Link to="/about">
            <li>Sobre nosotros</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img src={currentUser.profilePicture} alt="" className="h-7 w-7 rounded-full object-cover" />
            ) : (
              <li>Iniciar sesión</li>
            )}
            
          </Link>
        </ul>
      </div>
    </div>
  );
}
