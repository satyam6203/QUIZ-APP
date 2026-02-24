export default function NotesCard({ note }) {
  return (
    <div className="card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
      <a 
        href={note.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <img 
          src={note.image} 
          alt={note.title} 
          className="w-full h-40 object-contain p-4"
        />
        <div className="p-4 border-t border-gray-100">
          <h3 className="text-lg font-medium text-center">{note.title}</h3>
        </div>
      </a>
    </div>
  );
}