export default function Characters(props) {
 const {personajes, setCharacters} = props;

 const resetCharacter = () => {
    setCharacters(null);
 }
 
  return (
    <div className="characters">
    <h1>Personajes</h1>
    <span className="back-home" onClick={resetCharacter}>Volver a la Home</span>
    <div className="container-characters">
        {personajes.map((Character,index) => (
            <div className="character-container" key={index}>
              <div> 
                  <img src={Character.image} alt ={Character.name}/>
              </div> 

              <div>
                  <h3>{Character.name}</h3>
                  <h6>{Character.status === 'Alive' ? (
                    <>
                      <span className="alive"/>
                      Alive
                    </>
                  ):(
                    <>
                      <span className="dead"/>
                        Dead
                     
                    </>
                  )}</h6>
                  <p className="text-grey">
                    <span>Episodios: </span>
                    <span>{Character.episode.length}</span>
                  </p>
                  <p>
                    <span className="text-grey">Especie: </span>
                    <span>{Character.species}</span>
                  </p>
              </div>
            </div>
        ))}
    </div>
    <span className="back-home" onClick={resetCharacter}>Volver a la Home</span>
   
    </div>
  )
}
