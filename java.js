const mainContainer = document.getElementById("mainContainer");
let trials =0;
let scores = 0;
const userAnswers = [];
const correctAnswers = [];
let readyQuestions = [];
let storeQuizObjct =[];
let userCorrectAnswers = [];
let userWrongAnswers = [];
class Question{
    constructor(question,answerA,answerB,answerC,answerD,correct){
        this.question =question;
        this.answerA = answerA;
        this.answerB =answerB;
        this.answerC = answerC;
        this.answerD =answerD;
        this.correct = correct;
    }}
// --- ALL 54 AFRICAN COUNTRIES ---
const q1 = new Question("Capital of Algeria?", "Algiers", "Oran", "Tunis", "Cairo", "Algiers");
const q2 = new Question("Capital of Angola?", "Lobito", "Luanda", "Benguela", "Huambo", "Luanda");
const q3 = new Question("Capital of Benin?", "Cotonou", "Parakou", "Porto-Novo", "Lomé", "Porto-Novo");
const q4 = new Question("Capital of Botswana?", "Gaborone", "Maun", "Kanye", "Francistown", "Gaborone");
const q5 = new Question("Capital of Burkina Faso?", "Banfora", "Koudougou", "Bobo-Dioulasso", "Ouagadougou", "Ouagadougou");
const q6 = new Question("Capital of Burundi?", "Gitega", "Bujumbura", "Ngozi", "Muyinga", "Gitega");
const q7 = new Question("Capital of Cabo Verde?", "Espargos", "Praia", "Mindelo", "Assomada", "Praia");
const q8 = new Question("Capital of Cameroon?", "Yaoundé", "Douala", "Garoua", "Bamenda", "Yaoundé");
const q9 = new Question("Capital of Central African Republic?", "Bimbo", "Berberati", "Bangui", "Carnot", "Bangui");
const q10 = new Question("Capital of Chad?", "Moundou", "N'Djamena", "Sarh", "Abéché", "N'Djamena");
const q11 = new Question("Capital of Comoros?", "Mutsamudu", "Moroni", "Domoni", "Fomboni", "Moroni");
const q12 = new Question("Capital of DR Congo?", "Lubumbashi", "Goma", "Kinshasa", "Mbuji-Mayi", "Kinshasa");
const q13 = new Question("Capital of Republic of the Congo?", "Brazzaville", "Pointe-Noire", "Dolisie", "Kayes", "Brazzaville");
const q14 = new Question("Capital of Côte d'Ivoire?", "Abidjan", "Bouaké", "San-Pédro", "Yamoussoukro", "Yamoussoukro");
const q15 = new Question("Capital of Djibouti?", "Tadjoura", "Djibouti", "Obock", "Dikhil", "Djibouti");
const q16 = new Question("Capital of Egypt?", "Alexandria", "Giza", "Cairo", "Suez", "Cairo");
const q17 = new Question("Capital of Equatorial Guinea?", "Malabo", "Bata", "Ebebiyin", "Mongomo", "Malabo");
const q18 = new Question("Capital of Eritrea?", "Massawa", "Assab", "Keren", "Asmara", "Asmara");
const q19 = new Question("Capital of Eswatini?", "Manzini", "Mbabane", "Lobamba", "Big Bend", "Mbabane");
const q20 = new Question("Capital of Ethiopia?", "Addis Ababa", "Dire Dawa", "Mekelle", "Gondar", "Addis Ababa");
const q21 = new Question("Capital of Gabon?", "Port-Gentil", "Franceville", "Libreville", "Oyem", "Libreville");
const q22 = new Question("Capital of Gambia?", "Serekunda", "Brikama", "Banjul", "Bakau", "Banjul");
const q23 = new Question("Capital of Ghana?", "Accra", "Kumasi", "Tamale", "Takoradi", "Accra");
const q24 = new Question("Capital of Guinea?", "Nzérékoré", "Conakry", "Kankan", "Kindia", "Conakry");
const q25 = new Question("Capital of Guinea-Bissau?", "Bafatá", "Gabú", "Canchungo", "Bissau", "Bissau");
const q26 = new Question("Capital of Kenya?", "Mombasa", "Nairobi", "Kisumu", "Nakuru", "Nairobi");
const q27 = new Question("Capital of Lesotho?", "Maseru", "Teyateyaneng", "Mafeteng", "Hlotse", "Maseru");
const q28 = new Question("Capital of Liberia?", "Gbarnga", "Monrovia", "Kakata", "Bensonville", "Monrovia");
const q29 = new Question("Capital of Libya?", "Benghazi", "Misrata", "Tripoli", "Bayda", "Tripoli");
const q30 = new Question("Capital of Madagascar?", "Antananarivo", "Toamasina", "Antsirabe", "Mahajanga", "Antananarivo");
const q31 = new Question("Capital of Malawi?", "Blantyre", "Lilongwe", "Mzuzu", "Zomba", "Lilongwe");
const q32 = new Question("Capital of Mali?", "Sikasso", "Mopti", "Bamako", "Koutiala", "Bamako");
const q33 = new Question("Capital of Mauritania?", "Nouakchott", "Nouadhibou", "Kiffa", "Rosso", "Nouakchott");
const q34 = new Question("Capital of Mauritius?", "Beau Bassin", "Port Louis", "Vacoas", "Curepipe", "Port Louis");
const q35 = new Question("Capital of Morocco?", "Casablanca", "Marrakesh", "Rabat", "Fes", "Rabat");
const q36 = new Question("Capital of Mozambique?", "Matola", "Maputo", "Beira", "Nampula", "Maputo");
const q37 = new Question("Capital of Namibia?", "Windhoek", "Walvis Bay", "Swakopmund", "Oshakati", "Windhoek");
const q38 = new Question("Capital of Niger?", "Zinder", "Maradi", "Agadez", "Niamey", "Niamey");
const q39 = new Question("Capital of Nigeria?", "Lagos", "Abuja", "Kano", "Ibadan", "Abuja");
const q40 = new Question("Capital of Rwanda?", "Butare", "Gisenyi", "Kigali", "Musanze", "Kigali");
const q41 = new Question("Capital of São Tomé and Príncipe?", "Trindade", "Santana", "São Tomé", "Neves", "São Tome");
const q42 = new Question("Capital of Senegal?", "Dakar", "Touba", "Thiès", "Saint-Louis", "Dakar");
const q43 = new Question("Capital of Seychelles?", "Anse Boileau", "Victoria", "Beau Vallon", "Cascade", "Victoria");
const q44 = new Question("Capital of Sierra Leone?", "Kenema", "Freetown", "Bo", "Makeni", "Freetown");
const q45 = new Question("Capital of Somalia?", "Hargeisa", "Berbera", "Mogadishu", "Kismayo", "Mogadishu");
const q46 = new Question("Capitals of South Africa?", "Pretoria, Cape Town, Bloemfontein", "Johannesburg", "Durban", "Soweto", "Pretoria, Cape Town, Bloemfontein");
const q47 = new Question("Capital of South Sudan?", "Juba", "Malakal", "Wau", "Yei", "Juba");
const q48 = new Question("Capital of Sudan?", "Omdurman", "Port Sudan", "Khartoum", "Kassala", "Khartoum");
const q49 = new Question("Capital of Tanzania?", "Dar es Salaam", "Arusha", "Dodoma", "Mwanza", "Dodoma");
const q50 = new Question("Capital of Togo?", "Lomé", "Sokodé", "Kara", "Atakpamé", "Lomé");
const q51 = new Question("Capital of Tunisia?", "Sfax", "Sousse", "Tunis", "Bizerte", "Tunis");
const q52 = new Question("Capital of Uganda?", "Entebbe", "Kampala", "Jinja", "Mbarara", "Kampala");
const q53 = new Question("Capital of Zambia?", "Kitwe", "Ndola", "Lusaka", "Kabwe", "Lusaka");
const q54 = new Question("Capital of Zimbabwe?", "Bulawayo", "Chitungwiza", "Harare", "Mutare", "Harare");
// --- THE PUSH ---
storeQuizObjct.push(
    q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20,
    q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40,
    q41, q42, q43, q44, q45, q46, q47, q48, q49, q50, q51, q52, q53, q54
);
document.addEventListener("DOMContentLoaded",()=>{
    questionPage();
});
storeQuizObjct.forEach(setQuizhtml);
function setQuizhtml(element,index,array){
    const question = document.getElementById("question");
    correctAnswers.push(`${element.correct}`)
    readyQuestions.push (`
        <div id="question_${index + 1}">
  <h2>${index + 1}: ${element.question}</h2>
  <input type="radio" name="q${(index + 1)}" value="A" id="A${index}" />
  <label for="A${index}">${element.answerA}</label>
  <br />
  <input type="radio" name="q${(index + 1)}" value="B" id="B${index}" />
  <label for="B${index}">${element.answerB}</label>
  <br />
  <input type="radio" name="q${(index + 1)}" value="C" id="C${index}" />
  <label for="C${index}">${element.answerC}</label>
  <br />
  <input type="radio" name="q${(index + 1)}" value="D" id="D${index}" />
  <label for="D${index}">${element.answerD}</label>
</div>
   `)}
