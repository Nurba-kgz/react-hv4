




const ErrorPage = ({ user }) => {
    return (
        <div>
            <h1>Тебе сюда нельзя - {user.name} {user.lastname}</h1>
        </div>
    );
};

export default ErrorPage;