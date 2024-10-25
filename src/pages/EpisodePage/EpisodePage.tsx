import { RaMApi } from "../../service/RaMService";

interface Episode {
    id: number,
    name: string,
    air_date: string,
    episode: string
}

const EpisodePage = () => {
    const {data, error, isLoading} = RaMApi.useFetchAllEpisodeQuery('')
    
    return (
        <div>
              {isLoading && <div>Loading...</div>}
              {error && <div>Error...</div>}
              {!isLoading && data.results.map((char: Episode) => 
                <div key={char.id}>{char.name} {char.air_date}</div>
              )}
        </div>
    );
};

export default EpisodePage;