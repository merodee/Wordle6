import { Lettergrid } from "~/components/lettergrid"

function LetterInput(letter: string) {
    console.log(letter);
}

function Letters(){
    const letters = [];
    for (let i = 0; i < 6; i++) {
        letters.push(<Lettergrid id={i} letterInput={LetterInput}></Lettergrid>)
    }
    return letters;
}
export function Worldle6() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div>
                <h1>Welcome to Worldle6</h1>
                <br></br>
                {Letters()}
                <br></br>

            </div>
        </main >
    )
};
