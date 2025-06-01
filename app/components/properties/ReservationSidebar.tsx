const ReservationSidebar = () => {
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">
                <span className="text-2xl font-semibold">$150</span> per night
            </h2>

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="block font-bold text-xs">Guests</label>
                <select className="w-full -ml-1 text-xm">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                </select>
            </div>

            <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnbDark rounded-xl">
                Book
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>$200 * 4 nights</p>
                <p>$800</p>
            </div>
            <div className="mb-4 flex justify-between align-center">
                <p>Cloneairbnb fee</p>
                <p>$40</p>
            </div>
            <hr />
            <div className="mb-4 pt-1 flex justify-between align-center font-bold">
                <p>Total</p>
                <p>$840</p>
            </div>
        </aside>
    );
};

export default ReservationSidebar;