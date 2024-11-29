
import { NextResponse } from "next/server";
import { list } from "postcss";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const emailFrom = process.env.EMAIL_FROM;


export async function POST(request, res) {
  const { email, subject, message } = await request.json();
  
  try {
      from: fromEmail,
      to: [emailFrom],
      subject: subject,
      react: (
        <>
          <h1>Assunto:<p>{subject}</p></h1>
          
          <h2>mensagem:<p>{message}</p></h2>

           <p>{email}</p>
         
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}


