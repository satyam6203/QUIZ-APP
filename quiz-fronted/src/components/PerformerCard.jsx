import PerformerCard from "../components/PerformerCard";

const performers = [
  {
    id: 1,
    name: "Satyam Kumar",
    score: 98,
    image: "/images/m1.jpg"
  },
  // Add other performers...
];

export default function Performers() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">Top Performers</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Our top performers have demonstrated exceptional knowledge across various programming languages. 
        They set the standard for excellence in our community.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {performers.map(performer => (
          <PerformerCard key={performer.id} performer={performer} />
        ))}
      </div>
    </div>
  );
}