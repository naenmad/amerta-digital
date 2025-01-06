// src/components/servicePage/Team.tsx
const Team = () => {
    const teamMembers = [
        { id: 1, name: 'John Doe', role: 'CEO', description: 'Leading the company with a vision.' },
        { id: 2, name: 'Jane Smith', role: 'CTO', description: 'Overseeing all technical aspects.' },
        // Add more team members as needed
    ];

    return (
        <section className="bg-white p-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-green-500">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map(member => (
                        <div key={member.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                            <p className="text-green-500 mb-2">{member.role}</p>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;