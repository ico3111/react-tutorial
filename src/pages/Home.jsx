import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Home = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <h2>HOME - {theme}</h2>
            <p>aaiaiaiaiaiia</p>
        </div>
    );
}

export default Home;