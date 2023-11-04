import React from "react";
import swal from "sweetalert";

const Main = () => {

    const [donateInfo, setDonateInfo] = React.useState({
        email: "",
        fullname: "",
        contact: "",
    })
    const handleClear = () => {
        setDonateInfo({
            email: "",
            fullname: "",
            contact: "",
        })
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDonateInfo((prevDonate) => ({
            ...prevDonate,
            [name]: value,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        swal("Restoration Foundation International", "Information Sent", "success")
        handleClear()
    }

    return (
        <div className="relative w-full py-12">

            <div className="mx-auto flex flex-wrap items-center ml-12">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 lg:pr-10 md:mt-16 -mt-2">
                    <div className="border-l-4 border-yellow-500  pl-2">
                        <h2 className=' text-2xl font-quicksand text-yellow-500 font-medium ml-2'>Get In Touch</h2>
                    </div>
                    <h2 className=' md:text-5xl text-3xl md:p-0 pr-1 font-quicksand mt-6 font-bold'>
                        Contact for any query
                    </h2>
                    <div className=" p-10">
                        <form onSubmit={handleSave} className="bg-gray-200 p-6 rounded-md md:-ml-12 -ml-12 md:p-6 ">
                            <div className="mb-4">
                                <label htmlFor="fullname" className="block font-quicksand mb-2 text-gray-600 text-sm font-medium">Name</label>
                                <input
                                    required
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    value={donateInfo.fullname}
                                    onChange={handleInputChange}
                                    className="w-full font-quicksand text-sm border border-gray-300 rounded-sm focus:outline-none p-2"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block font-quicksand mb-2 text-gray-600 text-sm font-medium">Email</label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={donateInfo.email}
                                    onChange={handleInputChange}
                                    className="w-full border font-quicksand text-sm border-gray-300 focus:outline-none p-2"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="contact" className="block font-quicksand mb-2 text-gray-600 text-sm font-medium">Contact</label>
                                <input
                                    required
                                    type="tel"
                                    id="contact"
                                    name="contact"
                                    value={donateInfo.contact}
                                    onChange={handleInputChange}
                                    className="w-full font-quicksand text-sm border border-gray-300 rounded-sm focus:outline-none p-2"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-gold w-full text-white font-medium rounded-sm md:mt-6 mt-4 font-quicksand px-4 py-2 hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                {/* Right Column */}
                <div className="w-full lg:w-1/2 p-6 md:mt-32">
                    <div className="md:mr-6 md:ml-0 -ml-12">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4347797006817!2d0.4339410741830305!3d6.592759322356307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10273bf86c29584d%3A0x1db21d1409132593!2sVAG%20Hall!5e0!3m2!1sen!2sgh!4v1699103732215!5m2!1sen!2sgh"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-96"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
