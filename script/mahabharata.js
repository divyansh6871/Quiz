function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let quan = [
    {
        "ques": "Events Related to Mahabharata happened in which Yuga?",
        "sol": { "a": "Sat Yuga", "b": "Treta Yuga", "c": "Dwapar Yuga", "d": "Kali Yuga" },
        "correct": "Dwapar Yuga"
    },
    {
        "ques": "Who wrote Mahabharata?",
        "sol": { "a": "Shri Ganesh ji", "b": "Maharishi Ved Vyas ji", "c": "Maharishi Valmiki ji", "d": "Tulsi Das ji" },
        "correct": "Shri Ganesh ji"
    },
    {
        "ques": "Who didctated epic Mahabharata to Ganesh ji?",
        "sol": { "a": "Matang Rishi ji", "b": "Maharishi Ved Vyas ji", "c": "Maharishi Valmiki ji", "d": "Lord Krishna" },
        "correct": "Maharishi Ved Vyas ji"
    },
    {
        "ques": "Who was the wife of Maharaja Shantanu?",
        "sol": { "a": "Mandvi ji", "b": "Yagyasaini ji", "c": "Mandodri ji", "d": "Shakuntala ji" },
        "correct": "Shakuntala ji"
    },
    {
        "ques": "How many son did Maharaja Bharat had?",
        "sol": { "a": "8", "b": "9", "c": "10", "d": "11" },
        "correct": "9"
    },
    {
        "ques": "How many days did Mahabharat was fought?",
        "sol": { "a": "15", "b": "16", "c": "17", "d": "18" },
        "correct": "18"
    },
    {
        "ques": "How many child did Mata Ganga left in the Ganga River and left them dying",
        "sol": { "a": "8", "b": "9", "c": "10", "d": "11" },
        "correct": "8"
    },
    {
        "ques": "Who was second wife of Maharaj Bharat?",
        "sol": { "a": "Ganga Maiya", "b": "Mata Yagyasaini", "c": "Mata Satyavati", "d": "None" },
        "correct": "Mata Satyavati"
    },
    {
        "ques": "From whom did Pitamah Bheeshma took his knowledge?",
        "sol": { "a": "Guru Brahspati", "b": "Guru Parshuram ji", "c": "Guru Shukracharya", "d": "All of these" },
        "correct": "All of these"
    },
    //sgsdgdfsghdsfsdfhdsf
    // sdfghsdfgsdf
    // asgasgs
    // asgasgas 
    {
        "ques": "To whom did Guru Dron Acharya was married?",
        "sol": { "a": "Krip", "b": "Angira", "c": "Kalpana", "d": "Myanka" },
        "correct": "Krip"
    },
    {
        "ques": "What was the relation between Kul Guru Kripacharya and Gur Dron Acharya?",
        "sol": { "a": "Guru Dron was brother in law", "b": "Kul Guru was brother in law", "c": "brother", "d": "none of these" },
        "correct": "Guru Dron was brother in law"
    },
    {
        "ques": "Who was Vichitraveer in relation to Pitahmah Bheeshma?",
        "sol": { "a": "Son", "b": "Uncle", "c": "Friend", "d": "Brother" },
        "correct": "Brother "
    },
    {
        "ques": "Who were the wife of Maharaja Vichitraveer?",
        "sol": { "Amba": "12", "b": "Ambika", "c": "Ambalika", "d": "All of these" },
        "correct": "14"
    },
    {
        "ques": "Who became the reason for the death of Pitahmah Bheeshma?",
        "sol": { "Amba": "12", "b": "Ambika", "c": "Ambalika", "d": "All of these" },
        "correct": "Amba"
    },
    {
        "ques": "By which name Bhagwan krishna was referred",
        "sol": { "a": "Vasudev", "b": "Yashoda-nandna", "c": "Devki-nandan", "d": "All of these" },
        "correct": "All of these"
    },
    {
        "ques": "Where were Lord Krishna Borned",
        "sol": { "a": "Gokul", "b": "Dwarka", "c": "Mathura", "d": "Vrindavan" },
        "correct": "Mathura"
    },
    {
        "ques": "While Vasudev ji crossed Yamuna who helped the cross the Yamuna river",
        "sol": { "a": "Bhagwan Shankar", "b": "Bhagwan Sheshnag", "c": "Bhagwan Brahma", "d": "all of these" },
        "correct": "Bhagwan Sheshnag"
    },
    {
        "ques": "Who was the wife of Maharaj Dhritrashtra?",
        "sol": { "a": "Mata Gandhari", "b": "Mata Kunti", "c": "Mata Shakuntala", "d": "Mata Satyavati" },
        "correct": "Mata Gandhari"
    },
    {
        "ques": "Who was the wife of Maharaj Pandu?",
        "sol": { "a": "Mata Madri", "b": "Mata Kunti", "c": "Both", "d": "None" },
        "correct": "Both"
    },
    {
        "ques": "How many son did Maharaja Dhritrashtra had?",
        "sol": { "a": "104", "b": "100", "c": "102", "d": "101" },
        "correct": "102"
    },
    {
        "ques": "How many son did Maharaja Pandu had?",
        "sol": { "a": "3", "b": "4", "c": "5", "d": "6" },
        "correct": "5"
    },
    {
        "ques": "How many son did Mata Kunti had?",
        "sol": { "a": "3", "b": "4", "c": "5", "d": "6" },
        "correct": "4"
    },
    {
        "ques": "WMata Shabri told Lord Ram to meet whom?",
        "sol": { "a": "3", "b": "4", "c": "1", "d": "2" },
        "correct": "2 "
    },
    {
        "ques": "Who was the elder in the given names?",
        "sol": { "a": "Bheem", "b": "Duryodhan", "c": "Yudhister", "d": "Arjun" },
        "correct": "Yudhister"
    },
    {
        "ques": "Who was the elder in the given names?",
        "sol": { "a": "Bheem", "b": "Duryodhan", "c": "Dushasan", "d": "Arjun" },
        "correct": "Bheem"
    },
    {
        "ques": "Who was the elder in the given names?",
        "sol": { "a": "Nakul", "b": "Duryodhan", "c": "Yudhister", "d": "Arjun" },
        "correct": "Duryodhan"
    },
    {
        "ques": "From which Element did Mata Dropadi borned?",
        "sol": { "a": "Vayu", "b": "Jal", "c": "Agni", "d": "Yagya" },
        "correct": "Yagya"
    },
    {
        "ques": "Yudhister ji was the son of which Dev?",
        "sol": { "a": "Dharma Dev", "b": "Vayu Dev", "c": "Indra Dev", "d": "Varun Dev" },
        "correct": "Dharma Dev"
    },
    {
        "ques": "Bheem ji was the son of which Dev?",
        "sol": { "a": "Dharma Dev", "b": "Vayu Dev", "c": "Indra Dev", "d": "Varun Dev" },
        "correct": "Vayu Dev"
    },
    {
        "ques": "Arjun ji was the son of which Dev?",
        "sol": { "a": "Dharma Dev", "b": "Vayu Dev", "c": "Indra Dev", "d": "Varun Dev" },
        "correct": "Indra Dev"
    },
    {
        "ques": "For which astra and shastra Yudister ji was famous?",
        "sol": { "a": "Bhala", "b": "Gada", "c": "Dhanush-baan", "d": "none" },
        "correct": "Bhala"
    },
    {
        "ques": "For which astra and shastra Bheem ji was famous?",
        "sol": { "a": "Bhala", "b": "Gada", "c": "Dhanush-baan", "d": "none" },
        "correct": "Gada"
    },
    {
        "ques": "For which astra and shastra Arjun ji was famous?",
        "sol": { "a": "Bhala", "b": "Gada", "c": "Dhanush-baan", "d": "none" },
        "correct": "Dhanush-baan"
    },
    {
        "ques": "waht was the relation of Duryodhan and Karn?",
        "sol": { "a": "Shishya", "b": "Guru", "c": "Brother", "d": "Friend" },
        "correct": "Friend"
    },
    {
        "ques": "What was common in Angraj Karna and Ganga putra Bheeshma?",
        "sol": { "a": "Same Guru", "b": "Same Kul", "c": "Same age", "d": "Same skills"},
        "correct": "Same Guru"
    },
    {
        "ques": "Ghatothkach was son of whom?",
        "sol": { "a": "Bheem", "b": "Duryodhan", "c": "Yudhister", "d": "Arjun" },
        "correct": "Bheem"
    },

    {
        "ques": "Abhimanyu was son of whom?",
        "sol": { "a": "Bheem", "b": "Duryodhan", "c": "Yudhister", "d": "Arjun" },
        "correct": "Arjun"
    },

    {
        "ques": "Where did Pandavas hide themselves during their Agyat varsh?",
        "sol": { "a": "Virat", "b": "Ang", "c": "Dwarka", "d": "Indraprastha" },
        "correct": "Virat"
    },

    {
        "ques": "By whom Devantak was killed?",
        "sol": { "a": "Lord Hanuman ji", "b": "Maharaja Sugreev", "c": "Senapati Neel", "d": "Senapati Nal" },
        "correct": "Lord Hanuman ji"
    },

    {
        "ques": "Who killed Guru Dron Acharya",
        "sol": { "a": "Maharaja Dropad", "b": "Bheem", "c": "Drishtadyumna", "d": "Arjun" },
        "correct": "Drishtadyumna"
    },

    {
        "ques": "With whom Was Krishna playing the role of sarthi?",
        "sol": { "a": "Arjun", "b": "Bheem", "c": "Yudhiter", "d": "None" },
        "correct": "Arjun"
    },

    {
        "ques": "How many horses were there in the chariot of Arjun and Bhagwan Krishna?",
        "sol": { "a": "2", "b": "1", "c": "4", "d": "None of these" },
        "correct": "4"
    },

    {
        "ques": "After seeing whom Pitahmaah Bheesham did not attack?",
        "sol": { "a": "Arjun", "b": "lord Laksmana", "c": "Yudhister", "d": "Shikhandi" },
        "correct": "Shikhandi"
    },

    {
        "ques": "Who are the chiranjeevi since the Dwapar yuga?",
        "sol": { "a": "Ved Vyas ji", "b": "Ashwatthama", "c": "both", "d": "None" },
        "correct": "Both"
    }
]

