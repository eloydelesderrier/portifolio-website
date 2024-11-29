
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const emailFrom = process.env.EMAIL_FROM;



export async function POST(request, res) {
  const { email, subject, message } = await request.json();
  
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [emailFrom],
      subject: subject,
      react: (
        <>
          <h1>Assunto:</h1>
          <p>{subject}</p>
          
          <h2>mensagem:</h2>
          <p>{message}</p><br/>
          <p>{email}</p>
          
                  
          
        </>
      )
    })
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
