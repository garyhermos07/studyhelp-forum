async function postQuestion() {

    const title = document.querySelector("#questionTitle").value;
    const content = document.querySelector("#questionContent").value;

    const response = await fetch("/questions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content })
    });


    const data = await response.json();
    alert(data.message);
    loadQuestion();
}

async function loadQuestion() {
    const response = await fetch("http://localhost:3000/questions");
    const questions = await response.json();

    const questionList = document.querySelector("#questionList");
    questionList.innerHTML = "";

    questions.forEach(question => {
        questionList.innerHTML += `
             <div>
                <h3>${question.title}</h3>
                <p>${question.content}</p>
                <button onclick="deleteQuestion('${question._id}')">Delete</button>
             </div>
        `;
    });
}

loadQuestion();

async function deleteQuestion(id) {
    await fetch(`http://localhost:3000/questions/${id}`, {
        method: "DELETE"

    });

    loadQuestion();
}

