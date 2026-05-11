import Image from "next/image";

const benefits = [
    {
        tag: "Tech Conferences",
        title: "Boost event visibility before launch",
        description: "Create hype weeks before the doors open. Speakers and attendees can flaunt their participation, driving organic ticket sales.",
        img: "/assets/card1.png", 
        bgColor: "bg-[#FFF9F6]",
        isWide: true,
    },
    {
        tag: "Hackathons",
        title: "Get participants sharing instantly",
        description: "Fuel the competitive spirit and showcase builder talent across Twitter and LinkedIn.",
        img: "/assets/card2.png", 
        bgColor: "bg-white",
        isWide: false,
    },
    {
        tag: "Communities",
        title: "Strengthen identity and belonging",
        description: "Reward your most active members with 'Founding Member' or 'Top Contributor' badges.",
        img: "/assets/card3.png", 
        bgColor: "bg-white",
        isWide: false,
    },
    {
        tag: "Bootcamps",
        title: "Celebrate participation and progress",
        description: "Give your graduates a beautiful credential to share on their socials, increasing your program's prestige.",
        img: "/assets/card4.png", 
        bgColor: "bg-[#FFF9F6]",
        isWide: true,
    },
];

export default function CommunityBenefits() {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            {/* Header Area */}
            <div className="text-center mb-16">
                <p className="text-sm font-medium text-gray-600 mb-2">Perfect for any community</p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#333]">
                    Be the First to try it. <span className="italic font-serif text-[#E94E1B]">right now.</span>
                </h2>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((item, index) => (
                    <div
                        key={index}
                        className={`
              ${item.bgColor} 
              ${item.isWide ? "lg:col-span-2" : "lg:col-span-1"} 
              p-8 rounded-[32px] border border-[#F5F5F5] flex flex-col justify-between overflow-hidden
            `}
                    >
                        <div className={`${item.isWide ? "flex flex-col lg:flex-row gap-8 items-center" : "flex flex-col gap-6"}`}>

                            {/* Text Content */}
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCEEE9] text-[#A05E45] text-xs font-medium mb-6">
                                    <span className="w-2 h-2 rounded-full bg-[#A05E45]" />
                                    {item.tag}
                                </div>
                                <h3 className="text-2xl font-bold text-[#2D1A12] mb-4 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[#665E5A] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Image Content */}
                            <div className={`relative w-full ${item.isWide ? "lg:w-[45%]" : "mt-8"}`}>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}