import UserClass from "./UserClass"
import  User from "./User"
const About=()=>{
    return(
        <div>
            <h1>AboutUs </h1>
            <User
                name="Jay"
                location="Surat"
                contact="@JC18"
            />

            <UserClass
                name="Jay"
                location="Surat"
                contact="@JC18"
            />
        </div>
    )
}
export default About;