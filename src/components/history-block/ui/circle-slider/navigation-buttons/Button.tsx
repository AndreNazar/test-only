import styles from './NavigationButtons.module.scss'

interface ButtonProps {
    onClick: () => void,
    endPoint: boolean,
    type: 'left' | 'right'
}

function Button ({onClick, endPoint, type}: ButtonProps) {

    return <div 
    onClick={() => {!endPoint && onClick()}}
    className={`${styles.navigation__button} ${endPoint && styles['navigation__button--desabled']}`}>
        <img src={require(`../../../../../assets/imgs/arrow_${type}.svg`)} alt=''/>
    </div>
}

export default Button