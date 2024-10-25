import Spinner from "../../components/Spinner/Spinner";
import { RaMApi } from "../../service/RaMService";

interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string
}


const CharacterPage = () => {

    const {data, error, isLoading} = RaMApi.useFetchAllCharactersQuery('')

    return (
        <div>
              {isLoading && <Spinner/>}
              {error && <div>Error...</div>}
              {!isLoading && data.results.map((char: Character) => 
                <div key={char.id}>{char.name} {char.status}</div>
              )}
        </div>
    );
};

export default CharacterPage;