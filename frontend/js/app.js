
const questionBank = {
  "Core Java": [
    ["Which concept allows multiple implementations of one interface?", ["Encapsulation","Polymorphism","Compilation","Casting"],1,"Polymorphism allows one interface to represent different behaviors.","Easy"],
    ["Which keyword inherits a class?", ["implements","inherits","extends","super"],2,"extends establishes class inheritance.","Easy"],
    ["Which structure follows LIFO?", ["Queue","Stack","Tree","Graph"],1,"A stack follows Last In, First Out.","Easy"],
    ["Which keyword prevents method overriding?", ["static","final","void","this"],1,"A final method cannot be overridden.","Medium"],
    ["Which is not a primitive Java type?", ["int","boolean","char","String"],3,"String is a class, not a primitive.","Easy"],
    ["What is the default value of an instance int field?", ["0","1","null","Undefined"],0,"An instance int field defaults to zero.","Easy"],
    ["Which keyword refers to the current object?", ["super","this","self","current"],1,"this refers to the current object.","Easy"],
    ["Which statement about constructors is correct?", ["They return int","They share the class name","They must be static","They cannot take parameters"],1,"A constructor has the class name and no declared return type.","Easy"],
    ["Which collection interface excludes duplicate elements?", ["List","Set","Queue","Deque"],1,"A Set does not contain duplicate elements.","Easy"],
    ["What happens during integer division by zero?", ["Returns zero","Returns infinity","ArithmeticException","Returns null"],2,"Integer division by zero throws ArithmeticException.","Medium"],
    ["Which structure handles exceptions?", ["try-catch","for-while","if-only","class-object"],0,"try-catch handles exceptions.","Easy"],
    ["Which collection allows duplicates and preserves positional order?", ["HashSet","TreeSet","ArrayList","EnumSet"],2,"ArrayList allows duplicates and indexed access.","Easy"],
    ["What is method overloading?", ["Same name, different parameter lists","Replacing a parent method","Making methods static","Same class name"],0,"Overloaded methods have different parameter lists.","Medium"],
    ["Which access modifier has the widest accessibility?", ["private","protected","public","default"],2,"public members are accessible wherever their class is accessible.","Easy"],
    ["Which class is immutable?", ["String","StringBuilder","ArrayList","StringBuffer"],0,"A String object's contents cannot be changed after creation.","Easy"],
    ["Which keyword implements an interface?", ["extends","implements","interface","instanceof"],1,"A class uses implements to implement an interface.","Easy"],
    ["A static field belongs primarily to what?", ["Each object separately","The class","Only a constructor","A method call"],1,"A static field is associated with the class.","Medium"],
    ["Which exception may occur when accessing an invalid array index?", ["IOException","NullPointerException","ArrayIndexOutOfBoundsException","NumberFormatException"],2,"An invalid array index throws ArrayIndexOutOfBoundsException.","Easy"],
    ["An abstract class can contain which methods?", ["Only abstract methods","Only static methods","Abstract and concrete methods","No methods"],2,"Abstract classes may contain both abstract and concrete methods.","Medium"],
    ["What does super commonly refer to?", ["Superclass members","Current array index","A loop","A constant"],0,"super accesses superclass members or constructors.","Medium"]
  ],

  "DSA & Coding": [
    ["Binary search on a sorted array takes what time?", ["O(n)","O(n²)","O(log n)","O(1) always"],2,"Binary search halves the search range each step.","Easy"],
    ["Which structure follows FIFO?", ["Stack","Queue","Tree","Graph"],1,"A queue follows First In, First Out.","Easy"],
    ["What is the first Java array index?", ["0","1","-1","It varies"],0,"Java arrays use zero-based indexing.","Easy"],
    ["Worst-case linear search complexity?", ["O(1)","O(log n)","O(n)","O(n²)"],2,"Every element may need to be checked.","Easy"],
    ["Which structure tracks recursive calls?", ["Queue","Call stack","HashSet","Heap only"],1,"Recursive calls are tracked on the call stack.","Easy"],
    ["Which sort compares adjacent elements?", ["Merge sort","Bubble sort","Binary search","DFS"],1,"Bubble sort compares adjacent elements.","Easy"],
    ["Average hash table lookup complexity?", ["O(n²)","O(log n)","O(1)","O(n log n)"],2,"Hash tables typically offer average O(1) lookup.","Medium"],
    ["Worst-case merge sort complexity?", ["O(n)","O(n log n)","O(n²)","O(log n)"],1,"Merge sort runs in O(n log n) time.","Medium"],
    ["Left, root, right is which tree traversal?", ["Preorder","Postorder","Inorder","Level order"],2,"Inorder visits left subtree, root, then right subtree.","Easy"],
    ["Worst-case quicksort complexity?", ["O(n log n)","O(log n)","O(n²)","O(1)"],2,"Poor pivot choices can produce O(n²) performance.","Medium"],
    ["Which structure supports breadth-first search?", ["Stack","Queue","Variable","Sorted array only"],1,"BFS uses a queue to process vertices level by level.","Medium"],
    ["Array access by index typically takes?", ["O(n)","O(log n)","O(1)","O(n²)"],2,"Array indexed access is constant time.","Easy"],
    ["Combining solutions to smaller subproblems describes?", ["Divide and conquer","Linear scan","Casting","Hashing only"],0,"Divide and conquer divides and combines subproblem solutions.","Medium"],
    ["What does the last singly linked-list node point to?", ["First node","Zero","null","Previous node"],2,"The final node normally has a null next reference.","Easy"],
    ["Which structure is useful for undo operations?", ["Stack","Queue","Graph only","Array sorting"],0,"A stack reverses the order of recent actions.","Easy"],
    ["Insert at a linked-list head when head is known?", ["O(1)","O(n)","O(n log n)","O(n²)"],0,"Only a few reference updates are needed.","Medium"],
    ["Which algorithm finds shortest paths with non-negative edge weights?", ["Binary search","Dijkstra","Bubble sort","Inorder traversal"],1,"Dijkstra's algorithm supports non-negative edge weights.","Hard"],
    ["Dynamic programming is especially useful for?", ["Overlapping subproblems and optimal substructure","Printing only","Replacing all loops","Every sorting problem"],0,"DP reuses subproblem results to reduce repeated computation.","Hard"],
    ["Worst-case search in an unbalanced BST?", ["O(1)","O(log n)","O(n)","O(n log n)"],2,"An unbalanced BST can degenerate into a chain.","Medium"],
    ["Which structure is commonly used to implement a priority queue efficiently?", ["Binary heap","Stack only","Unsorted linked list only","String"],0,"A binary heap supports efficient priority-queue operations.","Medium"]
  ],

  "DBMS & SQL": [
    ["Which SQL command retrieves data?", ["INSERT","UPDATE","SELECT","DELETE"],2,"SELECT retrieves rows from tables.","Easy"],
    ["What does a primary key do?", ["Allows duplicate IDs","Uniquely identifies a row","Sorts all columns","Deletes records"],1,"A primary key uniquely identifies a row.","Easy"],
    ["Which clause filters rows before grouping?", ["ORDER BY","HAVING","WHERE","SELECT"],2,"WHERE filters rows before grouping.","Easy"],
    ["Which key references another table's key?", ["Foreign key","Candidate key only","Super key only","Alternate key"],0,"A foreign key establishes a relationship to a referenced key.","Easy"],
    ["Which SQL command changes existing records?", ["ALTER","UPDATE","CREATE","SELECT"],1,"UPDATE modifies existing rows.","Easy"],
    ["Which join returns matching rows from both tables?", ["INNER JOIN","CROSS JOIN","FULL JOIN always","No join"],0,"INNER JOIN returns rows that satisfy the join condition.","Easy"],
    ["Which aggregate counts rows?", ["SUM","COUNT","AVG","ROUND"],1,"COUNT returns the number of rows or non-null values, depending on its argument.","Easy"],
    ["What does normalization help reduce?", ["Data redundancy","Data integrity","All queries","All keys"],0,"Normalization reduces redundancy and update anomalies.","Medium"],
    ["Which clause groups rows for aggregate calculations?", ["GROUP BY","ORDER BY","WHERE only","DISTINCT only"],0,"GROUP BY forms groups for aggregate functions.","Easy"],
    ["Which clause filters grouped results?", ["WHERE","HAVING","FROM","INSERT"],1,"HAVING filters groups after grouping.","Medium"],
    ["What does ACID stand for in transactions?", ["Atomicity, Consistency, Isolation, Durability","Accuracy, Control, Index, Data","Access, Cache, Input, Delete","None"],0,"ACID describes four key transaction properties.","Medium"],
    ["Which command removes a table definition?", ["DELETE","DROP","UPDATE","SELECT"],1,"DROP TABLE removes a table definition and its data.","Medium"],
    ["Which constraint prevents duplicate values in a column?", ["UNIQUE","DEFAULT","CHECK only","ORDER"],0,"UNIQUE enforces uniqueness for the constrained column or columns.","Easy"],
    ["Which normal form removes partial dependency on a composite key?", ["1NF","2NF","3NF","5NF"],1,"Second normal form addresses partial functional dependencies.","Hard"],
    ["What does COMMIT do?", ["Saves a transaction's changes","Deletes a database","Sorts rows","Creates a view"],0,"COMMIT makes transaction changes permanent.","Medium"],
    ["Which operator checks a value against a range?", ["BETWEEN","LIKE only","IS NULL","UNION"],0,"BETWEEN tests whether a value falls within a range.","Easy"],
    ["What does COUNT(*) count?", ["Only non-null values in one column","All rows matching the query","Only primary keys","Only duplicate rows"],1,"COUNT(*) counts all rows in the result, including rows with nulls.","Medium"],
    ["Which join can return all rows from the left table and matching rows from the right?", ["LEFT JOIN","INNER JOIN only","CROSS JOIN only","SELF JOIN only"],0,"LEFT JOIN preserves every row from the left side.","Medium"],
    ["What is an index primarily used for?", ["Speeding up data retrieval","Guaranteeing no nulls","Replacing every key","Deleting duplicates automatically"],0,"Indexes can improve lookup performance, with storage and write costs.","Medium"],
    ["Which SQL statement adds a new row?", ["INSERT INTO","ALTER TABLE","DROP","GRANT"],0,"INSERT INTO adds rows to a table.","Easy"]
  ],

  "Operating Systems": [
    ["A program currently executing is called?", ["Process","Folder","Compiler","Database"],0,"A process is a program in execution.","Easy"],
    ["Which is a necessary deadlock condition?", ["Circular wait","Compilation","Inheritance","Sorting"],0,"Circular wait is one of the four necessary deadlock conditions.","Medium"],
    ["Which storage is fastest for the CPU?", ["Hard disk","RAM","CPU registers","USB drive"],2,"CPU registers provide very fast processor access.","Easy"],
    ["What is a thread?", ["A unit of execution within a process","A database table","A network cable","A file format"],0,"Threads are execution units within a process.","Easy"],
    ["Which scheduling algorithm uses time slices?", ["Round Robin","FCFS only","Non-preemptive SJF only","FIFO disk storage"],0,"Round Robin allocates CPU time slices to processes.","Medium"],
    ["What is virtual memory?", ["An extension of memory using secondary storage","A CPU register","A compiler","A network protocol"],0,"Virtual memory provides an abstraction of memory using RAM and storage.","Medium"],
    ["Which condition means a resource cannot be forcibly taken?", ["Mutual exclusion","No preemption","Circular wait","Hold and wait"],1,"No preemption means resources cannot simply be taken away.","Hard"],
    ["What is a context switch?", ["Switching CPU execution between tasks","Deleting a process permanently","Formatting a disk","Changing source code"],0,"A context switch saves one task's state and restores another's.","Medium"],
    ["Which memory allocation can suffer external fragmentation?", ["Contiguous variable-sized allocation","CPU registers","Immutable strings","Network routing"],0,"Variable-sized contiguous allocation can leave scattered free holes.","Hard"],
    ["What does a semaphore help coordinate?", ["Access to shared resources","HTML styling","SQL column names","IP addresses only"],0,"Semaphores coordinate access to shared resources.","Medium"],
    ["Which scheduling method can cause starvation of long jobs?", ["Shortest Job First","Round Robin always","Fair time sharing always","FIFO queue with no priority"],0,"Repeatedly choosing short jobs can postpone longer jobs.","Hard"],
    ["What is a system call?", ["A request for an operating-system service","A Java constructor","A sorting step","A database key"],0,"System calls provide controlled access to OS services.","Medium"],
    ["What is a page fault?", ["A referenced page is not currently in physical memory","A failed SQL query","A broken network cable","A syntax error"],0,"A page fault occurs when a needed page is not resident in RAM.","Medium"],
    ["Which is an example of an operating system?", ["Linux","MySQL","HTML","TCP"],0,"Linux is an operating system.","Easy"],
    ["What is deadlock?", ["Tasks waiting indefinitely for resources held by each other","A successful compilation","A completed transaction","A network address"],0,"Deadlock prevents involved processes from making progress.","Easy"],
    ["Which is a non-preemptive scheduling algorithm?", ["FCFS","Round Robin","Preemptive priority","Shortest Remaining Time First"],0,"FCFS normally lets a running process continue until it blocks or finishes.","Medium"],
    ["What is thrashing?", ["Excessive paging that reduces useful execution","Faster CPU arithmetic","SQL grouping","A sorting algorithm"],0,"Thrashing occurs when paging overhead overwhelms useful work.","Hard"],
    ["Which component manages files and directories?", ["File system","CPU scheduler only","Compiler","Router"],0,"The file system organizes persistent files and directories.","Easy"],
    ["What is a race condition?", ["Output depends on timing of concurrent operations","A CPU benchmark","A type of memory only","A sorting rule"],0,"Race conditions occur when concurrent operations interact unpredictably.","Medium"],
    ["Which state means a process is waiting for CPU allocation?", ["Ready","Running","Terminated","New only"],0,"A ready process can run when the scheduler assigns CPU time.","Medium"]
  ],

  "Computer Networks": [
    ["How many layers are in the OSI model?", ["4","5","7","8"],2,"The OSI reference model has seven layers.","Easy"],
    ["Which protocol is used for secure web browsing?", ["HTTP","HTTPS","FTP","SMTP"],1,"HTTPS protects web traffic using TLS.","Easy"],
    ["What does IP stand for?", ["Internet Protocol","Internal Program","Information Process","Input Port"],0,"IP means Internet Protocol.","Easy"],
    ["Which transport protocol is connection-oriented?", ["UDP","TCP","IP","ARP"],1,"TCP establishes a connection and provides reliable ordered delivery.","Easy"],
    ["Which device forwards packets between networks?", ["Router","Keyboard","Compiler","Monitor"],0,"Routers forward packets between networks.","Easy"],
    ["What is DNS used for?", ["Translating domain names to IP addresses","Encrypting every file","Sorting packets only","Assigning SQL keys"],0,"DNS resolves domain names to records such as IP addresses.","Easy"],
    ["Which protocol commonly sends email between mail servers?", ["SMTP","HTTP","ARP","DHCP"],0,"SMTP is commonly used to send email.","Easy"],
    ["Which layer routes packets in the OSI model?", ["Physical","Data Link","Network","Presentation"],2,"The Network layer handles logical addressing and routing.","Medium"],
    ["What is the default port for HTTPS?", ["21","25","80","443"],3,"HTTPS commonly uses TCP port 443.","Medium"],
    ["What does DHCP provide automatically?", ["IP configuration","HTML pages","SQL tables","CPU scheduling"],0,"DHCP can assign IP addresses and other network settings.","Easy"],
    ["Which protocol is connectionless at the transport layer?", ["TCP","UDP","HTTPS","SSH"],1,"UDP sends datagrams without establishing a connection.","Easy"],
    ["What is a MAC address associated with?", ["A network interface","A website path","A SQL query","A Java class"],0,"A MAC address identifies a network interface at the link layer.","Medium"],
    ["Which device primarily connects devices within a LAN?", ["Switch","Compiler","Database","Printer driver"],0,"A network switch forwards frames within a local network.","Easy"],
    ["What is the purpose of a subnet mask?", ["Identify network and host portions of an IP address","Encrypt passwords","Choose a web font","Compile Java"],0,"A subnet mask separates network bits from host bits in IPv4.","Medium"],
    ["Which protocol maps IPv4 addresses to link-layer addresses on a local network?", ["ARP","SMTP","FTP","TLS"],0,"ARP resolves IPv4 addresses to link-layer addresses on a local network.","Medium"],
    ["Which protocol is commonly used for secure remote login?", ["SSH","Telnet","HTTP","POP3"],0,"SSH provides secure remote shell access.","Easy"],
    ["What does latency measure?", ["Delay","Storage capacity","File size","CPU temperature"],0,"Latency measures the delay experienced by data or an operation.","Easy"],
    ["Which OSI layer handles framing and MAC addressing?", ["Network","Data Link","Session","Application"],1,"The Data Link layer handles frames and MAC addressing.","Medium"],
    ["What is packet loss?", ["Packets fail to reach their destination","A domain is renamed","A file is compressed","A server gains RAM"],0,"Packet loss occurs when transmitted packets do not arrive.","Easy"],
    ["Which protocol automatically leases network settings to clients?", ["DHCP","SMTP","IMAP","HTML"],0,"DHCP dynamically provides network configuration to clients.","Medium"]
  ],

  "Aptitude & Reasoning": [
    ["What is 20% of 250?", ["25","40","50","75"],2,"0.20 × 250 = 50.","Easy"],
    ["Find the next number: 2, 4, 8, 16, __", ["18","24","30","32"],3,"Each number doubles, so the answer is 32.","Easy"],
    ["A person travels 60 km in 2 hours. Average speed?", ["20 km/h","30 km/h","40 km/h","120 km/h"],1,"Speed = distance ÷ time = 30 km/h.","Easy"],
    ["What is 15% of 200?", ["15","20","30","40"],2,"0.15 × 200 = 30.","Easy"],
    ["If 5 pens cost ₹50, what do 8 pens cost at the same rate?", ["₹60","₹70","₹80","₹100"],2,"Each pen costs ₹10, so 8 cost ₹80.","Easy"],
    ["Find the next number: 3, 6, 9, 12, __", ["13","14","15","18"],2,"The sequence increases by 3.","Easy"],
    ["A product costs ₹800 after a 20% discount. What was its original price?", ["₹960","₹1,000","₹1,200","₹640"],1,"₹800 is 80% of the original; 800 ÷ 0.8 = 1,000.","Medium"],
    ["The ratio is 2:3 and the total is 25. What is the smaller part?", ["5","10","15","20"],1,"Five total parts each equal 5; the smaller part is 2 × 5 = 10.","Medium"],
    ["A can finish work in 6 days. What fraction does A finish per day?", ["1/3","1/6","1/2","6"],1,"A completes one-sixth of the work per day.","Easy"],
    ["What is the average of 4, 6, and 8?", ["5","6","7","8"],1,"(4 + 6 + 8) ÷ 3 = 6.","Easy"],
    ["If x + 7 = 19, what is x?", ["10","11","12","13"],2,"Subtract 7 from both sides to get x = 12.","Easy"],
    ["A number increases from 80 to 100. What is the percentage increase?", ["20%","25%","30%","40%"],1,"Increase is 20; 20 ÷ 80 × 100 = 25%.","Medium"],
    ["Find the odd one out: 2, 4, 8, 9, 16.", ["2","4","9","16"],2,"9 is not a power of 2.","Easy"],
    ["If all roses are flowers, which statement must be true?", ["All flowers are roses","All roses are flowers","No roses are flowers","All plants are roses"],1,"This repeats the given relationship.","Easy"],
    ["A car travels 150 km in 3 hours. Speed?", ["30 km/h","40 km/h","50 km/h","60 km/h"],2,"150 ÷ 3 = 50 km/h.","Easy"],
    ["What is the simple interest on ₹1,000 at 10% per year for 2 years?", ["₹100","₹150","₹200","₹300"],2,"SI = principal × rate × time ÷ 100 = ₹200.","Medium"],
    ["Find the next number: 1, 4, 9, 16, __", ["20","24","25","36"],2,"These are squares: 1², 2², 3², 4², then 5² = 25.","Easy"],
    ["If 12 workers finish a job in 5 days, how many worker-days are required?", ["17","30","50","60"],3,"12 × 5 = 60 worker-days.","Medium"],
    ["A fair coin is tossed once. Probability of heads?", ["0","1/4","1/2","1"],2,"There are two equally likely outcomes; heads has probability 1/2.","Easy"],
    ["A number divided by 5 gives quotient 7 and remainder 2. What is the number?", ["30","32","35","37"],1,"Number = divisor × quotient + remainder = 5 × 7 + 2 = 37." .replace("37","37"),"Medium"]
  ]
};

