let tasks = ISON.parse( localStorage.getItem("tasks")) || ;

function saveTasks()

localStorage.setItem( .stringify(tasks)

function add Task(){

const text = documen

.getElementByld("taskinput").value

const priority = document

.getElementByld("priority").value;

if (text trim()

return alert("Enter a task!") tasks.push({id: Date.now(), text, priority, completed: false }); document.getElementByld( "taskinput" value aveTasks(): render Tasks(:

function sortTasks() { const order = (High:1, Mediu onst order = {High:1, Medium:2,Low:3}:

tasks.s order[a.priority]-order[b.priority]);

Tasks();

function render Tasks() {

const list = document

etElementByld("taskList"):

list.inner HTML= ".

forEach(task => {

const div =

document.createElement("div"): div className

task ${task.priority.toLowerCase()}:

task

if (task.completed)

div.classList.add("completed");

list.appendChild(div);

renderTasks()
