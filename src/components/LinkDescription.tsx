import { Link } from 'react-router-dom'

interface LinkDescriptionProps {
    to: string;
    title: string;
    description: string;
}
function LinkDescription({to, title, description}:LinkDescriptionProps) {
  return (
    <>
    <Link to={to} className="flex gap-4 border rounded-lg p-2 shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-500">
      <h3 className="text-left text-lg font-semibold text-white">{to} {title}</h3>
      <p className="text-left text-sm text-gray-600 mt-2">{description}</p>
    </Link>
    </>
  )
}

export default LinkDescription