import { MemberCard } from "@/components/member-card";
import { teamSections } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <div id="contents" className="flex-1 w-full flex flex-col pt-5">
      <h1 className="w-full pl-[35px] text-3xl font-bold my-5">
        코치 <span className="text-gray-500 font-normal">|</span> 멘토
      </h1>
      <div className="cards" id="seniors">
        {teamSections[0].members.map((member) => (
          <MemberCard key={member.nameEn} {...member} />
        ))}
      </div>

      <h1 className="w-full pl-[35px] text-3xl font-bold my-5">S.P.I.R.I.T-25324</h1>
      <div className="cards" id="25324">
        {teamSections[1].members.map((member) => (
          <MemberCard key={member.nameEn} {...member} />
        ))}
      </div>

      <h1 className="w-full pl-[35px] text-3xl font-bold my-5">S.P.I.R.I.T-25323</h1>
      <div className="cards" id="25323">
        {teamSections[2].members.map((member) => (
          <MemberCard key={member.nameEn} {...member} />
        ))}
      </div>
    </div>
  );
}