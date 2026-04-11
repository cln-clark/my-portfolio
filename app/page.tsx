"use client"
import Image from "next/image"
import { useState } from "react";

export default function Home() {

  const images = [
    "/images/gallery/grad6.jpg",
    "/images/gallery/grad5.jpg",
    "/images/gallery/grad4.jpg",
    "/images/gallery/grad3.jpg",
    "/images/gallery/grad2.jpg",
    "/images/gallery/grad1.jpg",
    "/images/gallery/ojt1.jpg",
    "/images/gallery/ojt2.jpg",
    "/images/gallery/ojt3.jpg",
    "/images/gallery/ojt4-new.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);



  


  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 text-left group animate-fade-in" /* Main div */> 

      <section className="mb-8" /* Upper Section */>

          <div className="flex items-center justify-start gap-4 md:gap-6"/* whole div inside upper section */>

            <img fetchPriority="high"  /* first child */              
                  decoding="async" 
                  src="/images/myself-2.jpeg" 
                  alt="Clark Louise"
                  className="w-[160px] h-[170px] object-cover shrink-0 rounded-md"
                  >
            </img>

            <div className="flex-1  min-w-0"/* second child */ /* Name, Location*/>

                <div className="flex items-center gap-5 min-w-0" /* Name and Open to Work */>
                  <h1 className="text-lg font-bold md:text-3xl truncate">Clark Louise Navales</h1>
                  <div className="flex items-center gap-2 px-2 py-1 bg-green-100 rounded-full">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">Open to Work</span>
                  </div> 
                </div>

                <p className="flex items-center gap-1 text-xs md:text-sm text-foreground/70 mt-0.5 ">
                  <img src="/location-pin.svg" alt="location icon" width="13" height="13" ></img>
                  <span className="truncate">City of Imus, Cavite</span>
                </p>

                <div className="mt-1.5 md:mt-2">
                  <p className="text-[10px] md:text-base">Aspiring Software Developer</p>
                </div>

                <div className="mt-1.5 md:mt-2 ">
                  
                  <button className="hidden md:inline-flex h-7 md:h-8 items-center rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.03),0_1px_1px_rgba(0,0,0,0.04)] 
                  bg-blue-500 text-white text-2.5 md:px-4 text-[8px] md:text-xs font-medium transition-all duration-200 hover:bg-muted hover:-translate-y-0.5 
                  hover:shadow-[0_3px_10px_rgba(0,0,0,0.06)] gap-1 md:gap-1.5 whitespace-nowrap min-h-0">
                  <img src="email.svg"  width="17" height="17"  alt="email icon" />
                  <span>Get In Touch</span>
                  </button>
                </div>

            </div>          

          </div>
         
      </section>

      <section className="grid grid-cols-1 md:grid-cols-6 gap-2">
        <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in"/* About Card */>
          <h2 className="text-lg font-bold">About</h2>
          <p className="text-sm text-foreground leading-relaxed">
          Aspiring software developer with a focus on backend development. I primarily work with Java, JavaScript, and React, building server-side systems and developing user interfaces.
          <br /><br />
          Most of my experience comes from academic projects, where I have developed web applications, Android applications, and IoT-based systems. These projects have helped me understand how different parts of a system connect—from backend logic to user-facing interfaces and hardware integration.
          <br /><br />
          I am particularly interested in backend development, especially in creating APIs, handling data, and designing clean, maintainable systems. I continuously improve my skills through hands-on projects and exploring backend technologies, aiming to grow into a well-rounded software engineer.
          </p>
        </div>

        <div className="bento-card p-4 col-span-1 md:col-span-2 space-y-2 group animate-fade-in flex-1"/* Experience Card */>
          <h2 className="text-lg font-bold">Experience</h2>

          <div className="relative space-y-4 mt-4" /* List of Experience */>
            <div className="absolute left-1.5 top-1.5 h-[calc(100%-8px)] w-px bg-border"></div>

            <div className="relative pl-6 group/role">
              <div className="absolute left-0 top-1.5 w-3 h-3 border-2 border-accent bg-accent transition-colors"></div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-accent transition-colors">
                  Data Processing Associate
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-foreground/ text-accent/70">Appen</span>
                </div>

              </div>
            
            </div>
    
            <div className="relative pl-6 group/role">
              <div className="absolute left-0 top-1.5 w-3 h-3 border-2 border-foreground/7 bg-background transition-colors"></div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-accent transition-colors">
                  Intern / OJT
                </h3>
                <div className=" flex items-center justify-between">
                  <span className="text-xs text-foreground/70 text-accent/70">Sun Life of Canada Philippines Inc. Phoenix Palm NBO</span>
                </div>

              </div>
            
            </div>

            <div className="relative pl-6 group/role">
              <div className="absolute left-0 top-1.5 w-3 h-3 border-2 border-accent/7 bg-background transition-colors"></div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-accent transition-colors">
                  BS Information Technology
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-foreground/70 text-accent/70">Cavite State University - Cum Laude</span>
                </div>

              </div>
            
            </div>

            <div className="relative pl-6 group/role">
              <div className="absolute left-0 top-1.5 w-3 h-3 border-2 border-accent/7 bg-background transition-colors"></div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-accent transition-colors">
                  ICT
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-foreground/70 text-accent/70">University of Perpetual Help System Dalta</span>
                </div>

              </div>
            
            </div>
          </div>       
        </div>

        <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in "/* Tech Stack Card */>
          <div className="flex items-center justify-between ">
            <h2 className="text-lg font-bold">Tech Stack</h2>
              <a className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors" href="/tech-stack">
            View all
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M 9 5 l7 7 -7 7"></path>
            </svg>
            </a>
          </div>
          <div className="space-y-4">
            <div /* Frontend row */>
              <h3 className="text-sm font-semibold mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 text-xs rounded-md bg-background shadow-[0_2px_1px_rgba(0,0,0,0.03)]">React</span>
                <span className="px-2 py-0.5 text-xs rounded-md bg-background shadow-[0_2px_1px_rgba(0,0,0,0.03)]">Typescript</span>
                <span className="px-2 py-0.5 text-xs rounded-md bg-background shadow-[0_2px_1px_rgba(0,0,0,0.03)]">Tailwind CSS</span>
                <span className="px-2 py-0.5 text-xs rounded-md bg-background shadow-[0_2px_1px_rgba(0,0,0,0.03)]">HTML</span>
              </div>
            </div>
            <div /* Backend row */>
              <h3 className="text-sm font-semibold mb-2">Backend</h3>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 text-xs rounded-md bg-background shadow-[0_2px_1px_rgba(0,0,0,0.03)]">Java</span>
                <span className="px-2 py-0.5 text-xs rounded-md bg-background shadow-[0_2px_1px_rgba(0,0,0,0.03)]">Kotlin</span>
                <span className="px-2 py-0.5 text-xs rounded-md bg-background shadow-[0_2px_1px_rgba(0,0,0,0.03)]">NestJS</span>
                <span className="px-2 py-0.5 text-xs rounded-md bg-background shadow-[0_2px_1px_rgba(0,0,0,0.03)]">Node.js</span>
                <span className="px-2 py-0.5 text-xs rounded-md bg-background shadow-[0_2px_1px_rgba(0,0,0,0.03)]">MySQL</span>
                <span className="px-2 py-0.5 text-xs rounded-md bg-background shadow-[0_2px_1px_rgba(0,0,0,0.03)]">Firebase Realtime Database</span>
              </div>
            </div>
            <div /* Dev Tools row */>
              <h3 className="text-sm font-semibold mb-2">Developer Tools</h3>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 text-xs rounded-md bg-background shadow-[0_2px_1px_rgba(0,0,0,0.03)]">Git</span>
                <span className="px-2 py-0.5 text-xs rounded-md bg-background shadow-[0_2px_1px_rgba(0,0,0,0.03)]">Github</span>
                <span className="px-2 py-0.5 text-xs rounded-md bg-background shadow-[0_2px_1px_rgba(0,0,0,0.03)]">VS Code</span>
                <span className="px-2 py-0.5 text-xs rounded-md bg-background shadow-[0_2px_1px_rgba(0,0,0,0.03)]">Discord</span>
                
              </div>
            </div>
          </div>
        </div>

        <div className="bento-card p-4 col-span-1 md:col-span-2 space-y-2 group animate-fade-in"/* Socials Card */>
          <h2 className="text-lg font-bold">Social Links</h2>
          <div className="space-y-1.5">
            <div className="grid grid-cols-1 gap-1">
              <a target="_blank" rel="noopener noreferrer" /* LinkedIn */
                className="flex items-center gap-2 p-1.5 rounded-lg bg-background 
                shadow-[0_1px_2px_rgba(0,0,0,0.03),0_1px_1px_rgba(0,0,0,0.04)] 
                hover:bg-foreground/2 hover:shadow-[0_3px_5px_rgba(0,0,0,0.06)] 
                transition-all duration-200 hover:-translate-y-0.5 group" aria-label="Visit LinkedIn profile" 
                title="Visit LinkedIn profile" href="https://linkedin.com/in/clark-louise-navales/">
                  <div className="text-ground group-hover:text-accent transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                      </path>
                    </svg>
                  </div>
                  <p className="text-[10px] font-medium text-foreground group-hover:text-accent transition-colors">
                    LinkedIn
                  </p>
              </a>

              <a target="_blank" rel="noopener noreferrer" /* GitHub*/
                className="flex items-center gap-2 p-1.5 rounded-lg bg-background 
                shadow-[0_1px_2px_rgba(0,0,0,0.03),0_1px_1px_rgba(0,0,0,0.04)] 
                hover:bg-foreground/2 hover:shadow-[0_3px_5px_rgba(0,0,0,0.06)] 
                transition-all duration-200 hover:-translate-y-0.5 group" aria-label="Visit GitHub profile" 
                title="Visit GitHub profile" href="https://github.com/cln-clark">
                  <div className="text-foreground group-hover:text-accent transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 
                      9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd">
                      </path>
                    </svg>
                  </div>
                  <p className="text-[10px] font-medium text-foreground group-hover:text-accent transition-colors">
                    GitHub
                  </p>
                </a>

                <a target="_blank" rel="noopener noreferrer" /* Facebook*/
                className="flex items-center gap-2 p-1.5 rounded-lg bg-background 
                shadow-[0_1px_2px_rgba(0,0,0,0.03),0_1px_1px_rgba(0,0,0,0.04)] 
                hover:bg-foreground/2 hover:shadow-[0_3px_5px_rgba(0,0,0,0.06)] 
                transition-all duration-200 hover:-translate-y-0.5 group" aria-label="Visit Facebook profile" 
                title="Visit Facebook profile" href="https://www.facebook.com/clrkyy09">
                  <div className="text-foreground group-hover:text-accent transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12.073C22 6.504 17.523 2 12 2S2 6.504 2 12.073c0 5.017 3.657 9.167 8.438 9.927v-7.025H7.898v-2.902h2.54V9.845c0-2.506 1.492-3.89 
                      3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.902h-2.33V22c4.78-.76 8.437-4.91 8.437-9.927z"/>
                    </svg>
                  </div>
                  <p className="text-[10px] font-medium text-foreground group-hover:text-accent transition-colors">
                    Facebook
                  </p>
                </a>
              
            
            </div>
          </div>     
                
        </div>

        <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in "/* Projects Card */>
          <div className="flex items-center justify-start">
            <h3 className="text-lg font-bold">Projects</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="bento-card p-3 space-y-1"/* 1st Project */>
              <a target="_blank" rel="noopener noreferrer" className="block space-y-1" href="">
                <h3 className="text-sm font-semibold group-hover:text-accent">NeGeShoCa</h3>
                <p className="text-xs text-foreground">Smart checkout system using Arduino, Kotlin, Firebase and QR-based payment</p>
                <p className="text-xs text-foreground/70 font-mono bg-gray-100 px-2 py-1 rounded-md inline-flex items-center gap-1 mt-1">
                  Open project
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M 9 5 l7 7 -7 7"></path>
                  </svg>
                </p>
              </a>
            </div>
            <div className="bento-card p-3 space-y-1"/* 2nd Project */>
              <a target="_blank" rel="noopener noreferrer" className="block space-y-1" href="">
                <h3 className="text-sm font-semibold group-hover:text-accent">NeGeShoCa POS & Inventory System</h3>
                <p className="text-xs text-foreground">POS and real-time inventory system for Negeshoca using Java and Firebase</p>
                <p className="text-xs text-foreground/70 font-mono bg-gray-100 px-2 py-1 rounded-md inline-flex items-center gap-1 mt-1">
                  Open project
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M 9 5 l7 7 -7 7"></path>
                  </svg>
                </p>
              </a>
            </div>
          </div>
          
        </div>

        <div className="bento-card p-4 col-span-1 md:col-span-6 space-y-2 group animate-fade-in" /* Gallery Card */>
          <h2 className="text-lg font-bold">Gallery</h2>
          <div className="relative">
            <div className="relative overflow-hidden">
              <div className="flex gap-2 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 25}%)` }}>
                  {images.map((src, index) => (
                    <div key={index} className="relative flex-shrink-0 aspect-square overflow-hidden rounded-lg bg-foreground/5 
                  shadow-[0_1px_2px_rgba(0,0,0,0.03),0_1px_1px_rgba(0,0,0,0.04)] hover:shadow-[0_3px_10px_rgba(0,0,0,0.06)] 
                  transition-all duration-200 hover:-translate-y-0.5 group/image cursor-pointer" 
                  style={{ width: 'calc(24% - 0.375rem)'}}>
                      <Image 
                      src={src} 
                      alt={`Gallery Image ${index + 1}`} 
                      loading="lazy" 
                      decoding="async"   
                      fill
                      className="object-cover transition-transform duration-200 group-hover/image:scale-105" 
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw,(max-width: 1024px) 25vw, 20vw"/>
                    </div>
                  ))}
              </div>              
            </div>
            <button onClick ={() => setCurrentImageIndex(prev => Math.max(prev - 1,0))} 
                    disabled = {currentImageIndex === 0}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 z-10
                    p-2 rounded-full bg-background shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_1px_rgba(0,0,0,0.06)] 
                    hover:shadow-[0_3px_10px_rgba(0,0,0,0.08)] transition-all duration-200 hover:scale-100 opacity-50
                    ${currentImageIndex === 0 ? 'cursor-not-allowed' : 'cursor-pointer opacity-100'}` } aria-label="Previous Image" /* previous button*/>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M 15 19 l-7 -7 7 -7"></path>
                      </svg>
            </button> 
            <button onClick = {() => setCurrentImageIndex(prev => Math.min(prev + 1, images.length - 4.4))} 
                    disabled={currentImageIndex === images.length - 3}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 z-10 
                    p-2 rounded-full bg-background shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_1px_rgba(0,0,0,0.06)] 
                    hover:shadow-[0_3px_10px_rgba(0,0,0,0.08)]  transition-all duration-200 hover:scale-110" 
                    aria-label="Next image" /* next button*/>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path>
                      </svg>
            </button> 
          </div>
        </div>
        
       
      </section>

    </div>
  );
}
