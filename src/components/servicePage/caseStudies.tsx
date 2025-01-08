// src/components/servicePage/CaseStudies.tsx
const CaseStudies = () => {
    const caseStudies = [
        { id: 1, title: 'Case Study 1', description: 'Description of case study 1.' },
        { id: 2, title: 'Case Study 2', description: 'Description of case study 2.' },
        // Add more case studies as needed
    ];

    return (
        <section className="bg-white p-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-green-500">Case Studies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map(caseStudy => (
                        <div key={caseStudy.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                            <p>{caseStudy.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;