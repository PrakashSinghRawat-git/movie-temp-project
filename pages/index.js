import axios from "axios";
import Hero from "../components/Hero";
import PopularMovie from "../components/PopularMovie";
import { server } from "../config";

export default function Home({ movies }) {
    return (
        <div className="bg-gray-700">
            <PopularMovie movies={movies.results} />
        </div>
    );
}

export async function getStaticProps() {
    const res = await axios(
        `${server}/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    );
    const movies = res.data;

    return {
        props: { movies },
    };
}
