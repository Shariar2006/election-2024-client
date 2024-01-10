/* eslint-disable react/prop-types */

const District = ({district}) => {
    console.log(district ,district?.district)
    return (
        <div>
            <option value="">
            {
                district?.district?.map(district => <div key={district?._id} >{district?.division}</div>)
            }
            </option>
        </div>
    );
};

export default District;