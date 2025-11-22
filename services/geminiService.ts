import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

export const generateBrandPhilosophy = async (keywords: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key not found. Returning mock data.");
    return "Elegance is not about being noticed, it's about being remembered. We define the future by destroying the past.";
  }

  const ai = new GoogleGenAI({ apiKey: apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are the Chief Creative Officer of a hyper-luxury, avant-garde brand similar to a Formula 1 racing team meets high-fashion house.
      
      The user provides these keywords: "${keywords}".
      
      Write a short, punchy, abstract, and overwhelmingly cool brand manifesto (max 2 sentences). 
      Use words like "visceral," "kinetic," "legacy," "velocity," "void." 
      Do not use hashtags. Be arrogant but sophisticated.`,
    });

    return response.text || "Silence is the loudest sound.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "In the absence of data, we create our own reality.";
  }
};

export const generateProductVision = async (product: string): Promise<string> => {
    if (!apiKey) return "Engineered for the few who know.";
    
    const ai = new GoogleGenAI({ apiKey: apiKey });
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Describe this product: "${product}" as if it were a rare artifact from the year 2099. 
            Use technical but poetic language. Short paragraph.`
        });
        return response.text || "Undefined excellence.";
    } catch (e) {
        return "Redefining the standard.";
    }
}
