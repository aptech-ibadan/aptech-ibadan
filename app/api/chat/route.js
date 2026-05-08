import { NextResponse } from 'next/server';

const APTECH_KNOWLEDGE = `
Context: You are the official AI assistant for Aptech Ibadan. 
Website: https://aptech-ibadan-ten.vercel.app/
Key Info:
- Courses: ACCP (Software Engineering), Power Pro, Data Science, Cyber Security, Digital Marketing.
- Gallery: Showcases modern computer labs, student hackathons, seminars, and graduation ceremonies.
- Facilities: High-speed internet, air-conditioned labs, and project-based learning.
- Location: Ibadan, Nigeria.
- Call to Action: Encourage users to visit the gallery or fill the 'Enquire Now' form.
`;

export async function POST(req) {
  const { messages } = await req.json();

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: APTECH_KNOWLEDGE },
          ...messages,
        ],
      }),
    });

    const data = await response.json();
    return NextResponse.json({ text: data.choices[0].message.content });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch response" }, { status: 500 });
  }
}