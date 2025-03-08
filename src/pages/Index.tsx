
import React from "react";
import Header from "@/components/Header";
import TourDates from "@/components/TourDates";
import Guestbook from "@/components/Guestbook";
import Footer from "@/components/Footer";
import GlitterCursor from "@/components/GlitterCursor";
import BandMemberBio from "@/components/BandMemberBio";
import TourExperiences from "@/components/TourExperiences";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const bandMembers = [
    { 
      name: "McCall", 
      role: "davvn - Lead Vocals", 
      img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23FF66B2'/%3E%3Ccircle cx='75' cy='55' r='30' fill='%23FFFFFF'/%3E%3Crect x='45' y='85' width='60' height='65' fill='%23FFFFFF'/%3E%3C/svg%3E",
      bio: "McCall is the energetic lead vocalist of davvn, known for her unique voice and bubbly stage presence. She's been singing since she was 9 years old and draws inspiration from Y2K pop/rock icons. When not on stage, she's designing webistes and collecting 2000's era tech."
    },
    { 
      name: "Mike", 
      role: "davvn - Guitar", 
      img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%2366CCFF'/%3E%3Ccircle cx='75' cy='55' r='30' fill='%23FFFFFF'/%3E%3Crect x='45' y='85' width='60' height='65' fill='%23FFFFFF'/%3E%3C/svg%3E",
      bio: "Mike is davvn's guitar virtuoso, bringing melodic riffs and nostalgic sounds to every performance. He started playing guitar after finding his dad's old instrument in the attic. He's obsessed with early 2000s rock bands and has an impressive collection of vintage guitar pedals."
    },
    { 
      name: "Jack", 
      role: "Jack The Underdog", 
      img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%239966FF'/%3E%3Ccircle cx='75' cy='55' r='30' fill='%23FFFFFF'/%3E%3Crect x='45' y='85' width='60' height='65' fill='%23FFFFFF'/%3E%3C/svg%3E",
      bio: "Jack The Underdog is a solo artist who blends nostalgia with modern beats. Rising from humble beginnings, Jack has created a sound that's uniquely 2000s yet fresh. He's known for his interactive performances and connecting with fans through social media."
    },
  ];

  return (
    <div className="min-h-screen">
      <GlitterCursor />
      
      <Header />
      
      {/* Tour Dates Section */}
      <TourDates />
      
      <div className="max-w-5xl mx-auto px-4">
        <Separator className="border-2 border-dashed border-white" />
      </div>
      
      {/* Band Members Section */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="w-3 h-3 bg-y2k-green rounded-full animate-sparkle mr-2" />
          <h2 className="text-3xl font-bold text-y2k-blue inline-block">Meet The Bands!</h2>
          <div className="w-3 h-3 bg-y2k-green rounded-full animate-sparkle ml-2" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bandMembers.map((member, index) => (
            <BandMemberBio 
              key={index}
              name={member.name}
              role={member.role}
              img={member.img}
              bio={member.bio}
            />
          ))}
        </div>
      </section>
      
      <div className="max-w-5xl mx-auto px-4">
        <Separator className="border-2 border-dashed border-white" />
      </div>
      
      {/* Tour Photos */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="w-3 h-3 bg-y2k-hotPink rounded-full animate-sparkle mr-2" />
          <h2 className="text-3xl font-bold text-y2k-green inline-block">Tour Photos!</h2>
          <div className="w-3 h-3 bg-y2k-hotPink rounded-full animate-sparkle ml-2" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((photo) => (
            <div key={photo} className="y2k-border p-2 bg-white rounded-lg transform hover:rotate-2 transition-transform">
              <div 
                className="h-40 bg-gray-200 flex items-center justify-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='%23${Math.floor(Math.random()*16777215).toString(16)}' d='M0 0h100v100H0z'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' text-anchor='middle' dominant-baseline='middle' fill='white'%3ETour Photo ${photo}%3C/text%3E%3C/svg%3E")`,
                  backgroundSize: 'cover'
                }}
              />
              <p className="text-center mt-2 text-xs font-bold text-y2k-purple">
                Summer Tour 2023 - Photo #{photo}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <TourExperiences />
        </div>
      </section>
      
      <div className="max-w-5xl mx-auto px-4">
        <Separator className="border-2 border-dashed border-white" />
      </div>
      
      <Guestbook />
      
      <Footer />
      
      {/* Animated elements */}
      <div className="fixed top-20 left-10 animate-float z-10">
        <div className="w-16 h-16 bg-contain bg-no-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\"%3E%3Cpath fill=\"%23FF66B2\" d=\"M32 5.83l6.4 19.69h20.71l-16.76 12.18 6.4 19.68L32 45.2l-16.76 12.18 6.4-19.68L4.89 25.52h20.71z\"/%3E%3C/svg%3E')" }} />
      </div>
      <div className="fixed bottom-20 right-10 animate-float z-10" style={{ animationDelay: "1s" }}>
        <div className="w-14 h-14 bg-contain bg-no-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"56\" height=\"56\" viewBox=\"0 0 56 56\"%3E%3Cpath fill=\"%239966FF\" d=\"M28 4.86l5.28 16.26h17.1l-13.84 10.05 5.28 16.26L28 37.38l-13.82 10.05 5.28-16.26L5.62 21.12h17.1z\"/%3E%3C/svg%3E')" }} />
      </div>
    </div>
  );
};

export default Index;
