import styles from '@/styles/Home.module.css'


export default function Challange() {

    let myFullName = "Mubashir Muhammad Ibrahim"
    return(
        <>
            <h1 className='my-name'>{myFullName}</h1>
            <h3 className='five-best-heading'>List of 5 Best Series</h3>

            <ol className="web-series-list"> 
                <li>Dark</li>
                <li>Extra Curricular</li>
                <li>My Hollo Love</li>
                <li>My First-2 Love</li>
                <li>Mr Robot</li>
            </ol>
        </>
    )
}