console.log(quan.length)

let index = randomNumber(0, 3)
let q1 = document.getElementById("question1")
q1.innerHTML = q1.innerHTML + quan[index].ques
let s1a = document.getElementById("sol1optiona")
s1a.innerHTML = s1a.innerHTML + quan[index].sol.a
let s1b = document.getElementById("sol1optionb")
s1b.innerHTML = s1b.innerHTML + quan[index].sol.b
let s1c = document.getElementById("sol1optionc")
s1c.innerHTML = s1c.innerHTML + quan[index].sol.c
let s1d = document.getElementById("sol1optiond")
s1d.innerHTML = s1d.innerHTML + quan[index].sol.d

let index1 = randomNumber(4,8)
let q2 = document.getElementById("question2")
q2.innerHTML = q2.innerHTML + quan[index1].ques
let s2a = document.getElementById("sol2optiona")
s2a.innerHTML = s2a.innerHTML + quan[index1].sol.a
let s2b = document.getElementById("sol2optionb")
s2b.innerHTML = s2b.innerHTML + quan[index1].sol.b
let s2c = document.getElementById("sol2optionc")
s2c.innerHTML = s2c.innerHTML + quan[index1].sol.c
let s2d = document.getElementById("sol2optiond")
s2d.innerHTML = s2d.innerHTML + quan[index1].sol.d

