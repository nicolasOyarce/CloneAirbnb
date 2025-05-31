import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto p-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/beach_1.jpg"
                    alt="Beach Image"
                    className="object-cover h-full w-full"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl"> Property Name</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests • 2 bedrooms • 2 beds • 1 bath
                    </span>

                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src="/profile_pic_1.jpg"
                            alt="Profiel Image"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                    
                    <p><strong>John Doe</strong> is your host</p>
                </div>

                <hr />
                <p className="mt-5 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum mollitia veritatis adipisci, nesciunt repellat facere magni commodi placeat. Quasi officiis repudiandae nulla voluptas alias voluptatibus sapiente similique praesentium impedit dolorem, exercitationem cum cupiditate necessitatibus officia laboriosam corrupti beatae facere repellat eaque ipsam.
                </p>
                    
                </div>
                <ReservationSidebar />
            </div>
        </main>
    );
};

export default PropertyDetailPage;