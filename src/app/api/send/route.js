
import { NextResponse } from "next/server";
import { list } from "postcss";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;


export async function POST(request, res) {
  const { email, subject, message } = await request.json();
  
  try {
    const data = await resend.emails.send({
      from: fromEmail ,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Obrigado pelo contato, estarei em contato assim que possivel!</p>
          <p>Nova mensagem enviada: {email}</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}


