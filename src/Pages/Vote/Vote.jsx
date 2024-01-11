import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import District from "./District";

const Vote = () => {

    const voterData = useLoaderData()

    console.log(voterData)

    const [divisions, setDivisions] = useState('আপনার বিভাগ নির্বাচন করুন')
    const [district, setDistrict] = useState('আপনার জেলা নির্বাচন করুন')
    const [seat, setSeat] = useState('আপনার জেলা নির্বাচন করুন')
    const [districts, setDistricts] = useState([])
    const [seats, setSeats] = useState([])

    const changeDivision = e => {
        setDivisions(e.target.value)
        setDistricts(voterData.find(dis => dis.division === e.target.value).district)
    }

    const changeDistrict = e => {
        setDistrict(e.target.value)
        setSeats(districts.find(seat => seat.districtName === e.target.value).seats)
    }

    const changeSeat = e => {
        setSeat(e.target.value)
    }
    console.log(district)

    return (
        <div className="min-h-screen">
            <form className="card-body voteFrom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-lg font-bold">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">আপনার বিভাগ নির্বাচন করুন</span>
                        </label>
                        <select value={divisions} onChange={changeDivision} required className="bg-none bg-transparent border border-black rounded-md p-2">
                            <option disabled selected>আপনার বিভাগ নির্বাচন করুন</option>
                            {
                                voterData?.map(division => {
                                    return <option value={division?.division} key={division?._id}>{division?.division}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">আপনার জেলা নির্বাচন করুন</span>
                        </label>
                        <select value={district} onChange={changeDistrict} required className="bg-none bg-transparent border border-black rounded-md p-2">
                            <option disabled selected>আপনার জেলা নির্বাচন করুন</option>
                            {
                                districts?.map(district => {
                                    return <option value={district?.districtName} key={district?.districtName}>{district?.districtName}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">আপনার আসন নির্বাচন করুন</span>
                        </label>
                        <select value={seat} onChange={changeSeat} required className="bg-none bg-transparent border border-black rounded-md p-2">
                            <option disabled selected>আপনার আসন নির্বাচন করুন</option>
                            {
                                seats?.map(seat => {
                                    return <option value={seat} key={seat}>{seat}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Vote;