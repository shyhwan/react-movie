import { useState, useEffect } from 'react';

function App() {
    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => setToDo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo === '') {
            return;
        }
        setToDos((arr) => [toDo, ...arr]);
        setToDo('');
    };
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."></input>
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

/*
function Hello() {
    // useEffect(); content가 바뀌어도 한번만 실행
    useEffect(() => {
        console.log('Hi!!');
        return () => console.log('Bye~!'); // 함수가 종료 될때 실행
    }, []); // []안에 특 정 키워드 입력 가능, 키워드 작동시 실행
    return <h1>Hello</h1>;
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
        </div>
    );
}
*/
export default App;
