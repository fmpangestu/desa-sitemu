import BeritaPage from "./BeritaPage";
import Homepage from "./HomePage";
import VisidanMisi from "./VisidanMisi";

export default function ContentPage() {
    return (
        <div className="pt-20 lg:pt-40  w-full overflow-x-hidden ">
            <Homepage />
            <VisidanMisi/>
            <BeritaPage/>
        </div>
    )
}