const questionBankFixed = questionBank["Aptitude & Reasoning"];
questionBankFixed[19][0] = "A number divided by 5 gives quotient 6 and remainder 2. What is the number?";
questionBankFixed[19][3] = 1;
questionBankFixed[19][4] = "Number = divisor × quotient + remainder = 5 × 6 + 2 = 32.";
questionBankFixed[19][1] = ["30","32","35","37"];


const quizArea = document.getElementById("quizArea");
const quizSetup = document.getElementById("quizSetup");

const dashboardSections = [
    document.querySelector(".welcome"),
    document.querySelector(".stats"),
    document.querySelector(".subjects")
];

let currentQuestions = [];
let currentIndex = 0;
let currentScore = 0;
let answered = false;
let selectedSection = "";

function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function getAvailableQuestions() {
    return selectedSection === "Mock Tests"
        ? Object.values(questionBank).flat()
        : questionBank[selectedSection] || [];
}

function startQuiz(section) {
    selectedSection = section;
    dashboardSections.forEach(element => element.hidden = true);
    quizArea.hidden = true;
    quizSetup.hidden = false;

    document.getElementById("setupTitle").textContent =
        section + " — Quiz Settings";
    document.getElementById("difficulty").value = "All";

    updateQuestionCountOptions();
    quizSetup.scrollIntoView({ behavior: "smooth" });
}

