import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Phone, User, FileText, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const EXCHANGE_RATE = 21;

interface ExchangeFormProps {
  sessionId: string;
  onRequestCreated: () => void;
}

export const ExchangeForm = ({ sessionId, onRequestCreated }: ExchangeFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    usdcAmount: "",
    notes: "",
  });

  const kwachaAmount = formData.usdcAmount ? parseFloat(formData.usdcAmount) * EXCHANGE_RATE : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName.trim() || !formData.phoneNumber.trim() || !formData.usdcAmount) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const usdcValue = parseFloat(formData.usdcAmount);
    if (isNaN(usdcValue) || usdcValue <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid USDC amount.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert request into database
      const { data: insertedRequest, error: insertError } = await supabase
        .from("exchange_requests")
        .insert({
          full_name: formData.fullName.trim(),
          phone_number: formData.phoneNumber.trim(),
          usdc_amount: usdcValue,
          kwacha_amount: kwachaAmount,
          notes: formData.notes.trim() || null,
          session_id: sessionId,
        })
        .select()
        .single();

      if (insertError) throw insertError;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke("send-exchange-notification", {
        body: {
          fullName: formData.fullName.trim(),
          phoneNumber: formData.phoneNumber.trim(),
          usdcAmount: usdcValue,
          kwachaAmount: kwachaAmount,
          notes: formData.notes.trim() || undefined,
          requestId: insertedRequest.id,
        },
      });

      if (emailError) {
        console.error("Email notification failed:", emailError);
        // Don't fail the request if email fails
      }

      setShowSuccess(true);
      setFormData({ fullName: "", phoneNumber: "", usdcAmount: "", notes: "" });
      onRequestCreated();

      toast({
        title: "Request Submitted!",
        description: "We'll contact you shortly to complete the exchange.",
      });

      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error: any) {
      console.error("Error submitting request:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-xl font-display font-bold text-foreground mb-2">
          Request Submitted Successfully!
        </h3>
        <p className="text-muted-foreground">
          We'll contact you via phone/WhatsApp to complete the exchange.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="glass-card p-6 space-y-5"
    >
      <div className="space-y-2">
        <Label htmlFor="fullName" className="flex items-center gap-2">
          <User className="w-4 h-4 text-primary" />
          Full Name *
        </Label>
        <Input
          id="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="Enter your full name"
          className="bg-background/50 border-border/50 focus:border-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber" className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-primary" />
          Phone Number *
        </Label>
        <Input
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          placeholder="+260 97X XXX XXX"
          className="bg-background/50 border-border/50 focus:border-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="usdcAmount" className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-primary" />
          USDC Amount *
        </Label>
        <Input
          id="usdcAmount"
          type="number"
          min="1"
          step="0.01"
          value={formData.usdcAmount}
          onChange={(e) => setFormData({ ...formData, usdcAmount: e.target.value })}
          placeholder="Enter USDC amount"
          className="bg-background/50 border-border/50 focus:border-primary"
        />
      </div>

      <div className="glass-card p-4 bg-primary/10 border-primary/30">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">You'll Receive:</span>
          <span className="text-2xl font-bold gradient-text">
            {kwachaAmount.toLocaleString()} ZMW
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Rate: 1 USDC = {EXCHANGE_RATE} ZMW
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes" className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-primary" />
          Additional Notes
        </Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Any special instructions or preferred contact time..."
          className="bg-background/50 border-border/50 focus:border-primary resize-none"
          rows={3}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold py-6"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Exchange Request"
        )}
      </Button>
    </motion.form>
  );
};
