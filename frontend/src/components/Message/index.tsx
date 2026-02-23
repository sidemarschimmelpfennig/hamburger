import styles from './styles.module.css'

type MessageProps ={
    message: string
}

export function Message({message}: MessageProps){
    return (
        <div className={styles.message_container}> 
            <p>{message}</p> 
        </div> )
}