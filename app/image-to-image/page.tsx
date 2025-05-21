import React from "react";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import PageHeader  from "@/components/ui/PageHeader/PageHeader";
import ImageToVideoFrom from "@/components/ui/GeneralFrom/ImageToVideoFrom";
import ImageToVideoPreview from "@/components/ui/GeneralFrom/ImageToVideoPreview";

export default function Pages() {

    return (
    <div className="min-h-screen bg-black">
      <div className="flex min-h-screen flex-row bg-black text-foreground">
        <Sidebar />
        <div className="flex h-screen flex-grow flex-row">
          <div className="h-screen w-full xl:ml-[16.666667%] xl:w-full">
             <div className="h-full p-4 md:p-6">
              <PageHeader mobile={true} />
               <div className="mt-3">
                 <div className="notranslate relative w-full h-full">
                   <div className="overflow-hidden rounded-xl border border-purple-400/20 bg-gradient-to-b from-black/80 via-black/60 to-black/80 shadow-xl">
                     <div className="relative p-6">
                       <div className="relative z-10">
                         <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10">
                             {/* left */}
                             <ImageToVideoFrom />
                             {/* right */}
                             <ImageToVideoPreview />
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

               </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  );


}