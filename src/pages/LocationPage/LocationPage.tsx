import { RaMApi } from "../../service/RaMService";

interface Location {
    id: number,
    name: string,
    type: string,
    dimension: string
}

const LocationPage = () => {
    const {data, error, isLoading} = RaMApi.useFetchAllLocationQuery('')
    
    return (
        <div>
              {isLoading && <div>Loading...</div>}
              {error && <div>Error...</div>}
              {!isLoading && data.results.map((char: Location) => 
                <div key={char.id}>{char.name} {char.type}</div>
              )}
        </div>
    );
};

export default LocationPage;