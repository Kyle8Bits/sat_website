import allowedEmail, {ISATEmail} from "../models/Email";

export const addEmail = async (data: ISATEmail): Promise<void> =>{
    const email = new allowedEmail(data);
    email.save()
}