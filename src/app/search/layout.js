
import Searchheader from "@sambhav/components/Searchheader";
import "./../globals.css";



export default function SearchLayout({ children }) {
  return (
    <div>
      <Searchheader/>
      
      {children}
      {/* Footer */}
     
    </div>
  );
}
