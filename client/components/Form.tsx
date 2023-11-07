import Weather from "./Weather";
import Satellites from "./Satellites"

const Form = () => {
    return (
        <div className="text-red-500">
            <Weather/>
            <Satellites/>
        </div>
    );
};

export default Form;