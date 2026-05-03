"use client"
import Link from 'next/link'
import Image from "next/image"
import { ArrowLeft, ExternalLinkIcon } from 'lucide-react';
import { JSX, useState, useEffect } from "react";
import { FaJava } from 'react-icons/fa';
import { SiKotlin, SiFirebase, SiCplusplus, SiArduino, SiAndroidstudio } from 'react-icons/si';



export default function Negeshoca() {

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

    const buildImages = [
        "/images/behind-the-scene/bts1.jpg",
        "/images/behind-the-scene/bts2.jpg",
        "/images/behind-the-scene/bts3.jpg",
        "/images/behind-the-scene/bts4.jpg",
        "/images/behind-the-scene/bts5.jpg",
    ];

    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

    useEffect(() => {
        const handleKey = (e:KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === 'ArrowRight') setLightboxIndex(i => i !== null ? Math.min(i + 1, buildImages.length - 1) : null);
            if (e.key === 'ArrowLeft') setLightboxIndex(i => i !== null ? Math.max(i - 1, 0) : null);
            if (e.key === 'Escape') {
                setLightboxIndex(null) 
                document.body.style.overflow = '';
            }
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxIndex]);
        


    return (
        <>  

        <div className="w-full max-w-4xl mx-auto px-4 py-8 text-left group animate-fade-in">

            <section className="mb-8 relative"  /* upper section*/>
                <Link href="/" className="inline-flex items-center gap-2 text-[var(--foreground)]/50 hover:text-[var(--foreground)] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-medium">Back to Portfolio</span>
                </Link>

                <div className="flex flex-col items-start gap-3" /* title */>
                    <h1 className="text-lg md:text-5xl font-bold ">NeGeShoCa</h1>
                    <p className="text-sm md:text-base">Next Generation Shopping Cart Powered by Arduino Technology</p>
                </div>
                 <div className="flex flex-wrap gap-3 mt-2">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-md text-xs font-medium">IoT Capstone Project</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-md text-xs font-medium">Hardware + Software</span>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-md text-xs font-medium">Full Stack</span>
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

                <div className="md:sticky md:top-2 md:self-start bento-card p-4 col-span-1 md:col-span-2" /* Project Details */>
                    <h2 className="text-sm md:text-lg font-bold mb-4">Project Details</h2>

                    <div className="space-y-0">
                        <div className="flex items-start gap-3 py-3 border-b border-[var(--foreground)]/10">
                            <span className="text-[var(--foreground)]/40 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-xs uppercase font-bold opacity-50 mb-0.5">Type</p>
                                <p className="text-xs md:text-sm">IoT Hardware + Software</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 py-3 border-b border-[var(--foreground)]/10">
                            <span className="text-[var(--foreground)]/40 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-xs uppercase font-bold opacity-50 mb-0.5">Duration</p>
                                <p className="text-xs md:text-sm">1 year</p>
                                <p className="text-xs opacity-50">Design to defense</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 py-3">
                            <span className="text-[var(--foreground)]/40 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-xs uppercase font-bold opacity-50 mb-0.5">Team Size</p>
                                <p className="text-xs md:text-sm">3 members</p>
                                <p className="text-xs opacity-50">Team Leader</p>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="border-t border-[var(--foreground)]/10 pt-3 mt-1">
                        <p className="text-xs uppercase font-bold opacity-50 mb-2">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                            {techStackItems.map(tech => (
                                <span key={tech.name}
                                    className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-md bg-[var(--background)]/30 shadow-[0_2px_1px_rgba(0,0,0,0.03)]">
                                    <span style={{ color: tech.color }}>
                                        {techIcons[tech.icon.toLowerCase() as keyof typeof techIcons] || null}
                                    </span>
                                    <span>{tech.name}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="border-t border-[var(--foreground)]/10 pt-4 mt-4 hidden md:block">
                        <a href="https://drive.google.com/drive/folders/16A_1ifhGLFP4fgBMJeN6dk38aG7_q2Vb?usp=sharing"
                            target="_blank" rel="noopener noreferrer"
                            aria-label="View Demo Video"
                            className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg
                                    bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold
                                    transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                            <ExternalLinkIcon className="w-3 h-3" />
                            <span>View Demo Video</span>
                        </a>
                    </div>
                </div>

                <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-4" /* My Role */>
                    <h2 className="text-sm md:text-xl font-bold">My Role</h2>
                    
                    <div className="space-y-3">
                        <p className="text-xs md:text-sm leading-relaxed">
                            As team leader, I was solely responsible for all programming and database work across the entire system — from the Arduino firmware to the Kotlin mobile app and Firebase integration. My teammates assisted in building and assembling the physical prototype.
                        </p>

                        <div className="space-y-2">
                            <div className="flex items-start gap-3">
                                <span className="text-blue-500 font-bold flex-shrink-0">→</span>
                                <span className="text-xs md:text-sm"><strong>Hardware Programming</strong> — Wrote the C++ firmware for the ESP32, handling barcode scanning, HTTP requests, and gate control logic.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-blue-500 font-bold flex-shrink-0">→</span>
                                <span className="text-xs md:text-sm"><strong>Mobile Development</strong> — Built the entire Kotlin Android app for checkout management and real-time monitoring, including a RecyclerView implementation for live cart updates.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-blue-500 font-bold flex-shrink-0">→</span>
                                <span className="text-xs md:text-sm"><strong>Database Integration</strong> — Designed and implemented the Firebase Realtime Database structure and connected it to both the hardware and mobile layers via REST API after the Arduino Firebase library proved unreliable.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-blue-500 font-bold flex-shrink-0">→</span>
                                <span className="text-xs md:text-sm"><strong>System Integration</strong> — Bridged all three layers together — hardware, app, and cloud — into one working system.</span>
                            </div>
                        </div>

                        <div className="border-t border-[var(--foreground)]/10 pt-4 mt-2">
                            <p className="text-xs md:text-sm leading-relaxed text-[var(--foreground)]/70 italic border-l-2 border-[var(--foreground)]/20 pl-3">
                                The most defining moment of this project was solving a week-long blocker where the Arduino Firebase library simply refused to work no matter what I tried. After several sleepless nights and eventually stepping away to rest, it hit me — connecting the ESP32 to Firebase via REST API directly would bypass the problem entirely. It worked on the first try. That relief was indescribable. The project also tested me personally — I was hospitalized and confined for nearly a week just before our defense, discharged only two days prior, and still pushed through to finish the remaining POS features in time. We defended at around 85% completion, received only minor revision notes, completed them, and got the project approved. Looking back, this project taught me more about persistence and problem-solving under pressure than any classroom ever could.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='bento-card p-4 col-span-1 md:col-span-4 space-y-4' /* Behind the Scenes */>
                    <h2 className="text-sm md:text-xl font-bold">Behind the Scenes</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {buildImages.map((src, index) => (
                            <div key={index}
                                onClick={() => { setLightboxIndex(index); document.body.style.overflow = 'hidden'; }}
                                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer
                                            hover:shadow-[0_3px_10px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 group/image">
                                <Image 
                                    src={src} 
                                    alt={`Build photo ${index + 1}`} 
                                    loading={index === 0 ? "eager" : "lazy"} 
                                    fill
                                    className={`object-cover transition-transform duration-200 group-hover/image:scale-105`}
                                    sizes="(max-width: 640px) 50vw, 33vw"/>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2" /* technical architecture*/>
                    <h2 className="text-sm md:text-xl font-bold">Technical Architecture</h2>
                    <div className="space-y-3">
                        <div>
                            <h3 className="text-sm md:text-lg font-semibold mb-3">Hardware Layer</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 pb-3 border-b border-[var(--foreground)]/10 last:border-b-0">
                                    <span className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded font-mono text-xs font-bold flex-shrink-0">Hardware</span>
                                    <div>
                                        <p className="text-sm font-bold">Microcontroller</p>
                                        <p className="text-xs">ESP32 Wifi & Bluetooth Soc, Jumper Wires, Thermal Printer, & Power supply</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pb-3 border-b border-[var(--foreground)]/10 last:border-b-0">
                                    <span className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded font-mono text-xs font-bold flex-shrink-0">Hardware</span>
                                    <div>
                                        <p className="text-sm font-bold">Sensors</p>
                                        <p className="text-xs"> GM67 Barcode Scanner, QR Scanner</p>
                                    </div>
                                </div>                     
                            </div>
                        </div>
                                           
                        <div>
                            <h3 className="text-sm md:text-lg font-semibold mb-3">Software Stack</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 pb-3 border-b border-[var(--foreground)]/10 last:border-b-0">
                                    <span className="flex items-center px-3 py-1 bg-blue-500/10 text-blue-500 rounded font-mono text-xs font-bold flex-shrink-0 w-20">Frontend</span>
                                    <div>
                                        <p className="text-sm font-bold">Kotlin Mobile App</p>
                                        <p className="text-xs">Android mobile app for checkout management and real-time monitoring</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pb-3 border-b border-[var(--foreground)]/10 last:border-b-0">
                                    <span className="flex items-center px-3 py-1 bg-green-500/10 text-green-500 rounded font-mono text-xs font-bold flex-shrink-0 w-20">Backend</span>
                                    <div>
                                        <p className="text-sm font-bold">C++, Kotlin & REST API</p>
                                        <p className="text-xs">Server-side business logic</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pb-3 border-b border-[var(--foreground)]/10 last:border-b-0">
                                    <span className="flex items-center px-3 py-1 bg-green-500/10 text-green-500 rounded font-mono text-xs font-bold flex-shrink-0 w-20">Tools</span>
                                    <div>
                                        <p className="text-sm font-bold">Android Studio & Arduino IDE</p>
                                        <p className="text-xs">Development environment for mobile and hardware development</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pb-3 border-b border-[var(--foreground)]/10 last:border-b-0">
                                    <span className="flex items-center px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded font-mono text-xs font-bold flex-shrink-0 w-20">Database</span>
                                    <div>
                                        <p className="text-sm font-bold">Firebase Realtime Database</p>
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
                                <span className="text-xs"><strong className="text-sm">ESP32 to Firebase:</strong> Hardware sends barcode data directly via REST API</span>
                                </li>
                                <li className="flex gap-2">
                                <span className="text-blue-600 font-semibold">→</span>
                                <span className="text-xs"><strong className="text-sm">Mobile to Backend:</strong> Kotlin app communicates with Firebase REST API</span>
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

                {/* Mobile-only CTA */}
                <div className="col-span-1 md:hidden">
                    <a href="https://drive.google.com/drive/folders/16A_1ifhGLFP4fgBMJeN6dk38aG7_q2Vb?usp=sharing"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="View Demo Video"
                        className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg
                                bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold
                                transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                        <ExternalLinkIcon className="w-3 h-3" />
                        <span>View Demo Video</span>
                    </a>
                </div>
            </section>
        </div>

        {lightboxIndex !== null && (
                  <div className="fixed inset-0 z-50 bg-black/90 overflow-hidden"
                    onClick={() => {setLightboxIndex(null)
                      document.body.style.overflow = ''
                    }}>
        
                    {/* previous button - outside image container */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        setLightboxIndex(prev => Math.max(prev! - 1, 0))
                      }}
                      disabled={lightboxIndex === 0}
                      className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white hover:scale-110 transition-colors
                        ${lightboxIndex === 0 ? 'opacity-30 cursor-not-allowed hidden' : 'opacity-100 cursor-pointer visible'}`}
                      aria-label="Previous image">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7"/>
                      </svg>
                    </button>
        
                    {/* counter */}
                    <div className="absolute top-4 left-7 z-10 text-white/70 text-xs font-mono">
                      {lightboxIndex + 1} / {buildImages.length}                 
                    </div>
        
                    {/* exit button */}
                    <button
                      onClick={() => {setLightboxIndex(null)
                      document.body.style.overflow = '' }}
                      className="absolute top-4 right-7 z-10 text-white/70 hover:text-white hover:scale-110 transition-colors"
                      aria-label="Close">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/>
                        </svg>  
                    </button>
        
                    {/* image container */}
                    <div className="absolute inset-0 flex items-center justify-center">
        
                        <div className="relative w-[80vw] h-[80vw] md:w-[600px] md:h-[600px]"
                              onClick={e => e.stopPropagation()}>
        
                          <Image
                            src={buildImages[lightboxIndex]}
                            alt={`Gallery Image ${lightboxIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 90vw, 500px"
                          />
        
                          <div className="absolute top-full mt-4 md:mt-2 left-1/2 -translate-x-1/2 text-white/70 text-xs font-mono">
                            Use arrow keys to navigate • ESC to close 
                          </div>
                        </div> 
        
                    </div>
        
                    {/* next button - outside image container */}
                    <button
                      onClick={(e) => {e.stopPropagation()
                      setLightboxIndex(prev => Math.min(prev! + 1, buildImages.length - 1))}}
                      disabled={lightboxIndex === buildImages.length - 1}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white hover:scale-110 transition-colors
                      ${lightboxIndex === buildImages.length - 1 ? 'opacity-30 cursor-not-allowed hidden' : 'opacity-100 cursor-pointer visible'}`}
                      aria-label="Next image">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
        
                  </div>
              )}

        </>
    )
}