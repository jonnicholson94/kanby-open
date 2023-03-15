import Register from "./Register"
import SignIn from "./SignIn"
import ResetPassword from './ResetPassword'

const Hero = ({ active, setActive }) => {

    const handleActiveClick = (type: string) => {
        setActive(type)
    }

    return (
        <section className="flex-center relative">
            <div className="auto-height flex-center flex-column margin-vertical-50">
                <div className="width-75">
                    <h1>Manage all of your tasks, without the fuss</h1>
                    <p className="sub-heading">Track, view and manage your tasks, all in one simple interface. No more complicated setup, just add tasks and go.</p>
                </div>

                { active === 'register' && <Register onClick={handleActiveClick} /> }
                { active === 'sign-in' && <SignIn  onClick={handleActiveClick} /> }
                { active === 'forgot-password' && <ResetPassword onClick={handleActiveClick} /> }

            </div>
            <div className="hero-bubble-1"></div>
            <div className="hero-bubble-2"></div>
        </section>
    )
}

export default Hero