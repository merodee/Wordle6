import { Lettergrid } from "~/components/lettergrid"
import wordledata from '../data/wordledata.json'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';



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

function CheckEnter(id: number, row: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (id === 5 && e.key === "Enter" && word.length === 6) {
        const nextInput = document.querySelector(`#letter${0}${row + 1}`) as HTMLElement;
        nextInput?.focus();
        CheckWord(word.join(''))
        // clear word
        word = [];
    }
}

function CheckWord(word: string) {
    console.log('Check word', word)
    console.log('wordle letter', wordledata['wordledata'][0][0])
    if (word == wordledata['wordledata'][0]) {
        console.log('correct guess');
        toast.success("You guessed it!")
    } else {
        // check which letters are in the right position
        for (let i = 0; i < 6; i++) {
            if (word.charAt(i) == wordledata['wordledata'][0][i]) {
                console.log('letter in correct position', i)
            }
        }
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
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </main >
    )
};
