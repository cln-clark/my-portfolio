
interface techStackItem {
    name: string;
}

const techStack: techStackItem[] = [
    { name: 'Arduino' },
    { name: 'Kotlin' },
    { name: 'Firebase' },
    { name: 'QR Code Technology' }
];

export default function negeshoca() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8 text-left group animate-fade-in">
            <section className="mb-8 relative"  /* upper section*/>
                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-lg md:text-3xl font-bold ">NeGeShoCa</h1>
                    <p className="text-sm md:text-base">Next Generation Shopping Cart Powered by Arduino Technology</p>
                </div>
                 <div className="flex flex-wrap gap-3 mt-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">IoT Capstone Project</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Hardware + Software</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Full Stack</span>
                </div>               
            </section>

            <section className="relative grid grid-cols-1 md:grid-cols-6 gap-2">
                <div className="bento-card p-4 col-span-4 space-y-2">

                </div>
                <div className="sticky bento-card p-4 col-span-2">
                    <h2 className="text-sm md:text-lg font-semibold">Project Details</h2>
                    <div className="space-y-4 mt-4">
                        <div>
                        <p className="text-sm uppercase font-semibold mb-1">Type</p>
                        <p className="text-xs">IoT Hardware + Software</p>
                        </div>
                        
                        <div>
                        <p className="text-sm uppercase font-semibold mb-1">Duration</p>
                        <p className="text-xs">6 months (design to deployment)</p>
                        </div>

                        <div>
                        <p className="text-sm uppercase font-semibold mb-1">Team Size</p>
                        <p className="text-xs">3 members</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 p-2 pl-0 border-t border-[var(--foreground)]/10 mt-3">
                        {techStack.map(tech => (
                            <a key={tech.name} className="px-2 py-0.5 text-xs rounded-md whitespace-nowrap bg-[var(--background)]/30 shadow-[0_2px_1px_rgba(0,0,0,0.03)]">
                              {tech.name}
                            </a>
                         ))}
                    </div>
                </div>
            </section>
        </div>




    )
}