import UserClass from "./UserClass"
import { User } from "./User"
export const About=()=>{
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