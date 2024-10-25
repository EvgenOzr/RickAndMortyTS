import { RaMApi } from "../../service/RaMService";
import './AllImagesPage.sass'

interface CharacterImage {
    id: number,
    name: string,
    image: string,
}

const AllImagesPage = () => {

    const {data, error, isLoading} = RaMApi.useFetchAllCharactersQuery('')

    return (
        <div className="allImage columns-3 px-14" >
              {isLoading && <div>Loading...</div>}
              {error && <div>Error...</div>}
              {!isLoading && data.results.map((char: CharacterImage) => 
                <div
                    
                    key={char.id}>
                    <img 
                        className="character-image"
                        src={char.image}
                        title={char.name}
                        alt={char.name}></img>    
                </div>
              )}
        </div>
    );
};

export default AllImagesPage;
