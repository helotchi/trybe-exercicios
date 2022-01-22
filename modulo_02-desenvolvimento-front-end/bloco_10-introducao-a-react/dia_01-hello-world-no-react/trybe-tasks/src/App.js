import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const compromissos = ['Estudar conteúdo da Trybe', 'Escrever relatório de Estágio', 'Ler capítulos do livro'];
  return (
    <div className="App">
      <header className="App-header">
        {compromissos.map((tarefa) => Task(tarefa))}
      </header>
    </div>
  );
}

export default App;
