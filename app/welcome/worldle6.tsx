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
        CheckWord(word.join(''), row)
        // clear word
        word = [];
    }
}

function CheckWord(word: string, row: number) {
    const correctLetters: string[] = [];
    if (word == wordledata['wordledata'][0]) {
        console.log('correct guess');
        toast.success("You guessed it!");
    } else {
        // check which letters are in the right position
        for (let i = 0; i < 6; i++) {
            if (word.charAt(i) == wordledata['wordledata'][0][i]) {
                correctLetters.push(word.charAt(i))
                console.log('letter in correct position', i);
                const letterInput = document.querySelector(`#letter${i}${row}`) as HTMLElement;
                if (letterInput) {
                    console.log('here at input')
                    letterInput.style.backgroundColor = 'green';
                }
            }
        }
        // letters in word, but not in right position
        for (let j = 0; j < 6; j++) {
            if (wordledata['wordledata'][0].includes(word.charAt(j)) && word.charAt(j) !== wordledata['wordledata'][0][j] && !correctLetters.includes(word.charAt(j))) {
                console.log('letter ' + word.charAt(j) + ' in word, but incorrect position ' + wordledata['wordledata'][0].indexOf(word.charAt(j)))
                const letterInput = document.querySelector(`#letter${j}${row}`) as HTMLElement;
                if (letterInput) {
                    letterInput.style.backgroundColor = 'orange';
                }
            }
        }

    }
}


function Word(row: number) {
    const letters: React.JSX.Element[] = [];
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
