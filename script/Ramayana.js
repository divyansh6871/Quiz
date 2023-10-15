function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let quan = [
    {
        "ques": "Events Related to Ramayan happened in which Yuga?",
        "sol": { "a": "Sat Yuga", "b": "Treta Yuga", "c": "Dwapar Yuga", "d": "Kali Yuga" },
        "correct": "Treta Yuga"
    },
    {
        "ques": "Maharaj Dashratha Had how many wife?",
        "sol": { "a": "2", "b": "4", "c": "3", "d": "5" },
        "correct": "3"
    },
    {
        "ques": "Who was first wife of Maharaj Dahsratha?",
        "sol": { "a": "Mata Kausalya", "b": "Mata Kaikeyi", "c": "Mata Sumitra", "d": "None" },
        "correct": "Mata Kausalya"
    },
    {
        "ques": "Who was second wife of Maharaj Dahsratha?",
        "sol": { "a": "Mata Kausalya", "b": "Mata Kaikeyi", "c": "Mata Sumitra", "d": "None" },
        "correct": "Mata Kaikeyi"
    },
    {
        "ques": "Who was third wife of Maharaj Dahsratha?",
        "sol": { "a": "Mata Kausalya", "b": "Mata Kaikeyi", "c": "Mata Sumitra", "d": "None" },
        "correct": "Mata Sumitra"
    },
    {
        "ques": "what was the name of family servant that made the Mata Kaikeyi mind diverted?",
        "sol": { "a": "Bimla", "b": "Kamla", "c": "Kiran", "d": "Manthara" },
        "correct": "Manthara"
    },
    {
        "ques": "Lord Ram was Avtar of whom?",
        "sol": { "a": "Lord Vishnu", "b": "Lord Shankar", "c": "Both", "d": "None of them" },
        "correct": "Lord Visnu, although Lord Ram is sampoorna Avtar"
    },
    {
        "ques": "Maharaj Dashratha had how many son",
        "sol": { "a": "2", "b": "3", "c": "4", "d": "5" },
        "correct": "4"
    },
    {
        "ques": "Which Rani of Maharaj Dashratha had 2 sons?",
        "sol": { "a": "Mata Kausalya", "b": "Mata Kaikeyi", "c": "Mata Sumitra", "d": "None" },
        "correct": "Mata Sumitra"
    },
    {
        "ques": "Among which pair who was brothers by same mother?",
        "sol": { "a": "Lord Ram and Lord Lakshmana", "b": "Lord Ram and Lord Bharat", "c": "Lord Bharat and Lord Shatrughna", "d": "Lord Lakshmana and Lord Shatrughna" },
        "correct": "Lord Lakshmana and Lord Shatrughna"
    },
    //sgsdgdfsghdsfsdfhdsf
    // sdfghsdfgsdf
    // asgasgs
    // asgasgas 
    {
        "ques": "Whom took all four brothers to gurukul?",
        "sol": { "a": "Maharishi Bhardwaj", "b": "Maharishi Agast", "c": "Maharishi valmiki", "d": "Maharishi Vashishta" },
        "correct": "Maharishi Vashishta"
    },
    {
        "ques": "Who is aradhya bhagwan of Lord Ram?",
        "sol": { "a": "Lord Shankar", "b": "Lord Vishnu", "c": "Lord Brahma", "d": "none of these" },
        "correct": "Lord Shankar"
    },
    {
        "ques": "Lord Ram came to make people free from whom rule?",
        "sol": { "a": "Kartavirya Arjuna", "b": "Dashanan", "c": "Hiranyaksh", "d": "Hiranyakahsyap" },
        "correct": "Dashanan "
    },
    {
        "ques": "For how many years Lord Ram needed to stay in forest?",
        "sol": { "a": "12", "b": "15", "c": "14", "d": "13" },
        "correct": "14"
    },
    {
        "ques": "Whom went to forest along with Lord Ram?",
        "sol": { "a": "Mata Sita", "b": "Lord Lakshmana", "c": "Both", "d": "None of them" },
        "correct": "Both"
    },
    {
        "ques": "Name of wife of Lord Lakshmana",
        "sol": { "a": "Mata Sumitra", "b": "Mata Mandvi", "c": "Mata Shrutkirti", "d": "None" },
        "correct": "Mata Sumitra"
    },
    {
        "ques": "Name of wife of Lord Bharat",
        "sol": { "a": "Mata Sumitra", "b": "Mata Mandvi", "c": "Mata Shrutkirti", "d": "None" },
        "correct": "Mata Mandvi"
    },
    {
        "ques": "Name of wife of Lord Shatrughna",
        "sol": { "a": "Mata Sumitra", "b": "Mata Mandvi", "c": "Mata Shrutkirti", "d": "None" },
        "correct": "Mata Shrutkirti"
    },
    {
        "ques": "Where did amous Incident in Ramayana happened?",
        "sol": { "a": "Panchvati", "b": "Near ganaga", "c": "Siddhnath Ashram", "d": "Chitrakoot" },
        "correct": "Chitrakoot"
    },
    {
        "ques": "Mata Shabri Waited for Lord Ram where?",
        "sol": { "a": "Chitrakoot", "b": "Pampa Saovar", "c": "Matang Rishi ke Ashram", "d": "Drona giri parvat" },
        "correct": "Pampa Saovar"
    },
    {
        "ques": "From where Ravana took Mata Sita away.?",
        "sol": { "a": "Dandaka van", "b": "Chitrakoot", "c": "Panchvati", "d": "Kishkindha" },
        "correct": "Dandaka van"
    },
    {
        "ques": "At the time of Sufnakha Kand whose kingdom was there in Dandak van?",
        "sol": { "a": "Khar aur Dushan", "b": "Ravan", "c": "Dashanan", "d": "Kumbhkaran" },
        "correct": "Khar aur Dushan"
    },
    {
        "ques": "What was the animal in whose form rakshash came to divert Lord Ram?",
        "sol": { "a": "Swarn Heeran ", "b": "Swarn Pakshi", "c": "Swarn Bagh", "d": "Swarn Mrag" },
        "correct": "Swarn Mrag"
    },
    {
        "ques": "Mata Shabri told Lord Ram to meet whom?",
        "sol": { "a": "Sugreev ji", "b": "Baali ji", "c": "Hanuman ji", "d": "Jamvantha ji" },
        "correct": "Sugreev "
    },
    {
        "ques": "Which city is called Leather City of India?",
        "sol": { "a": "Drona giri parvat", "b": "Rishyamukh Parvat", "c": "Dandak Van", "d": "Kishkindha" },
        "correct": "Rishyamukh Parvat "
    },
    {
        "ques": "Who was not in the sabha of Sugreev ji before death of Bali?",
        "sol": { "a": "Hanuman ji", "b": "Angad ji", "c": "jamvanth ji", "d": "Kesari ji" },
        "correct": "Angad ji"
    },
    {
        "ques": "After Bali Sugreev ji was Maharaja of Kishkindha and Yuvraj was?",
        "sol": { "a": "Hanuman ji", "b": "Nal ji", "c": "Angad ji", "d": "Neel ji" },
        "correct": "Angad ji"
    },
    {
        "ques": "How many faces are considered Hanumanj ji to have?",
        "sol": { "a": "4", "b": "1", "c": "3", "d": "5" },
        "correct": "5, that's why Hanuman ji having a name Panchmukhi"
    },
    {
        "ques": "Who was not the son of Dashanan?",
        "sol": { "a": "Vibhishan", "b": "Meghnad", "c": "Indrajeeyt", "d": "Prahast" },
        "correct": "Vibhishan"
    },
    {
        "ques": "What Vardaan Kumbhkaran wanted?",
        "sol": { "a": "Nidrasan", "b": "Gyan", "c": "Bhakti", "d": "Indrasan" },
        "correct": "Indrasan"
    },
    {
        "ques": "Mata Saraswati made the original Vardaan of Kumbhkaran to?",
        "sol": { "a": "Gyan", "b": "Nidrasana", "c": "Bhakti", "d": "Indrasan" },
        "correct": "Nidrasana"
    },
    {
        "ques": "Ravan made Mata Sita stayed in?",
        "sol": { "a": "Virat Vatika", "b": "Phool VAtika", "c": "Ashok Vatika", "d": "None of these" },
        "correct": "Ashok Vatika"
    },
    {
        "ques": "Rakshasi who took care of Mata Sita in Lanka?",
        "sol": { "a": "Lankni", "b": "Trijata", "c": "Ahinya", "d": "none of these" },
        "correct": "Trijata"
    },
    {
        "ques": "Who was the female gatekeepre in Lanka?",
        "sol": { "a": "Trijata", "b": "Lankni", "c": "Ahinya", "d": "none of these" },
        "correct": "Lankni"
    },
    {
        "ques": "Who was the main spy of Dashanan?",
        "sol": { "a": "Vibhishan", "b": "Prahast", "c": "Veerupaksh", "d": "Shukh" },
        "correct": "Shukh"
    },
    {
        "ques": "By whom Vajramushti was killed?",
        "sol": { "a": "Maharaja Sugreev", "b": "Hanuman ji", "c": "Lord Ram ji", "d": "Angad ji" },
        "correct": "Maharaja Sugreev"
    },

    {
        "ques": "By whom Prahast was killed?",
        "sol": { "a": "Hanuman ji", "b": "Lord Lakshman", "c": "Lord Ram", "d": "Jamvanth ji" },
        "correct": "Lord Lakshman"
    },

    {
        "ques": "By whom sena nayak Durmukh was killed?",
        "sol": { "a": "Senapati Neel", "b": "Maharaj Sugreev", "c": "Lord Ram", "d": "Lord Hanuman ji" },
        "correct": "Lord hanuman ji"
    },

    {
        "ques": "By whom Veer Makraksh was killed?",
        "sol": { "a": "Lord Ram ji", "b": "Angad Ji", "c": "Senapati Neel", "d": "Senapati Nal" },
        "correct": "Lord Ram ji"
    },

    {
        "ques": "By whom Veer Kumbhkaran was killed?",
        "sol": { "a": "Jamvanth ji", "b": "Lord Hanuman ji", "c": "Lord Lakshman", "d": "Lord Ram ji" },
        "correct": "Lord Ram ji"
    },

    {
        "ques": "By whom Devantak was killed?",
        "sol": { "a": "Lord Hanuman ji", "b": "Maharaja Sugreev", "c": "Senapati Neel", "d": "Senapati Nal" },
        "correct": "Lord Hanuman ji"
    },

    {
        "ques": "By whom Narantak was killed?",
        "sol": { "a": "Lord Hanuman ji", "b": "Maharaja Sugreev", "c": "Senapati Neel", "d": "Angad ji" },
        "correct": "Angad ji"
    },

    {
        "ques": "By whom Trishura was killed??",
        "sol": { "a": "Angad ji", "b": "Maharaja Sugreev", "c": "Senapati Neel", "d": "Lord Hanuman ji" },
        "correct": "Angad ji"
    },

    {
        "ques": "By whom Atikaya was killed?",
        "sol": { "a": "Lord Ram ji", "b": "lord Laksmana", "c": "Hanuman Ji", "d": "Vibhishan ji" },
        "correct": "lord Laksmana"
    },

    {
        "ques": "To whom was shakti hit when Indrajeet Attacked?",
        "sol": { "a": "Lord Ram ji", "b": "lord Laksmana", "c": "Hanuman Ji", "d": "Maharaja Sugreev" },
        "correct": "Lord Lakshman ji"
    },

    {
        "ques": "To save Lakshmana ji life Mrid Sanjeevani was brought there by?",
        "sol": { "a": "Angad ji", "b": "Maharaja Sugreev", "c": "Senapati Neel", "d": "Lord Hanuman ji" },
        "correct": "Hanuman ji"
    },

    {
        "ques": "Who tried to interruputed Hanuman ji while going to take mrid Sanjeevani?",
        "sol": { "a": "Kaalnemi", "b": "Subahu", "c": "Veeru Paksh", "d": "Mareech" },
        "correct": "Kaalnemi"
    },

    {
        "ques": "Who killed Lankapati Ravan",
        "sol": { "a": "Lord Hanuman ji", "b": "Vibhishan ji", "c": "Lord Lakshman ji", "d": "Hidimba" },
        "correct": "Lord Ram ji"
    },

    {
        "ques": "After Dashanan who was the king of Lanka?",
        "sol": { "a": "Vibhishan ji", "b": "Maharaja Sugreev", "c": "Lord Lakshman ji", "d": "Lord Ram ji" },
        "correct": "Vibhishan ji"
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

