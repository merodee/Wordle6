import { Lettergrid } from "~/components/lettergrid"


const word: string[] = [];
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

    const focusedInput = document.activeElement as HTMLElement;
    focusedInput?.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            console.log("Go Back");
            const prevInput = document.querySelector(`#letter${id}${row}`) as HTMLElement;
            prevInput?.focus();
        }
    });

    const lastInput = document.querySelector(`#letter${5}${row}`) as HTMLElement;
    lastInput.addEventListener("keydown", function (event) {
        // Check if the pressed key is "Enter"
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent default form submission if necessary
            console.log("Enter key was pressed!");
            console.log(word, row)
        }
    });

}


function Word(row: number) {
    const letters = [];
    for (let i = 0; i < 6; i++) {
        letters.push(<Lettergrid id={i} letterInput={LetterInput} key={i} row={row}></Lettergrid>)
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
