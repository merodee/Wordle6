interface Props {
    id: number;
    letterInput: (letter: string, id: number, row: number) => void
    row: number;
}


export function Lettergrid({ id, letterInput, row }: Props) {
    return (
        <input name="letter" maxLength={1} type="text" onChange={(e) => letterInput(e.target.value, id, row)} style={{
            backgroundColor: 'black', width: '50px',
            height: '50px',
            textAlign: 'center',       // Keeps typed text centered
            border: '1px solid #ccc', // Sets a clear border
            borderRadius: '0px'
        }} className="mr-2 mb-8" id={`letter${id}${row}`} ></input>
    )
};