function updateQuestionCountOptions() {
    const difficulty = document.getElementById("difficulty").value;
    const available = getAvailableQuestions().filter(q =>
        difficulty === "All" || q.difficulty === difficulty
    ).length;

    const select = document.getElementById("questionCount");
    const counts = [10, 20, 30].filter(n => n <= available);

    if (available > 0 && !counts.includes(available)) {
        counts.push(available);
    }

    counts.sort((a, b) => a - b);

    select.innerHTML = counts.length
        ? counts.map(n => `<option value="${n}">${n} Questions</option>`).join("")
        : `<option value="">No questions available</option>`;

    document.getElementById("beginQuiz").disabled = available === 0;
}

function beginQuiz() {
    const difficulty = document.getElementById("difficulty").value;
    const count = Number(document.getElementById("questionCount").value);

    const available = getAvailableQuestions().filter(q =>
        difficulty === "All" || q.difficulty === difficulty
    );

    if (!available.length || !count) {
        alert("No questions available for this selection.");
        return;
    }

    currentQuestions = shuffle(available).slice(0, count);
    currentIndex = 0;
    currentScore = 0;

    quizSetup.hidden = true;
    quizArea.hidden = false;
    renderQuestion();
}

function renderQuestion() {
    answered = false;
    const q = currentQuestions[currentIndex];

    quizArea.innerHTML = `
        <div class="quiz-top">
            <strong>${selectedSection}</strong>
            <span>Question ${currentIndex + 1} of ${currentQuestions.length}</span>
        </div>
        <div class="quiz-progress">
            <div class="quiz-progress-fill"
                 style="width:${currentIndex / currentQuestions.length * 100}%"></div>
        </div>
        <h2 class="question-text">${q.q}</h2>
        <div id="answerOptions">
            ${q.options.map((option, i) => `
                <button class="answer-option" data-index="${i}">
                    ${String.fromCharCode(65 + i)}. ${option}
                </button>
            `).join("")}
        </div>
        <div id="feedback" aria-live="polite"></div>
        <div class="quiz-actions">
            <button id="quitQuiz" class="secondary-button">Exit Quiz</button>
            <button id="nextQuestion" disabled>
                ${currentIndex === currentQuestions.length - 1 ? "See Results" : "Next Question"}
            </button>
        </div>
    `;

    document.querySelectorAll(".answer-option").forEach(button => {
        button.addEventListener("click", () =>
            checkAnswer(Number(button.dataset.index))
        );
    });

    document.getElementById("nextQuestion").addEventListener("click", () => {
        if (currentIndex < currentQuestions.length - 1) {
            currentIndex++;
            renderQuestion();
        } else {
            showResults();
        }
    });

    document.getElementById("quitQuiz").addEventListener("click", showDashboard);
}

