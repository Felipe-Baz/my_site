import Head from 'next/head'
import styles from '../../styles/example.module.css'

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const todos = await data.json()

    // console.log(todos)
    return {
        props: { todos },
    }
}

export default function Example({ todos }) {
    return (
        <>
            <Head>
                <title>Example</title>
            </Head>
            <h1>Pagina de Example</h1>
            <ul className={styles.todolist}>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}