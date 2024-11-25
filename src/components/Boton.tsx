interface BotonProps {
    children: React.ReactNode;
    onClick: () => void;
}
function Boton({children, onClick}:BotonProps) {
  return (
    <button
          onClick={onClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {children}
    </button>
  )
}

export default Boton