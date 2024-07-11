const question = document.querySelector(".question");
    const answers = document.querySelector(".answers");
    const spnQtd = document.querySelector(".spnQtd");
    const textAcertos = document.querySelector(".acertos");
    const textPontuacao = document.querySelector(".pontuacao")
    const content = document.querySelector(".content");
    const contentFinish = document.querySelector(".finish");
    const btnRestart = document.querySelector(".finish button");
    const btnResponder = document.querySelector(".responder")
    const btnAvancar = document.querySelector(".avancar")
    const questionsEasy = [
    {
        question: "Qual é uma medida profilática contra Ancilostomíase/ Necatoríase (amarelão)?",
        answers: [
            {option: "Andar calçado", correct: true},
            {option: "Vacina", correct: false},
            {option: "Usar máscara", correct: false},
            {option: "Vermifugação de pets", correct: false},
        ],
        difficulty: "facil"
    },
    {
        question: "Qual o tratamento de zoonoses causadas por vermes?",
        answers: [
            {option: "Fungicida", correct: false},
            {option: "Bactericida", correct: false},
            {option: "Anti-viral", correct: false},
            {option: "Vermifugação", correct: true},
        ],
        difficulty: "facil"
    },
    {
        question: "É um grupo de risco à contaminação por malária:",
        answers: [
            { option: "Vegetarianos", correct: false },
            { option: "Indígenas", correct: true },
            { option: "Criadores de gado", correct: true },
            { option: "Siclêmicos", correct: false },
        ],
        difficulty: "facil"
    },
    {
        question: "Um trabalhador rural se encontra doente, com pneumonia, diarreia e dores abdominais. Familiares relatam que costumava trabalhar descalço. Qual deve ser a doença?",
        answers: [
            { option: "Amarelão", correct: true },
            { option: "Elefantíase", correct: false },
            { option: "Ascaridíase", correct: false },
            { option: "Doença de chagas", correct: false },
        ],
        difficulty: "facil" 
    },
    {
        question: "Qual dos ambientes a seguir é marcado pela recorrência de casos de Doença de Chagas?",
        answers: [
            { option: "Casa de taipa (com paredes de barro)", correct: true },
            { option: "Áreas litorâneas", correct: false },
            { option: "Áreas não saneadas", correct: false },
            { option: "Jardins domésticos", correct: false },
        ],
        difficulty: "facil" 
    },
    {
        question: "Qual o vetor mais comum da elefantíase?",
        answers: [
            { option: "Muriçocas", correct: true },
            { option: "Rãs", correct: false },
            { option: "Macacos", correct: false },
            { option: "Cães e gatos", correct: false },
        ],
        difficulty: "facil" 
    },
    {
        question: "Qual é uma medida profilática eficiente contra zoonoses causadas por vermes?",
        answers: [
            { option: "Saneamento básico", correct: true },
            { option: "Vacinação", correct: false },
            { option: "Comer apenas vegetais e evitar carnes", correct: false },
            { option: "Suplementação de Magnésio", correct: false },
        ],
        difficulty: "facil" 
    },
    {
        question: "Como se prevenir da teníase?",
        answers: [
            { option: "Lavando alimentos crus antes de comer", correct: true },
            { option: "Andando calçado", correct: false },
            { option: "Usando máscara", correct: false },
            { option: "Usando soro", correct: false },
        ],
        difficulty: "facil" 
    },
    {
        question: "Sobre a elefantíase pode-se afirmar:",
        answers: [
            { option: "Transmitida pelos mesmos vetores da dengue", correct: false },
            { option: "Transmitida por capivaras", correct: false },
            { option: "Causada por bactéria", correct: false },
            { option: "Causada por um verme", correct: true },
        ],
        difficulty: "facil" 
    },
    {
        question: "Sobre arboviroses:",
        answers: [
            { option: "Macacos servem como vetores", correct: false },
            { option: "Macacos servem como sentinelas de controle sanitário da doença", correct: true },
            { option: "Hidroxicloroquina não é uma profilaxia eficaz para malária", correct: false },
            { option: "Malária é uma doença viral", correct: false },
        ],
        difficulty: "facil" 
    },
    {
        question: "Trata-se de um sintoma típico da raiva:",
        answers: [
            { option: "Aversão à água e dor ao ingerí-la", correct: true },
            { option: "Anemia", correct: false },
            { option: "Cegueira repentina", correct: false },
            { option: "Náusea", correct: false },
        ],
        difficulty: "facil" 
    },
    {
        question: "Sobre a raiva, o que não é correto?",
        answers: [
            { option: "Hidrofobia é um sinal terminal da doença", correct: false },
            { option: "O vírus procura se replicar no sistema nervoso", correct: false },
            { option: "Soros anti rábicos e vacinas podem ser usados indistintamente para o tratamento", correct: true },
            { option: "Agressividade é um sintoma típico", correct: false },
        ],
        difficulty: "facil" 
    },
    {
        question: "O agente etiológico da raiva é:",
        answers: [
            { option: "Um vírus", correct: true },
            { option: "Uma bactéria", correct: false },
            { option: "Um protozoário", correct: false },
            { option: "Um verme", correct: false },
        ],
        difficulty: "facil"
    },
    {
        question: "O agente etiológico do tifo endêmico é:",
        answers: [
            { option: "Um vírus", correct: false },
            { option: "Uma bactéria", correct: true },
            { option: "Um protozoário", correct: false },
            { option: "Um fungo", correct: false },
        ],
        difficulty: "facil"
    },
    {
        question: "Qual o principal vetor da febre maculosa?",
        answers: [
            { option: "O carrapato-estrela", correct: true },
            { option: "O caramujo-africano", correct: false },
            { option: "O mosquito-palha", correct: false },
            { option: "O mosquito-prego", correct: false },
        ],
        difficulty: "facil"
    },
    {
        question: "O agente etiológico da peste bubônica é:",
        answers: [
            { option: "Um vírus", correct: false },
            { option: "Uma bactéria", correct: true },
            { option: "Um protozoário", correct: false },
            { option: "Um verme", correct: false },
        ],
        difficulty: "facil"
    },
    {
        question: "O agente etiológico do Carbúnculo é:",
        answers: [
            { option: "Um vírus", correct: false },
            { option: "Uma bactéria", correct: true },
            { option: "Um protozoário", correct: false },
            { option: "Um verme", correct: false },
       ],
        difficulty: "facil"
    },
    {
        question: "O agente etiológico da Leptospirose é:",
        answers: [
            { option: "Um vírus", correct: false },
            { option: "Uma bactéria", correct: true },
            { option: "Um protozoário", correct: false },
            { option: "Um verme", correct: false },
       ],
        difficulty: "facil"
    },
    {
        question: "O agente etiológico da Toxoplasmose é:",
        answers: [
            { option: "Um vírus", correct: false },
            { option: "Uma bactéria", correct: false },
            { option: "Um protozoário", correct: true },
            { option: "Um verme", correct: false },
       ],
        difficulty: "facil"
    },
    {
        question: "Sobre o Antraz (carbúnculo) pode-se afirmar:",
        answers: [
            { option: "Seu ciclo de transmissão pode envolver bovinos e mosquitos contaminados", correct: true },
            { option: "A contaminação é exclusivamente pelo solo contaminado", correct: false },
            { option: "Saneamento básico é uma forma eficaz de prevenção", correct: false },
            { option: "A transmissão é exclusivamente feco-oral", correct: false },
        ],
        difficulty: "facil"
    },
    {
        question: "Em épocas de muitas chuvas com enchentes, espera-se um aumento do número de casos de:",
        answers: [
            { option: "Leptospirose e dengue", correct: true },
            { option: "Cólera e gonorreia", correct: false },
            { option: "Esquistossomose e tifo", correct: false },
            { option: "Ascaridíase e toxoplasmose", correct: false },
        ],
        difficulty: "facil"
    },
    {
        question: "Sobre a leptospirose é correto afirmar:",
        answers: [
            { option: "Permitir que seu pet tenha contato com a urina de outros pets é uma forma de protegê-lo", correct: false },
            { option: "A bactéria causadora precisa ser ingerida para causar a doença", correct: false },
            { option: "A bactéria causadora vive na superfície de ratos (reservatórios naturais desse agente etiológico)", correct: false },
            { option: "Urina escura é um sintoma da doença", correct: true },
        ],
        difficulty: "facil"
    },
    {
        question: "No Brasil, qual a tripanossomíase mais comum?",
        answers: [
            { option: "Doença de Chagas", correct: true },
            { option: "Doença do Sono", correct: false },
            { option: "Malária", correct: false },
            { option: "Leptospirose", correct: false },
        ],
        difficulty: "facil"
    },
]

    const questionsMedium = [
    {
        question: "Qual, dentre as doenças a seguir, pode ser uma zoonose?",
        answers: [
            { option: "Ascaridíase", correct: false },
            { option: "Bicho geográfico", correct: true },
            { option: "Rubéola", correct: false },
            { option: "Gripe", correct: false },
        ],
        difficulty: "medio" 
    },
    {
        question: "Qual, dentre as doenças a seguir, não é uma zoonose?",
        answers: [
            { option: "Peste bubônica", correct: false },
            { option: "Febre tifóide", correct: false },
            { option: "Teníase", correct: false },
            { option: "Oxiurose", correct: true },
        ],
        difficulty: "medio" 
    },
    {
        question: "Um paciente come carne suína de matadouros ilegais e apresenta dor abdominal, qual pode ser a causa?",
        answers: [
            { option: "Amarelão", correct: false },
            { option: "Teníase", correct: true },
            { option: "Dengue", correct: false },
            { option: "Carbúnculo", correct: false },
        ],
        difficulty: "medio" 
    },
    {
        question: "Qual o primeiro sinal típico de que se foi picado pelo barbeiro?",
        answers: [
            { option: "Febre repentina", correct: false },
            { option: "Náusea repentina", correct: false },
            { option: "Coceira e vermelhidão nas pálpebras", correct: true },
            { option: "Prurido anal", correct: false },
        ],
        difficulty: "medio" 
    },
    {
        question: "O que é correto sobre as arboviroses?",
        answers: [
            { option: "São transmitidas apenas por mosquitos", correct: false },
            { option: "São transmitidas por macacos", correct: false },
            { option: "São contagiosas", correct: false },
            { option: "Podem ser transmitidas por carrapatos", correct: true },
        ],
        difficulty: "medio" 
    },
    {
        question: "Os ciclos silvestres de transmissão da Leishmaniose costumam envolver:",
        answers: [
            { option: "Raposas e morcegos", correct: true },
            { option: "Ratos e gatos", correct: false },
            { option: "Peixes e algas", correct: false },
            { option: "Apenas cães", correct: false },
        ],
        difficulty: "medio" 
    },
    {
        question: "Qual é um sinal típico de Malária?",
        answers: [
            { option: "Diarreia", correct: false },
            { option: "Febre alta e intermitente", correct: true },
            { option: "Sonolência", correct: false },
            { option: "Pneumonia", correct: false },
        ],
        difficulty: "medio" 
    },
    {
        question: "Marque a alternativa verdadeira sobre a dengue:",
        answers: [
            { option: "Existem dois gêneros de mosquitos vetores", correct: false },
            { option: "Possui transmissão feco-ora", correct: false },
            { option: "Dengue hemorrágica só acontece em imunossuprimidos", correct: false },
            { option: "Febre alta de início repentino é um sinal típico", correct: true },
        ],
        difficulty: "medio" 
    },
    
    {
        question: "Sobre zoonoses, pode-se afirmar:",
        answers: [
            { option: "A febre maculosa é transmitida por um inseto", correct: false },
            { option: "A filariose é transmitida por um protozoário", correct: false },
            { option: "A leishmaniose é transmitida pelo flebótomo", correct: true },
            { option: "O bicho geográfico pode ser causado por vírus", correct: false },
        ],
        difficulty: "medio"
    },
    {
        question: "Marque a alternativa verdadeira:",
        answers: [
            { option: "Verminoses podem causar pneumonia e meningite", correct: true },
            { option: "Comer carne de boi mal cozida representa risco de cisticercose", correct: false },
            { option: "Amebíase é uma zoonose comum em grandes cidades", correct: false },
            { option: "Toxoplasmose é causada por um protozoário que parasita apenas humanos e gatos", correct: false },
        ],
        difficulty: "medio"
    },
    {
        question: "Sobre a febre maculosa pode-se afirmar:",
        answers: [
            { option: "Ocorre sobretudo em áreas mais urbanizadas", correct: false },
            { option: "O carrapato vetor pode parasitar capivaras e cutias", correct: true },
            { option: "Não transmissível para humanos", correct: false },
            { option: "O tratamento é antiviral", correct: false },
        ],
        difficulty: "medio"
    },
    {
        question: "Qual o nome do agente causador da Doença de Chagas?",
        answers: [
            { option: "Trypanosoma Cruzi", correct: true },
            { option: "Wuchereria bancrofti", correct: false },
            { option: "Rickettsia spp.", correct: false },
            { option: "Plasmodium Falciparum", correct: false },
        ],
        difficulty: "medio"
    },
    {
        question: "O agente causador da malária se replica principalmente:",
        answers: [
            { option: "Nos eritrócitos e no fígado", correct: true },
            { option: "No baço", correct: false },
            { option: "No coração", correct: false },
            { option: "No sistema nervoso central", correct: false },
        ],
        difficulty: "medio"
    },
    {
        question: "Qual não é uma forma de contaminação por Toxoplasmose?",
        answers: [
            { option: "Comer carne de bovinos contaminados", correct: false },
            { option: "Contato com fezes de felinos contaminados", correct: false },
            { option: "Contato com água e alimentos contaminados pelas fezes de felinos com a doença", correct: false },
            { option: "Pela urina de ratos contaminados", correct: true },
        ],
        difficulty: "medio"
    },
    {
        question: "Qual dos locais a seguir implica maior risco de contaminação com Leishmaniose?",
        answers: [
            { option: "Praia", correct: false },
            { option: "Bairros sem saneamento básico", correct: false },
            { option: "Reservas urbano-florestais", correct: true },
            { option: "Lagos, lagoas", correct: false },
        ],
        difficulty: "medio" 
    },
    {
        question: "Qual dos locais a seguir implica maior risco de contaminação por Amarelão?",
        answers: [
            { option: "Praia", correct: true },
            { option: "Bairros sem saneamento básico", correct: true },
            { option: "Reservas urbano-florestais", correct: false },
            { option: "Lagos, lagoas", correct: false },
        ],
        difficulty: "medio" 
    },
    {
        question: "O que é correto sobre as arboviroses?",
        answers: [
            { option: "São transmitidas apenas por mosquitos", correct: false },
            { option: "São transmitidas por macacos", correct: false },
            { option: "São contagiosas", correct: false },
            { option: "Podem ser transmitidas por carrapatos", correct: true },
        ],
        difficulty: "medio" 
    },
]

    const questionsHard = [
{
            question: "Qual é um possível sinal de Amarelão?",
            answers: [
                { option: "Prurido anal", correct: false },
                { option: "Olhos vermelhos", correct: false },
                { option: "Paralisia", correct: false },
                { option: "Pneumonia", correct: true },
            ],
            difficulty: "dificil" 
        },
        {
            question: "O que não fazer em caso de dengue?",
            answers: [
                { option: "Repousar", correct: false },
                { option: "Tomar vacina", correct: false },
                { option: "Tomar aspirina", correct: true },
                { option: "Beber muita água", correct: false },
            ],
            difficulty: "dificil" 
        },
    {
        question: "Uma medida preventiva contra esquistossomose:",
        answers: [
            { option: "Matar lesmas, caramujos e caracóis em geral", correct: false },
            { option: "Remover a população nativa de gaviões caramujeiros", correct: false },
            { option: "Evitar tomar banhos em lagoas em horários quentes", correct: true },
            { option: "Impedir sua transmissão feco-oral", correct: false },
        ],
        difficulty: "dificil"
    },
    {
        question: "Sobre a malária, pode-se afirmar:",
        answers: [
            { option: "Possui humanos como o hospedeiro definitivo ou final", correct: false },
            { option: "O protozoário causador da doença é monoxeno", correct: false },
            { option: "Transmitida por machos e fêmeas do mosquito-prego", correct: false },
            { option: "Caracterizada por ciclos de febre alta seguidos de apirexia", correct: true },
        ],
        difficulty: "dificil"
    },

    {
        question: "Sobre a malária, pode-se afirmar:",
        answers: [
            { option: "O agente etiológico mais virulento é o Plasmodium malariae", correct: false },
            { option: "Plasmodium Vivax causa febre terçã benigna", correct: false },
            { option: "Plasmodium Falciparum é o agente etiológico mais virulento", correct: true },
            { option: "P. Falciparum causa febre quartã maligna", correct: false },
        ],
        difficulty: "dificil"
    },

    {
        question: "Sobre a malária é correto afirmar:",
        answers: [
            { option: "Plasmodium spp. faz esporogonia no mosquito-prego e esquizogonia em humanos", correct: true },
            { option: "Tem pouca diversidade de antigenicidade", correct: false },
            { option: "Plasmodium spp. possui um apicoplasto vestigial indicando que não teve um passado evolutivo de vida livre", correct: false },
            { option: "Plasmodium spp. por ser apicomplexo, apresenta flagelos para a locomoção", correct: false },
        ],
        difficulty: "dificil"
    },
    {
        question: "Sobre a leishmaniose pode-se afirmar:",
        answers: [
            { option: "A Leishmaniose tegumentar causa problemas no fígado e baço", correct: false },
            { option: "Leishmania spp. ocorre na forma promastigota em humanos e amastigota no flebótomo", correct: false },
            { option: "Raposas são reservatórios naturais de Leishmania spp.", correct: true },
            { option: "A prevenção mais eficaz é matar hospedeiros vertebrados que amplificam o ciclo, como morcegos e raposas", correct: false },
        ],
        difficulty: "dificil"
    },
    {
        question: "Sobre a teníase é incorreto afirmar:",
        answers: [
            { option: "Comer carne de bovinos contaminados pode causar cisticercose", correct: false },
            { option: "Solitárias têm dimorfismo sexual e copulam no intestino delgado", correct: false },
            { option: "A oncosfera de Taenia Solium se encista quando perfura a parede do duodeno com seus ganchos", correct: true },
            { option: "Taenia Saginata só pode causar teníase em humanos e bovinos", correct: false },
        ],
        difficulty: "dificil"
    },

    {
        question: "Sobre a Ascaridíase, pode-se afirmar:",
        answers: [
            { option: "Quando existem muitas lombrigas no intestino delgado, a chance de haver ciclo pulmonar aumenta", correct: true },
            { option: "Ascaris lumbricoides é monóica e se reproduz desprendendo proglótides que saem nas fezes de humanos.", correct: false },
            { option: "Parasitos do intestino delgado, como A. lumbricoides costumam fazer respiração celular.", correct: false },
            { option: "A. lumbricoides parasita o mesentério.", correct: false },
        ],
        difficulty: "dificil"
    },

    {
        question: "Sobre a teníase pode-se afirmar:",
        answers: [
            { option: "Taenia solium possui um rostro de ganchos quitinosos para se prender à parede do intestino delgado", correct: true },
            { option: "Taenia saginata parasita bovinos e suínos", correct: false },
            { option: "Taenia spp. tem sistema digestório completo", correct: false },
            { option: "Taenia spp. fazem fermentação alcoólica no intestino delgado", correct: false },
        ],
        difficulty: "dificil"
    },

    {
        question: "Qual pode ser um agente etiológico do amarelão?",
        answers: [
            { option: "Necator Duodenale", correct: false },
            { option: "Ascaris lumbricoides", correct: false },
            { option: "Ancylostoma Brasiliensis", correct: true },
            { option: "Wuchereria Bancrofti", correct: false },
        ],
        difficulty: "dificil"
    },

    {
        question: "Por que existem poucos casos de arboviroses na europa e nos estados unidos?",
        answers: [
            { option: "Por causa do saneamento básico bem desenvolvido", correct: false },
            { option: "Pelas condições climáticas de distribuição dos vetores", correct: true },
            { option: "Porque já foram erradicadas nesses locais", correct: false },
            { option: "Porque o sistema de vacinação é eficiente", correct: false },
        ],
        difficulty: "dificil"
    },
];

    let currentIndex = 1;
    let questionsCorrect = 0;
    let totalPoints = 0;
    let selectedEasy = [];
    let selectedMedium = [];
    let selectedHard = [];
    let selectedQuestions = [];

    let startTime;
    let timeEasy = 0;
    let timeMedium = 0;
    let timeHard = 0;
    let easyCorrect = 0;
    let mediumCorrect = 0;
    let hardCorrect = 0;

    btnRestart.onclick = () => {
        content.style.display = "flex";
        contentFinish.style.display = "none";
        timestamp = Date.now()

        currentIndex = 1;
        questionsCorrect = 0;
        totalPoints = 0;
        selectedEasy = [];
        selectedMedium = [];
        selectedHard = [];
        selectedQuestions = [];
        easyCorrect = 0;
        timeEasy = 0;
        timeMedium = 0;
        timeHard = 0;
        mediumCorrect = 0;
        hardCorrect = 0;
        loadQuestion();
    };

    function finish() {
        const endTime = Date.now();
        const easyTimeSeconds = Math.floor(timeEasy / 1000);
        const mediumTimeSeconds = Math.floor(timeMedium / 1000);
        const hardTimeSeconds = Math.floor(timeHard / 1000);

        let finalScore = calculateScore(easyCorrect, mediumCorrect, hardCorrect, easyTimeSeconds, mediumTimeSeconds, hardTimeSeconds);
        textAcertos.innerHTML = `Você acertou ${questionsCorrect} de 10 questões`;
        textPontuacao.innerHTML = `Sua pontuação final: ${finalScore}`;
        console.log(finalScore);
        content.style.display = "none";
        contentFinish.style.display = "flex";
    }

    function calculateScore(A1, A2, A3, t1, t2, t3) {
      
        if (t1 < 1){
          t1 = 1;
        }
        if (t2 < 1){
          t2 = 1;
        }
        if(t3 < 1){
          t3 = 1;
        }

        const minF = 2 * A1;
        const minM = 3 * A2;
        const minD = 4 * A3;
        const F = Math.ceil(25/t1 * A1);
        const M = Math.ceil(30/t2 * A2);
        const D = Math.ceil(40/t3 * A3);
        return minF + F + minM + M + minD + D;
    }

    function loadQuestion() {
        if (selectedQuestions.length < 10) {

            let randomIndex;
            let item;
            let difficulty;

            if (selectedQuestions.length < 5) {
                difficulty = "facil";
                do {
                    randomIndex = Math.floor(Math.random() * questionsEasy.length);
                } while (selectedEasy.includes(randomIndex));
                item = questionsEasy[randomIndex];
                selectedEasy.push(randomIndex);
            } else if (selectedQuestions.length < 8) {
                difficulty = "media";
                do {
                    randomIndex = Math.floor(Math.random() * questionsMedium.length);
                } while (selectedMedium.includes(randomIndex));
                item = questionsMedium[randomIndex];
                selectedMedium.push(randomIndex);
            } else {
                difficulty = "dificil";
                do {
                    randomIndex = Math.floor(Math.random() * questionsHard.length);
                } while (selectedHard.includes(randomIndex));
                item = questionsHard[randomIndex];
                selectedHard.push(randomIndex);
            }
            selectedQuestions.push(randomIndex);

            
            spnQtd.innerHTML = `${currentIndex}/10`;
            answers.innerHTML = "";
            question.innerHTML = item.question;

            item.answers.forEach((answer) => {
                const div = document.createElement("div");

                div.innerHTML = `
                <button class="answer" data-correct="${answer.correct}" data-difficulty="${item.difficulty}">
                  ${answer.option}
                </button>
                `;

                answers.appendChild(div);
            });


            let responded = false;

            btnResponder.onclick = () => {
                if (!responded) {
                    
                    responded = true;
                    if (currentIndex == 5){
                        timeEasy = Date.now() - timestamp;
                    }else if (currentIndex == 8){
                        timeMedium = Date.now() - timeEasy - timestamp;
                    }else if (currentIndex == 10){
                        timeHard = Date.now() - timeMedium - timeEasy - timestamp;
                    }
                    const selectedAnswer = document.querySelector(".answer.selected");
                    if (selectedAnswer) {
                        const isCorrect = selectedAnswer.getAttribute("data-correct") === "true";
                        if (isCorrect) {
                            selectedAnswer.style.backgroundColor = "green";
                            questionsCorrect++;

                            if (difficulty === "facil") {
                                easyCorrect++;
                            } else if (difficulty === "media") {
                                mediumCorrect++;
                            } else {
                                hardCorrect++;
                            }
                        } else {
                            selectedAnswer.style.backgroundColor = "red";
                        }

                        document.querySelectorAll(".answer").forEach((answer) => {
                            answer.disabled = true;
                        });

                        btnAvancar.style = "display: block;"
                        btnResponder.style = "display: none;"

                        btnAvancar.onclick = () => {
                            btnAvancar.style = "display: none;"
                            btnResponder.style = "display: block;"
                            currentIndex++;
                            loadQuestion();
                        };
                    }
                }
            };

            document.querySelectorAll(".answer").forEach((item) => {
                item.addEventListener("click", (e) => {
                    const answer = e.target;
                    document.querySelectorAll(".answer").forEach((a) => a.classList.remove("selected"));
                    answer.classList.add("selected");
                });
            });


            
        } else {
            finish();
        }
    }

    let timestamp = Date.now()
    loadQuestion();