function checkAnswer(index) {
    if (answered) return;
    answered = true;

    const q = currentQuestions[currentIndex];
    const correct = index === q.answer;

    if (correct) currentScore++;

    document.querySelectorAll(".answer-option").forEach((button, i) => {
        button.disabled = true;
        if (i === q.answer) button.classList.add("correct");
        else if (i === index) button.classList.add("incorrect");
    });

    document.getElementById("feedback").innerHTML = `
        <div class="explanation">
            <strong>${correct ? "Correct!" : "Incorrect."}</strong>
            <p>${q.explanation}</p>
        </div>
    `;

    document.getElementById("nextQuestion").disabled = false;
}

function showResults() {
    const percentage = Math.round(currentScore / currentQuestions.length * 100);
    const history = JSON.parse(localStorage.getItem("prepTrackHistory") || "[]");

    history.push({
        section: selectedSection,
        score: currentScore,
        total: currentQuestions.length,
        percentage,
        date: new Date().toLocaleDateString()
    });

    localStorage.setItem("prepTrackHistory", JSON.stringify(history));

    quizArea.innerHTML = `
        <div style="text-align:center">
            <h2>Quiz Completed!</h2>
            <div class="result-score">${percentage}%</div>
            <h3>${currentScore} out of ${currentQuestions.length} correct</h3>
            <p class="explanation">
                ${percentage >= 80 ? "Excellent work!" :
                  percentage >= 50 ? "Good effort. Keep practising!" :
                  "Keep learning and try again!"}
            </p>
            <div class="quiz-actions">
                <button id="retryQuiz">Try Again</button>
                <button id="backDashboard" class="secondary-button">Dashboard</button>
            </div>
        </div>
    `;

    document.getElementById("retryQuiz").addEventListener("click", () =>
        startQuiz(selectedSection)
    );
    document.getElementById("backDashboard").addEventListener("click", showDashboard);
    updateStats();
}

function showDashboard() {
    quizArea.hidden = true;
    quizSetup.hidden = true;
    dashboardSections.forEach(element => element.hidden = false);
    updateStats();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateStats() {
    const history = JSON.parse(localStorage.getItem("prepTrackHistory") || "[]");
    document.getElementById("completed").textContent = history.length;

    const average = history.length
        ? Math.round(history.reduce((sum, item) => sum + item.percentage, 0) / history.length)
        : 0;

    document.getElementById("score").textContent = average + "%";
}

document.getElementById("difficulty").addEventListener("change", updateQuestionCountOptions);
document.getElementById("beginQuiz").addEventListener("click", beginQuiz);
document.getElementById("cancelSetup").addEventListener("click", showDashboard);

updateStats();


for (const section of Object.keys(questionBank)) {
  questionBank[section] = questionBank[section].map(item => {
    if (!Array.isArray(item)) return item;
    const [q, options, answer, explanation, difficulty] = item;
    return { q, options, answer, explanation, difficulty };
  });
}

