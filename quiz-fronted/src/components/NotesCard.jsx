import NotesCard from "../components/NotesCard";

const notes = [
  {
    id: 1,
    title: "Java Notes",
    link: "/notes/java-notes.pdf",
    image: "/images/java.png"
  },
  // Add other notes...
];

export default function Notes() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">Subject Notes</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Access comprehensive study materials for various programming languages 
        to enhance your learning experience.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {notes.map(note => (
          <NotesCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}