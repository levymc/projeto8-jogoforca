
export default function Chute(props){
    return (
        <>
            {props.jogoIniciado && 
            <div className="chute flex">
                <label for="chute" >Já sei a palavra!</label>
                <input name="chute" data-test="guess-attribute" type="text" />
                <button data-test="guess-button">Chutar</button>
            </div>
            }
        </>
    )
}