let index3 = randomNumber(9,13)
let q3 = document.getElementById("question3")
q3.innerHTML = q3.innerHTML + quan[index3].ques
let s3a = document.getElementById("sol3optiona")
s3a.innerHTML = s3a.innerHTML + quan[index3].sol.a
let s3b = document.getElementById("sol3optionb")
s3b.innerHTML = s3b.innerHTML + quan[index3].sol.b
let s3c = document.getElementById("sol3optionc")
s3c.innerHTML = s3c.innerHTML + quan[index3].sol.c
let s3d = document.getElementById("sol3optiond")
s3d.innerHTML = s3d.innerHTML + quan[index3].sol.d

let index4 = randomNumber(14,18)
let q4 = document.getElementById("question4")
q4.innerHTML = q4.innerHTML + quan[index4].ques
let s4a = document.getElementById("sol4optiona")
s4a.innerHTML = s4a.innerHTML + quan[index4].sol.a
let s4b = document.getElementById("sol4optionb")
s4b.innerHTML = s4b.innerHTML + quan[index4].sol.b
let s4c = document.getElementById("sol4optionc")
s4c.innerHTML = s4c.innerHTML + quan[index4].sol.c
let s4d = document.getElementById("sol4optiond")
s4d.innerHTML = s4d.innerHTML + quan[index4].sol.d

