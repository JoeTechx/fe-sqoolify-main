import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Instagram, Mail, Smartphone, Star, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const AgentProfile = ({
  togglePersonalInfo,
  showPersonalInfo
}: {
  togglePersonalInfo: () => void;
  showPersonalInfo: boolean
}) => {
  return (
    <div className="py-6 px-4 border-2 min-[850px]:border-none border-[#F8F8FD] flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/images/user.png" />
          <AvatarFallback>JB</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center items-baseline">
          <p className="text-lg min-[850px]:text-xl font-semibold">
            Jerome Bell
          </p>
          <p>ID AM21-10</p>
          <div className="flex items-center gap-1">
            <Star className="text-yellow-400" size={20} />
            <span className="text-[18px]">4.0</span>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8FD] rounded-md px-2 py-3 flex flex-col gap-2">
        <p className="text-muted-foreground">Teaching Role</p>
        <Separator />
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Physics</p>
          <span className="bg-[#5542F61A] px-2 py-1 rounded-sm text-[#5542F6]">
            Full time
          </span>
        </div>
      </div>
      <div className="bg-[#F8F8FD] rounded-md px-2 py-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Class</p>
          <p className="">SS 2B</p>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Sub Subject</p>
          <p className="">Chemistry</p>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <p className="text-xl">Contact</p>
        <div className="flex gap-6">
          <Mail className="text-muted-foreground" size={20} />
          <div>
            <p className="text-muted-foreground">Email</p>
            <p className="text-[14px]">jeromeBell45@email.com</p>
          </div>
        </div>
        <div className="flex gap-6">
          <Smartphone className="text-muted-foreground" size={23} />
          <div>
            <p className="text-muted-foreground">Phone</p>
            <p className="text-[14px]">+44 1245 572 135</p>
          </div>
        </div>
        <div className="flex gap-6">
          <Instagram className="text-muted-foreground" size={20} />
          <div>
            <p className="text-muted-foreground">Instagram</p>
            <p className="text-[14px]">instagram.com/jeromebell</p>
          </div>
        </div>
        <div className="flex gap-6">
          <Twitter className="text-muted-foreground " size={22} />
          <div>
            <p className="text-muted-foreground">Twitter</p>
            <p className="text-[14px]">twitter.com/jeromebell</p>
          </div>
        </div>
        <button
          onClick={togglePersonalInfo}
          className="block min-[850px]:hidden mt-4 px-4 py-2 underline text-[#5542F6] w-fit ml-auto"
        >
          {showPersonalInfo ? 'View More' : 'View Less'}
        </button>
      </div>
    </div>
  );
};

export default AgentProfile;