function mark() {
        localStorage.setItem('active', 'mark'); 
    // Reset scores and empty the existing const array
    scores = 0;
    userAnswers.length = 0; 

    // 1. Collect answers
    for (let i = 0; i < correctAnswers.length; i++) {
        const selectedRadio = document.querySelector(`input[name="q${i + 1}"]:checked`);
        if (selectedRadio) {
            userAnswers[i] = selectedRadio.nextElementSibling.textContent;
        }
    }

    // 2. Check if any questions were answered
    if (userAnswers.length === 0) {
        mainContainer.innerHTML = `
            <h2>Please attempt some questions for marking</h2>
            <button id="backBtn" onclick="scores = 0; questionPage()">Try Again</button>
        `;
    } else {
        trials++;
        // 3. Calculate score
        for (let i = 0; i < correctAnswers.length; i++) {
            if (correctAnswers[i] === userAnswers[i]) {
                scores++;
                userCorrectAnswers.push(`${i+1}: ${userAnswers[i]}<br>`)
            }else{
                if(userAnswers[i] === undefined){
                    userAnswers[i] = "No attempt made."
                    userWrongAnswers.push(`${i+1}: ${userAnswers[i]} Answer => (${correctAnswers[i]})<br>`)
                }else{
                   userWrongAnswers.push(`${i+1}: ${userAnswers[i]}. Answer => (${correctAnswers[i]})<br>`)
                }
                
            }
        }
        // 4. Display results
        mainContainer.innerHTML = `
         <h2 id="noOfattempts">john</h2>
            <h2>You Scored ${scores} out of ${correctAnswers.length}<br>${((scores/correctAnswers.length)*100).toFixed(2)}%</h2> <div id="UserCorrect"></div>
            <h2>You failed ${correctAnswers.length - scores} out of ${correctAnswers.length}</h2>
            <div id="UserRong"></div>
            <br><strong>Correct Answers:</strong><br>
            ${correctAnswers.join('<br>')}
            <br><br>
            <button id="backBtn" onclick="scores = 0; questionPage()">Try Again</button>
        `;
        const noOfattempts = document.getElementById("noOfattempts");
        const UserCorrect=document.getElementById("UserCorrect");
        UserCorrect.innerHTML=(`${userCorrectAnswers.join("")}`)
        const UserRong=document.getElementById("UserRong");
        UserRong.innerHTML=(`${userWrongAnswers.join("")}`)
        noOfattempts.innerHTML= (`Total attempt | ${trials}`);

        userCorrectAnswers.splice(0,userCorrectAnswers.length);
        userWrongAnswers.splice(0,userWrongAnswers.length);
    }
}
function questionPage(){
        localStorage.setItem('active', 'questionpage'); 
    mainContainer.innerHTML = (`             
        <h2>AFRICAN COUNTRIES</h2>
      <div id="questionsDisplayarea"><h2>questiondiv</h2></div>
         <button id="markBtn">Mark</button>
        `)
const markBtn = document.getElementById("markBtn");
const questionsDisplayarea =document.getElementById("questionsDisplayarea");
questionsDisplayarea.innerHTML = readyQuestions.join("");
markBtn.addEventListener('click',mark);
}