let index5 = randomNumber(19,23)
let q5 = document.getElementById("question5")
q5.innerHTML = q5.innerHTML + quan[index5].ques
let s5a = document.getElementById("sol5optiona")
s5a.innerHTML = s5a.innerHTML + quan[index5].sol.a
let s5b = document.getElementById("sol5optionb")
s5b.innerHTML = s5b.innerHTML + quan[index5].sol.b
let s5c = document.getElementById("sol5optionc")
s5c.innerHTML = s5c.innerHTML + quan[index5].sol.c
let s5d = document.getElementById("sol5optiond")
s5d.innerHTML = s5d.innerHTML + quan[index5].sol.d

let index6 = randomNumber(24,28)
let q6 = document.getElementById("question6")
q6.innerHTML = q6.innerHTML + quan[index6].ques
let s6a = document.getElementById("sol6optiona")
s6a.innerHTML = s6a.innerHTML + quan[index6].sol.a
let s6b = document.getElementById("sol6optionb")
s6b.innerHTML = s6b.innerHTML + quan[index6].sol.b
let s6c = document.getElementById("sol6optionc")
s6c.innerHTML = s6c.innerHTML + quan[index6].sol.c
let s6d = document.getElementById("sol6optiond")
s6d.innerHTML = s6d.innerHTML + quan[index6].sol.d

let index7 = randomNumber(29,33)
let q7 = document.getElementById("question7")
q7.innerHTML = q7.innerHTML + quan[index7].ques
let s7a = document.getElementById("sol7optiona")
s7a.innerHTML = s7a.innerHTML + quan[index7].sol.a
let s7b = document.getElementById("sol7optionb")
s7b.innerHTML = s7b.innerHTML + quan[index7].sol.b
let s7c = document.getElementById("sol7optionc")
s7c.innerHTML = s7c.innerHTML + quan[index7].sol.c
let s7d = document.getElementById("sol7optiond")
s7d.innerHTML = s7d.innerHTML + quan[index7].sol.d

let index8 = randomNumber(34,37)
let q8 = document.getElementById("question8")
q8.innerHTML = q8.innerHTML + quan[index8].ques
let s8a = document.getElementById("sol8optiona")
s8a.innerHTML = s8a.innerHTML + quan[index8].sol.a
let s8b = document.getElementById("sol8optionb")
s8b.innerHTML = s8b.innerHTML + quan[index8].sol.b
let s8c = document.getElementById("sol8optionc")
s8c.innerHTML = s8c.innerHTML + quan[index8].sol.c
let s8d = document.getElementById("sol8optiond")
s8d.innerHTML = s8d.innerHTML + quan[index8].sol.d

let index9 = randomNumber(38,40)
let q9 = document.getElementById("question9")
q9.innerHTML = q9.innerHTML + quan[index9].ques
let s9a = document.getElementById("sol9optiona")
s9a.innerHTML = s9a.innerHTML + quan[index9].sol.a
let s9b = document.getElementById("sol9optionb")
s9b.innerHTML = s9b.innerHTML + quan[index9].sol.b
let s9c = document.getElementById("sol9optionc")
s9c.innerHTML = s9c.innerHTML + quan[index9].sol.c
let s9d = document.getElementById("sol9optiond")
s9d.innerHTML = s9d.innerHTML + quan[index9].sol.d

