interface WelcomeProps{
    name : string
}
const Welcome: React.FC<WelcomeProps> = ({name}): JSX.Element => {
    return (
        <div>
            Welcome {name}!!
        </div>
    )
}

export default Welcome
