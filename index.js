let musicQ = () => {
    let name = prompt("Hey, what's your name?");

    let invite = prompt(`Nice name ${name}, you like music?`);
    if (invite==="yes") {
        alert(`I knew you were cool ${name}`);
    }
        else {
            alert(`Hey, different strokes for different folks. I respect that ${name}`);
        }
};

musicQ();