"use client"
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { JSX } from "react";
import { FaJava } from 'react-icons/fa';
import { SiKotlin, SiFirebase, SiCplusplus, SiArduino, SiAndroidstudio } from 'react-icons/si';



interface TechStackItem {
    name: string;
}

const techStack: TechStackItem[] = [
    { name: 'Arduino' },
    { name: 'Kotlin' },
    { name: 'Firebase' },
    { name: 'QR Code Technology' }
];


interface TechStackDetails {
    name: string;
    icon: string;
    color: string;
  }

const techStackItems: TechStackDetails[] = [
    
    {  name: 'Kotlin',          icon: 'kotlin',     color: '#7F52FF' },
    {  name: 'Android Studio',  icon: 'androidstudio',     color: '#3DDC84' },  
    {  name: 'C++',             icon: 'cplusplus',     color: '#00599C' },
    
    {  name: 'Arduino',         icon:'arduino',     color: '#00979D' },
    {  name: 'Firebase',        icon: 'firebase',   color: '#FFCA28' }

  ];

const techIcons: Record<string, JSX.Element> = {

    java:           <FaJava               className="w-3 h-3" />,
    kotlin:         <SiKotlin             className="w-3 h-3" />,
    cplusplus:      <SiCplusplus         className="w-3 h-3" />,
    androidstudio:  <SiAndroidstudio     className="w-3 h-3" />,    
    firebase:       <SiFirebase           className="w-3 h-3" />,
    arduino:        <SiArduino            className="w-3 h-3" />,

  };