let index10 = randomNumber(41,44)
let q10 = document.getElementById("question10")
q10.innerHTML = q10.innerHTML + quan[index10].ques
let s10a = document.getElementById("sol10optiona")
s10a.innerHTML = s10a.innerHTML + quan[index10].sol.a
let s10b = document.getElementById("sol10optionb")
s10b.innerHTML = s10b.innerHTML + quan[index10].sol.b
let s10c = document.getElementById("sol10optionc")
s10c.innerHTML = s10c.innerHTML + quan[index10].sol.c
let s10d = document.getElementById("sol10optiond")
s10d.innerHTML = s10d.innerHTML + quan[index10].sol.d

function hidesol1() {

}

function getsol1() {
    let ans11 = document.getElementById("ans1")
    ans11.style.display="inline"
    ans11.innerHTML = quan[index].correct
    let showanswer1 = document.getElementById("showans1")
    if (showanswer1.style.display != "none") {
        showanswer1.style.display = "none";
    }
}
function getsol2() {
    let ans22 = document.getElementById("ans2")
    ans22.style.display="inline"
    ans22.innerHTML = quan[index1].correct
    let showanswer2 = document.getElementById("showans2")
    if (showanswer2.style.display != "none") {
        showanswer2.style.display = "none";
    }
}

function getsol3() {
    let ans33 = document.getElementById("ans3")
    ans33.style.display="inline"
    ans33.innerHTML = quan[index3].correct
    let showanswer3 = document.getElementById("showans3")
    if (showanswer3.style.display != "none") {
        showanswer3.style.display = "none";
    }
}

function getsol4() {
    let ans44 = document.getElementById("ans4")
    ans44.style.display="inline"
    ans44.innerHTML = quan[index4].correct
    let showanswer4 = document.getElementById("showans4")
    if (showanswer4.style.display != "none") {
        showanswer4.style.display = "none";
    }
}

function getsol5() {
    let ans55 = document.getElementById("ans5")
    ans55.style.display="inline"
    ans55.innerHTML = quan[index5].correct
    let showanswer5 = document.getElementById("showans5")
    if (showanswer5.style.display != "none") {
        showanswer5.style.display = "none";
    }
}

function getsol6() {
    let ans66 = document.getElementById("ans6")
    ans66.style.display="inline"
    ans66.innerHTML = quan[index6].correct
    let showanswer6 = document.getElementById("showans6")
    if (showanswer6.style.display != "none") {
        showanswer6.style.display = "none";
    }
}

function getsol7() {
    let ans77 = document.getElementById("ans7")
    ans77.style.display="inline"
    ans77.innerHTML = quan[index7].correct
    let showanswer7 = document.getElementById("showans7")
    if (showanswer7.style.display != "none") {
        showanswer7.style.display = "none";
    }
}

function getsol8() {
    let ans88 = document.getElementById("ans8")
    ans88.style.display="inline"
    ans88.innerHTML = quan[index8].correct
    let showanswer8 = document.getElementById("showans8")
    if (showanswer8.style.display != "none") {
        showanswer8.style.display = "none";
    }
}

function getsol9() {
    let ans99 = document.getElementById("ans9")
    ans99.style.display="inline"
    ans99.innerHTML = quan[index9].correct
    let showanswer9 = document.getElementById("showans9")
    if (showanswer9.style.display != "none") {
        showanswer9.style.display = "none";
    }
}

function getsol10() {
    let ans1010 = document.getElementById("ans10")
    ans1010.style.display="inline"
    ans1010.innerHTML = quan[index10].correct
    let showanswer10 = document.getElementById("showans10")
    if (showanswer10.style.display != "none") {
        showanswer10.style.display = "none";
    }
}

