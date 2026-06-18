interface Props {
    id: number;
    letterInput: (letter: string) => void
}


export function Lettergrid({ id, letterInput }: Props) {
    return (
        <input name="letter" maxLength={1} type="text" onChange={(e) => letterInput(e.target.value)}  style={{
            backgroundColor: 'lightblue', width: '50px',
            height: '50px',
            textAlign: 'center',       // Keeps typed text centered
            border: '1px solid #ccc', // Sets a clear border
            borderRadius: '0px'
        }} className="mr-8" id={`letter${id}`} ></input>
    )
};