import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ExchangeRequest {
  fullName: string;
  phoneNumber: string;
  usdcAmount: number;
  kwachaAmount: number;
  notes?: string;
  requestId: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, phoneNumber, usdcAmount, kwachaAmount, notes, requestId }: ExchangeRequest = await req.json();

    console.log("Sending exchange notification email for request:", requestId);

    const emailResponse = await resend.emails.send({
      from: "Diyama Exchange <onboarding@resend.dev>",
      to: ["getitdonerapid@gmail.com"],
      subject: `New Exchange Request: ${usdcAmount} USDC → ${kwachaAmount} ZMW`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            🔄 New Exchange Request
          </h1>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1e293b; margin-top: 0;">Customer Details</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Phone:</strong> ${phoneNumber}</p>
          </div>
          
          <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1e40af; margin-top: 0;">Exchange Details</h2>
            <p style="font-size: 24px; font-weight: bold; color: #3b82f6;">
              ${usdcAmount} USDC → ${kwachaAmount.toLocaleString()} ZMW
            </p>
            <p><strong>Rate:</strong> 1 USDC = 21 ZMW</p>
          </div>
          
          ${notes ? `
          <div style="background: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #854d0e; margin-top: 0;">Additional Notes</h2>
            <p>${notes}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding: 15px; background: #f1f5f9; border-radius: 8px;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              <strong>Request ID:</strong> ${requestId}<br>
              <strong>Time:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
          
          <p style="color: #64748b; font-size: 14px; margin-top: 20px;">
            Please contact the customer via phone/WhatsApp to arrange the P2P exchange.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending exchange notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
