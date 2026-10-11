import type { GalleryImage } from "@/components/Gallery";
import type { TechItem } from "./stack";

interface LabelledText {
  label: string;
  value: string;
  note?: string;
}

interface TitledText {
  title: string;
  text: string;
}

interface TaggedText {
  tag: string;
  title: string;
  text: string;
}

export const negeshoca = {
  title: "NeGeShoCa",
  subtitle: "Next Generation Shopping Cart Powered by Arduino Technology",
  tags: ["IoT Capstone Project", "Hardware + Software", "Full Stack"],
  demoUrl:
    "https://drive.google.com/drive/folders/16A_1ifhGLFP4fgBMJeN6dk38aG7_q2Vb?usp=sharing",
  meta: [
    { label: "Type", value: "IoT Hardware + Software" },
    { label: "Duration", value: "1 year", note: "Design to defense" },
    { label: "Team", value: "3 members", note: "Team leader" },
  ] as LabelledText[],
  stack: [
    { name: "Kotlin", icon: "kotlin" },
    { name: "Android Studio", icon: "androidstudio" },
    { name: "C++", icon: "cplusplus" },
    { name: "Arduino", icon: "arduino" },
    { name: "Firebase", icon: "firebase" },
  ] as TechItem[],
  problem:
    "Traditional checkout systems rely on manual scanning and payment processing, which creates bottlenecks and limits scalability. For retail environments, especially convenience stores, there was no efficient way to automate the checkout process while maintaining real-time inventory tracking and secure payment handling.",
  solution:
    "NeGeShoCa is an integrated IoT-based smart checkout system that combines hardware automation with cloud-based management. It eliminates manual checkout bottlenecks through automated scanning gates, QR-code-based payments, and real-time synchronization across all store operations.",
  impact: [
    "Reduced checkout time by automating the scanning process",
    "Real-time inventory updates across the system",
    "Scalable architecture for multiple store locations",
  ],
  role: {
    intro:
      "As team leader, I was solely responsible for all programming and database work across the entire system — from the Arduino firmware to the Kotlin mobile app and Firebase integration. My teammates assisted in building and assembling the physical prototype.",
    points: [
      {
        title: "Hardware Programming",
        text: "Wrote the C++ firmware for the ESP32, handling barcode scanning, HTTP requests, and gate control logic.",
      },
      {
        title: "Mobile Development",
        text: "Built the entire Kotlin Android app for checkout management and real-time monitoring, including a RecyclerView implementation for live cart updates.",
      },
      {
        title: "Database Integration",
        text: "Designed and implemented the Firebase Realtime Database structure and connected it to both the hardware and mobile layers via REST API after the Arduino Firebase library proved unreliable.",
      },
      {
        title: "System Integration",
        text: "Bridged all three layers together — hardware, app, and cloud — into one working system.",
      },
    ] as TitledText[],
  },
  quote:
    "The most defining moment of this project was solving a week-long blocker where the Arduino Firebase library simply refused to work no matter what I tried. After several sleepless nights and eventually stepping away to rest, it hit me — connecting the ESP32 to Firebase via REST API directly would bypass the problem entirely. It worked on the first try. That relief was indescribable. The project also tested me personally — I was hospitalized and confined for nearly a week just before our defense, discharged only two days prior, and still pushed through to finish the remaining POS features in time. We defended at around 85% completion, received only minor revision notes, completed them, and got the project approved. Looking back, this project taught me more about persistence and problem-solving under pressure than any classroom ever could.",
  architecture: {
    hardware: [
      {
        tag: "Hardware",
        title: "Microcontroller",
        text: "ESP32 Wi-Fi & Bluetooth SoC, jumper wires, thermal printer, & power supply",
      },
      {
        tag: "Hardware",
        title: "Sensors",
        text: "GM67 barcode scanner, QR scanner",
      },
    ] as TaggedText[],
    software: [
      {
        tag: "Frontend",
        title: "Kotlin mobile app",
        text: "Android mobile app for checkout management and real-time monitoring",
      },
      {
        tag: "Backend",
        title: "C++, Kotlin & REST API",
        text: "Server-side business logic",
      },
      {
        tag: "Tools",
        title: "Android Studio & Arduino IDE",
        text: "Development environment for mobile and hardware development",
      },
      {
        tag: "Database",
        title: "Firebase Realtime Database",
        text: "Cloud-based real-time synchronization of inventory and transactions",
      },
    ] as TaggedText[],
    integrations: [
      {
        title: "ESP32 to Firebase",
        text: "Hardware sends barcode data directly via REST API",
      },
      {
        title: "Mobile to Backend",
        text: "Kotlin app communicates with Firebase REST API",
      },
      {
        title: "Backend to Database",
        text: "Real-time sync with Firebase",
      },
    ] as TitledText[],
  },
  challenges: [
    {
      title: "Hardware-to-Cloud Communication",
      text: "Reliable transmission of barcode data from the scanner through the ESP32 to the database.",
    },
    {
      title: "Real-time Data Synchronization",
      text: "Ensuring that scanned items instantly reflect on the tablet UI without noticeable delay.",
    },
    {
      title: "Network Compatibility Issues",
      text: "System failed to communicate due to devices being on different network bands (2.4GHz vs 5GHz).",
    },
    {
      title: "Efficient Data Representation in QR Code",
      text: "Optimizing the QR code structure to efficiently encode and transmit product information.",
    },
  ] as TitledText[],
  solutions: [
    "Implemented a structured ESP32–HTTP request flow for reliable barcode data retrieval",
    "Utilized Firebase Realtime Database real-time listeners for instant UI updates without polling",
    "Standardized network configuration to ensure stable device communication",
    "Optimized QR design by using Order ID as a lightweight reference for scalable transactions",
  ],
  gallery: [
    {
      src: "/images/behind-the-scene/bts1.jpg",
      alt: "Team working on the prototype hardware at a bench with tools and screens",
    },
    {
      src: "/images/behind-the-scene/bts2.jpg",
      alt: "Teammates assembling the cart prototype on the floor with a laptop",
    },
    {
      src: "/images/behind-the-scene/bts3.jpg",
      alt: "Wiring, tools, and prototype parts laid out on the floor",
    },
    {
      src: "/images/behind-the-scene/bts4.jpg",
      alt: "Teammate cutting cardboard for the cart prototype",
    },
    {
      src: "/images/behind-the-scene/bts5.jpg",
      alt: "Scanning a sample item on the ESP32 hardware with the receipt printer",
    },
  ] as GalleryImage[],
};
