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

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const division = form.division.value
        const district = form.district.value
        const seat = form.seat.value
        console.log(division, district, seat)
    }

    return (
        <div className="min-h-screen lg:min-h-[80vh]">
            <form onSubmit={handleSubmit} className="card-body voteFrom w-80 lg:w-1/2 mx-auto">
                <div className=" text-lg font-bold">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">আপনার বিভাগ নির্বাচন করুন</span>
                        </label>
                        <select name="division" value={divisions} onChange={changeDivision} required className="bg-none bg-transparent border border-black rounded-md p-2">
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
                        <select name="district" value={district} onChange={changeDistrict} required className="bg-none bg-transparent border border-black rounded-md p-2">
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
                        <select name="seat" value={seat} onChange={changeSeat} required className="bg-none bg-transparent border border-black rounded-md p-2">
                            <option disabled selected>আপনার আসন নির্বাচন করুন</option>
                            {
                                seats?.map(seat => {
                                    return <option value={seat} key={seat}>{seat}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className=" mt-6">
                    <input className="btn btn-primary" type="submit" value="Next" />
                </div>
            </form>
        </div>
    );
};

export default Vote;