import { Lettergrid } from "~/components/lettergrid"


let word: string[] = [];
function LetterInput(letter: string, id: number, row: number) {
    console.log(letter, id);
    if (letter != '') {
        const nextInput = document.querySelector(`#letter${id + 1}${row}`) as HTMLElement;
        nextInput?.focus();
        word.push(letter)
    } else {
        const prevInput = document.querySelector(`#letter${id - 1}${row}`) as HTMLElement;
        prevInput?.focus();
        word.pop();
    }

}

function CheckEnter (id: number, row: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (id === 5 && e.key === "Enter") {
        console.log('Enter pressed', word);
        word = [];
        const nextInput = document.querySelector(`#letter${0}${row+1}`) as HTMLElement;
        nextInput?.focus();
    }
}

function Word(row: number) {
    const letters = [];
    for (let i = 0; i < 6; i++) {
        letters.push(<Lettergrid id={i} letterInput={LetterInput} key={i} row={row} checkEnter={CheckEnter}></Lettergrid>)
    }
    return letters;
}
export function Worldle6() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div>
                <h1>Welcome to Worldle6</h1>
                <br></br>
                {Word(1)}
                <br></br>
                {Word(2)}
                <br></br>
                {Word(3)}
                <br></br>
                {Word(4)}
                <br></br>
                {Word(5)}
                <br></br>

            </div>
        </main >
    )
};
