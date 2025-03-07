import Cushion from "../assets/Cushion.webp";
import Teal2 from "../assets/Teal2.webp";
import Teal3 from "../assets/Teal3.webp";
import Table1 from "../assets/Table1.webp";
import Table2 from "../assets/Table2.webp";

const Grid = () => {
  return (
    <div className="flex h-[92vh] p-6 gap-4"> {/* Added gap-4 between main divs */}
      {/* First Div (Same height as Second Div) */}
      <div className="h-full w-[35%]">
        <img
          src={Cushion}
          alt="Main"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Second Div (Fully Occupying Remaining Space) */}
      <div className="flex flex-col flex-grow gap-4">
        {/* Row 1 */}
        <div className="flex flex-grow gap-4">
          <img
            src={Teal2}
            alt="Small 1"
            className="w-1/2 h-full object-cover rounded-lg"
          />
          <img
            src={Teal3}
            alt="Small 2"
            className="w-1/2 h-full object-cover rounded-lg"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-grow gap-4">
          <img
            src={Table1}
            alt="Small 3"
            className="w-1/2 h-full object-cover rounded-lg"
          />
          <img
            src={Table2}
            alt="Small 4"
            className="w-1/2 h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