export default function Negeshoca() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8 text-left group animate-fade-in">

            <section className="mb-8 relative"  /* upper section*/>
                <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-medium">Back to Portfolio</span>
                </Link>

                <div className="flex flex-col items-start gap-3" /* title */>
                    <h1 className="text-lg md:text-5xl font-bold ">NeGeShoCa</h1>
                    <p className="text-sm md:text-base">Next Generation Shopping Cart Powered by Arduino Technology</p>
                </div>
                 <div className="flex flex-wrap gap-3 mt-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">IoT Capstone Project</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-xs font-medium">Hardware + Software</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-md text-xs font-medium">Full Stack</span>
                </div>               
            </section>

            <section className="relative grid grid-cols-1 md:grid-cols-6 gap-8" /* main content section*/>
            
                <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2" /* Problem & Solution */>
                    <h2 className="text-sm md:text-xl font-bold">Problem & Solution</h2>

                     <div>
                        <h3 className="text-sm md:text-md font-bold mb-3">The Problem</h3>
                        <p className="text-xs md:text-sm leading-relaxed">
                            Traditional checkout systems rely on manual scanning and payment processing, which creates bottlenecks and limits scalability. For retail environments, especially convenience stores, there was no efficient way to automate the checkout process while maintaining real-time inventory tracking and secure payment handling.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-sm md:text-md font-bold mb-3">Our Solution</h3>
                        <p className="text-xs md:text-sm leading-relaxed">
                            NeGeShoCa is an integrated IoT-based smart checkout system that combines hardware automation with cloud-based management. It eliminates manual checkout bottlenecks through automated scanning gates, QR-code-based payments, and real-time synchronization across all store operations.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm md:text-lg font-bold mb-3">Impact</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="text-green-600 font-bold">✓</span>
                                <span className="text-xs md:text-sm">Reduced checkout time by automating the scanning process</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-green-600 font-bold">✓</span>
                                <span className="text-xs md:text-sm">Real-time inventory updates across the system</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-green-600 font-bold">✓</span>
                                <span className="text-xs md:text-sm">Scalable architecture for multiple store locations</span>
                            </div>
                        </div>
                    </div>


                </div >

                <div className="md:sticky md:top-2 md:self-start bento-card p-4 col-span-1 md:col-span-2" /* right sidebar*/>
                    <h2 className="text-sm md:text-lg font-bold">Project Details</h2>
                    <div className="space-y-4 mt-4">
                        <div>
                        <p className="text-xs md:text-sm uppercase font-bold mb-1 opacity-60">Type</p>
                        <p className="text-sm md:text-md">IoT Hardware + Software</p>
                        </div>
                        
                        <div>
                        <p className="text-xs md:text-sm uppercase font-bold mb-1 opacity-60">Duration</p>
                        <p className="text-sm md:text-md">1 year (design to deployment)</p>
                        </div>

                        <div>
                        <p className="text-xs md:text-sm uppercase font-bold mb-1 opacity-60">Team Size</p>
                        <p className="text-sm md:text-md">3 members</p>
                        </div>
                        

                    </div>
                    <div className="flex flex-wrap gap-2 p-2 pl-0 border-t border-[var(--foreground)]/10 mt-3">
                        {techStackItems.map(tech => (
                            <a  key={tech.name} 
                                className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-md bg-[var(--background)]/30 shadow-[0_2px_1px_rgba(0,0,0,0.03)]">
                                <span style={{ color: tech.color}}>
                                    {techIcons[tech.icon.toLowerCase() as keyof typeof techIcons] || null}
                                </span>
                                <span>{tech.name}</span>
                            </a>
                         ))}
                    </div>
                </div>

                <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2" /* technical architecture*/>
                    <h2 className="text-sm md:text-xl font-bold">Technical Architecture</h2>
                    <div className="space-y-3">
                        <div>
                            <h3 className="text-sm md:text-lg font-semibold mb-3">Hardware Layer</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 pb-3 border-b border-slate-200 last:border-b-0">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded font-mono text-xs font-bold flex-shrink-0">Hardware</span>
                                    <div>
                                        <p className="text-sm font-bold">Microcontroller</p>
                                        <p className="text-xs">ESP32 Wifi & Bluetooth Soc, Jumper Wires, Thermal Printer, & Power supply</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pb-3 border-b border-slate-200 last:border-b-0">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded font-mono text-xs font-bold flex-shrink-0">Hardware</span>
                                    <div>
                                        <p className="text-sm font-bold">Sensors</p>
                                        <p className="text-xs"> GM67 Barcode Scannner, QR Scanner</p>
                                    </div>
                                </div>                     
                            </div>
                        </div>
                                           
                        <div>
                            <h3 className="text-sm md:text-lg font-semibold mb-3    ">Software Stack</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 pb-3 border-b border-slate-200 last:border-b-0">
                                    <span className="flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded font-mono text-xs font-bold flex-shrink-0 w-19">Frontend</span>
                                    <div>
                                        <p className="text-sm font-bold">Kotlin Mobile App</p>
                                        <p className="text-xs">Android mobile app for checkout management and real-time monitoring</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pb-3 border-b border-slate-200 last:border-b-0">
                                    <span className="flex items-center px-3 py-1 bg-green-100 text-green-700 rounded font-mono text-xs font-bold flex-shrink-0 w-19">Backend</span>
                                    <div>
                                        <p className="text-sm font-bold">C++, Kotlin & REST API</p>
                                        <p className="text-xs">Server-side business logic</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pb-3 border-b border-slate-200 last:border-b-0">
                                    <span className="flex items-center px-3 py-1 bg-green-100 text-green-700 rounded font-mono text-xs font-bold flex-shrink-0 w-19">Tools</span>
                                    <div>
                                        <p className="text-sm font-bold">Android Studio & Arduino IDE</p>
                                        <p className="text-xs">Development environment for mobile and hardware development</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pb-3 border-b border-slate-200 last:border-b-0">
                                    <span className="flex items-center px-3 py-1 bg-yellow-100 text-yellow-700 rounded font-mono text-xs font-bold flex-shrink-0 w-19">Database</span>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Firebase Realtime Database</p>
                                        <p className="text-xs">Cloud-based real-time synchronization of inventory and transactions</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-3">Integration Points</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                <span className="text-blue-600 font-semibold">→</span>
                                <span className="text-xs"><strong className="text-sm">Arduino to Firebase:</strong> Hardware sends sensor data and gate status</span>
                                </li>
                                <li className="flex gap-2">
                                <span className="text-blue-600 font-semibold">→</span>
                                <span className="text-xs"><strong className="text-sm">Mobile to Backend:</strong> Kotlin app communicates with Java REST API</span>
                                </li>
                                <li className="flex gap-2">
                                <span className="text-blue-600 font-semibold">→</span>
                                <span className="text-xs"><strong className="text-sm">Backend to Database:</strong> Real-time sync with Firebase</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>     

                <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2" /* Challenge & Outcome */>
                    <h2 className="text-md  md:text-xl font-bold mb-4">Challenges & Outcomes</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm md:text-lg font-bold mb-3">Key Challenges</h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-xs md:text-sm font-bold">Hardware-to-Cloud Communication</p>
                                    <p className="text-xs md:text-sm">Reliable transmission of barcode data from the scanner through the ESP32 to the database.</p>
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm font-bold">Real-time Data Synchronization</p>
                                    <p className="text-xs md:text-sm">Ensuring that scanned items instantly reflect on the tablet UI without noticeable delay.</p>
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm font-bold">Network Compatibility Issues</p>
                                    <p className="text-xs md:text-sm">System failed to communicate due to devices being on different network bands (2.4GHz vs 5GHz).</p>
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm font-bold">Efficient Data Representation in QR Code</p>
                                    <p className="text-xs md:text-sm">Optimizing the QR code structure to efficiently encode and transmit product information.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm md:text-lg font-bold mb-3">Solutions Implemented</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span className="text-xs md:text-sm">Implemented a structured ESP32–HTTP request flow for reliable barcode data retrieval</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span className="text-xs md:text-sm">Utilized Firebase Realtime Database real-time listeners for instant UI updates without polling</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span className="text-xs md:text-sm">Standardized network configuration to ensure stable device communication</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span className="text-xs md:text-sm">Optimized QR design by using Order ID as a lightweight reference for scalable transactions</span>
                                </div>
                            </div>
                        </div>
                        
                       

                    </div>   
                </div>
            </section>
        </div>




    )
}