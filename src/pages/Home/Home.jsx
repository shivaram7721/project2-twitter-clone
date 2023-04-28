// import { getUsers } from "../../utils/localStorage";
import { Tweets } from "../../components/tweets/tweets";
import { Footer } from "../../components/footer/footer";

export function Home() {

        
    return (
        <div>
            {/* <h1>Home page</h1> */}
            <Tweets />
            <Footer />
        </div>
    );
}