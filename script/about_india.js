function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let quan = [
    {
        "ques": "What is the capital of India?",
        "sol": { "a": "Delhi", "b": "Mumbai", "c": "Chennai", "d": "Kolkata" },
        "correct": "Delhi"
    },
    {
        "ques": "What is the Financial capital of India?",
        "sol": { "a": "Delhi", "b": "Mumbai", "c": "Chennai", "d": "Kolkata" },
        "correct": "Mumbai"
    },
    {
        "ques": "What is the IT capital of India?",
        "sol": { "a": "Delhi", "b": "Mumbai", "c": "Chennai", "d": "Banglore" },
        "correct": "Banglore"
    },
    {
        "ques": "How many states are there in India?",
        "sol": { "a": "29", "b": "27", "c": "28", "d": "26" },
        "correct": "28"
    },
    {
        "ques": "How many union terretories are there in India?",
        "sol": { "a": "7", "b": "9", "c": "10", "d": "8" },
        "correct": "8"
    },
    {
        "ques": "Who was the first Prime minister of India?",
        "sol": { "a": "Indira Gandhi", "b": "Jawaharlal Nehru", "c": "Rajiv Gandhi", "d": "Rajendra Prasad" },
        "correct": "Jawaharlal Nehru"
    },
    {
        "ques": "Who is the Father of our Nation?",
        "sol": { "a": "Jawaharlal Nehru", "b": "B.R. Ambedkar", "c": "Mahatma Gandhi", "d": "Sonia Gandhi" },
        "correct": "Mahatma Gandhi"
    },
    {
        "ques": "Who was the first President of India?",
        "sol": { "a": "Rajendra Parsad", "b": "Vallabhai Patel", "c": "B.R. Ambedkar", "d": "Subhash Chandra Bose" },
        "correct": "Jawaharlal Nehru"
    },
    {
        "ques": "Which countries do not share border with India?",
        "sol": { "a": "Myanmar", "b": "Afghanistan", "c": "Bhutan", "d": "Tajakistan" },
        "correct": "Tajakistan"
    },
    {
        "ques": "Which countries do not share border with India?",
        "sol": { "a": "Myanmar", "b": "Afghanistan", "c": "Bhutan", "d": "Tajakistan" },
        "correct": "Tajakistan"
    },
    //sgsdgdfsghdsfsdfhdsf
    // sdfghsdfgsdf
    // asgasgs
    // asgasgas 
    {
        "ques": "Which city is called Manchester of India?",
        "sol": { "a": "Ahmedabad", "b": "Chennai", "c": "Pune", "d": "Bengaluru" },
        "correct": "Ahmedabad "
    },
    {
        "ques": "Which city is called Khwaja ki Nagri of India?",
        "sol": { "a": "Bengaluru", "b": "Ajmer", "c": "Ujjain", "d": "Rishikesh" },
        "correct": "Ajmer"
    },
    {
        "ques": "Which city is called Garden City of India?",
        "sol": { "a": "Banaras", "b": "Bengaluru", "c": "Bikaner", "d": "Surat" },
        "correct": "Bengaluru "
    },
    {
        "ques": "Which city is called Gate Way of South India?",
        "sol": { "a": "Ahmedabad", "b": "Kolkata", "c": "Mysore", "d": "Chennai" },
        "correct": "Chennai"
    },
    {
        "ques": "Which city is called  Electronic Manufacturing Hub in India?",
        "sol": { "a": "Bengaluru", "b": "Chandigarh", "c": "Chennai", "d": "Agra" },
        "correct": "Chennai "
    },
    {
        "ques": "Which city is called Pump City of India?",
        "sol": { "a": "Coimbatore", "b": "Pune", "c": "Ahmedabad", "d": "Mathura" },
        "correct": "Coimbatore"
    },
    {
        "ques": "Which city is called Queen of the Hills in India?",
        "sol": { "a": "Surat", "b": "Chennai", "c": "Rishikesh", "d": "Darjeeling" },
        "correct": "Darjeeling"
    },
    {
        "ques": "Which city is called Coal Capital of India?",
        "sol": { "a": "Kolkata", "b": "Dhanbad", "c": "Noida", "d": "Bengaluru" },
        "correct": "Dhanbad "
    },
    {
        "ques": "Which city is called City of Pearls in India?",
        "sol": { "a": "Hyderabad", "b": "Bengaluru", "c": "Bhopal", "d": "Surat" },
        "correct": "Hyderabad  "
    },
    {
        "ques": "Which city is called Pink City of India?",
        "sol": { "a": "Jaipur", "b": "Ahmedabad", "c": "Ranchi", "d": "Pune" },
        "correct": "Jaipur  "
    },
    {
        "ques": "Which city is called Steel City of India?",
        "sol": { "a": "Rishikesh", "b": "Surat", "c": "Jamshedpur", "d": "Dispur" },
        "correct": "Jamshedpur "
    },
    {
        "ques": "Which city is called Sun City of India?",
        "sol": { "a": "Chennai", "b": "Agra", "c": "Mumbai", "d": "Jodhpur" },
        "correct": "Jodhpur "
    },
    {
        "ques": "Which city is called Leather City of India?",
        "sol": { "a": "Moradabad", "b": "Kanpur", "c": "Bengaluru", "d": "Pune" },
        "correct": "Kanpur "
    },
    {
        "ques": "Which city is called Rajwaro ka Shahar?",
        "sol": { "a": "Lucknow", "b": "Rishikesh", "c": "Surat", "d": "Jaipur" },
        "correct": "Jaipur"
    },
    {
        "ques": "Which city is called City of Nawabs?",
        "sol": { "a": "Ahmedabad", "b": "Lucknow", "c": "Kolkata", "d": "Deoband" },
        "correct": "Lucknow"
    },
    {
        "ques": "Which city is called City of Seven Islands?",
        "sol": { "a": "Mumbai", "b": "Kolkata", "c": "Chennai", "d": "Thiruvananthpuram" },
        "correct": "Mumbai"
    },
    {
        "ques": "Which city is called Queen of the Mountains?",
        "sol": { "a": "Nainital", "b": "Dehradun", "c": "Mussoorie", "d": "Tanakpur" },
        "correct": "Mussoorie"
    },
    {
        "ques": "Which city is called Gateway of India?",
        "sol": { "a": "Kolkata", "b": "Panaji", "c": "Chennai", "d": "Mumbai" },
        "correct": "Mumbai"
    },
    {
        "ques": "Which city is called City of Weavers?",
        "sol": { "a": "Panipat", "b": "Sehore", "c": "Bhopal", "d": "Kurukshetra" },
        "correct": "Panipat"
    },
    {
        "ques": "Which city is called Cultural Capital of India?",
        "sol": { "a": "Pune", "b": "Indore", "c": "Kolkata", "d": "Vishakhapatnam" },
        "correct": "Kolkata"
    },
    {
        "ques": "Which city is called Queen of Deccan?",
        "sol": { "a": "Patna", "b": "Pune", "c": "Surat", "d": "Bhopal" },
        "correct": "Pune"
    },
    {
        "ques": "Which city is called Yoga Capital of the World?",
        "sol": { "a": "Rishikesh", "b": "Amritsar", "c": "Bengaluru", "d": "Ahmedabad" },
        "correct": "Rishikesh"
    },
    {
        "ques": "Which city is called City of Joy?",
        "sol": { "a": "Jallandhar", "b": "Surat", "c": "Kanpur", "d": "Kolkata" },
        "correct": "Kolkata"
    },
    {
        "ques": "Which city is called Adventure Capital of India?",
        "sol": { "a": "Varanasi", "b": "Agra", "c": "Rishikesh", "d": "Ludhiana" },
        "correct": "Rishikesh"
    },

    {
        "ques": "Which city is called City of Diamonds?",
        "sol": { "a": "Pune", "b": "Surat", "c": "Ayodhya", "d": "Chennai" },
        "correct": "Surat"
    },

    {
        "ques": "Longest river in India?",
        "sol": { "a": "Ganga", "b": "Godavari", "c": "Brahmputra", "d": "Narmada" },
        "correct": "Ganga"
    },

    {
        "ques": "Which is the highest mountain peak in India?",
        "sol": { "a": "8632", "b": "8617", "c": "8611", "d": "8586" },
        "correct": "8611"
    },

    {
        "ques": "city Udaipur was named after whcih Ruler?",
        "sol": { "a": "Maharana Pratap Singh", "b": "Rana Udai singh", "c": "Ratan Sngh", "d": "Vikram Singh" },
        "correct": "Rana Udai Singh"
    },

    {
        "ques": "Who was the first wife of Maharana Pratap Singh?",
        "sol": { "a": "Rani Phool Bai Rathore ", "b": "Rani Shahmati Bai Hada", "c": "Rani Champa Bai Jhati ", "d": "Rani Ajabdeh Punwar" },
        "correct": "Rani Ajabdeh Punwar"
    },

    {
        "ques": "Which city is called City of Diamonds?",
        "sol": { "a": "1759", "b": "1757", "c": "1752", "d": "1753" },
        "correct": "1757"
    },

    {
        "ques": "The moment Pandavs left Hasthinapur they went to?",
        "sol": { "a": "Kashi", "b": "Dwarks", "c": "Indraprastha", "d": "Kurukshetra" },
        "correct": "1576"
    },

    {
        "ques": "Whom was not able to see Virat swaroop of Lord Krishna?",
        "sol": { "a": "Adhiratha", "b": "Arjun", "c": "Sanjay", "d": "None of these" },
        "correct": "Adhiratha"
    },

    {
        "ques": "Lord Ram was borned in which dynasty?",
        "sol": { "a": "Varun", "b": "Moon", "c": "Sun", "d": "None of these" },
        "correct": "Sun"
    },

    {
        "ques": "In the epic Ramayana, which bird tried to prevent Ravana from carrying Sita away?",
        "sol": { "a": "Jatayu", "b": "Garuda", "c": "Kagbhusandi", "d": "Bhulinga" },
        "correct": "Jatayu"
    },

    {
        "ques": "Which city is called City of Diamonds?",
        "sol": { "a": "Ghatotkacha", "b": "Subahu", "c": "Veeru Paksh", "d": "Mareech" },
        "correct": "Mareech"
    },

    {
        "ques": "What was the name of first wife of Bheem in Mahaharat?",
        "sol": { "a": "Anihnya", "b": "Lankni", "c": "Sufnakha", "d": "Hidimba" },
        "correct": "Hidimba"
    },

    {
        "ques": "Fourth avtar of Lord Vishnu?",
        "sol": { "a": "Kurma", "b": "Varha", "c": "Narsimha", "d": "Vamana" },
        "correct": "Narsimha"
    },

    {
        "ques": "Third avtar of Lord Vishnu?",
        "sol": { "a": "Kurma", "b": "Varha", "c": "Narsimha", "d": "Vamana" },
        "correct": "Varha"
    },

    {
        "ques": "Lord Narsimha came to kill whom?",
        "sol": { "a": "Hiranyakashyap", "b": "Hiranyaksh", "c": "Karta Virya Arjun", "d": "Bali" },
        "correct": "Hiranyakahshapa"
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

let index8 = randomNumber(34,38)
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

let index9 = randomNumber(39,43)
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

let index10 = randomNumber(44,48)
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
    ans11.innerHTML = quan[index].correct
    let showanswer1 = document.getElementById("showans1")
    if (showanswer1.style.display != "none") {
        showanswer1.style.display = "none";
    }
}
function getsol2() {
    let ans22 = document.getElementById("ans2")
    ans22.innerHTML = quan[index1].correct
    let showanswer2 = document.getElementById("showans2")
    if (showanswer2.style.display != "none") {
        showanswer2.style.display = "none";
    }
}

function getsol3() {
    let ans33 = document.getElementById("ans3")
    ans33.innerHTML = quan[index3].correct
    let showanswer3 = document.getElementById("showans3")
    if (showanswer3.style.display != "none") {
        showanswer3.style.display = "none";
    }
}

function getsol4() {
    let ans44 = document.getElementById("ans4")
    ans44.innerHTML = quan[index4].correct
    let showanswer4 = document.getElementById("showans4")
    if (showanswer4.style.display != "none") {
        showanswer4.style.display = "none";
    }
}

function getsol5() {
    let ans55 = document.getElementById("ans5")
    ans55.innerHTML = quan[index5].correct
    let showanswer5 = document.getElementById("showans5")
    if (showanswer5.style.display != "none") {
        showanswer5.style.display = "none";
    }
}

function getsol6() {
    let ans66 = document.getElementById("ans6")
    ans66.innerHTML = quan[index6].correct
    let showanswer6 = document.getElementById("showans6")
    if (showanswer6.style.display != "none") {
        showanswer6.style.display = "none";
    }
}

function getsol7() {
    let ans77 = document.getElementById("ans7")
    ans77.innerHTML = quan[index7].correct
    let showanswer7 = document.getElementById("showans7")
    if (showanswer7.style.display != "none") {
        showanswer7.style.display = "none";
    }
}

function getsol8() {
    let ans8 = document.getElementById("ans8")
    ans8.innerHTML = quan[index8].correct
    let showanswer8 = document.getElementById("showans8")
    if (showanswer8.style.display != "none") {
        showanswer8.style.display = "none";
    }
}

function getsol9() {
    let ans99 = document.getElementById("ans9")
    ans99.innerHTML = quan[index9].correct
    let showanswer9 = document.getElementById("showans9")
    if (showanswer9.style.display != "none") {
        showanswer9.style.display = "none";
    }
}

function getsol10() {
    let ans1010 = document.getElementById("ans10")
    ans1010.innerHTML = quan[index10].correct
    let showanswer10 = document.getElementById("showans10")
    if (showanswer10.style.display != "none") {
        showanswer10.style.display = "none";
    }
}