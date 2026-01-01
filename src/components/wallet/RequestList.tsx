import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, CheckCircle, XCircle, Loader2, RefreshCw, Phone, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ExchangeRequest {
  id: string;
  full_name: string;
  phone_number: string;
  usdc_amount: number;
  kwacha_amount: number;
  notes: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

interface RequestListProps {
  requests: ExchangeRequest[];
  onRequestUpdated: () => void;
  isLoading: boolean;
}

const statusConfig: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  pending: {
    label: "Pending",
    color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
    icon: <Clock className="w-3 h-3" />,
  },
  in_progress: {
    label: "In Progress",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/50",
    icon: <Loader2 className="w-3 h-3 animate-spin" />,
  },
  completed: {
    label: "Completed",
    color: "bg-green-500/20 text-green-400 border-green-500/50",
    icon: <CheckCircle className="w-3 h-3" />,
  },
  cancelled: {
    label: "Cancelled",
    color: "bg-red-500/20 text-red-400 border-red-500/50",
    icon: <XCircle className="w-3 h-3" />,
  },
};

export const RequestList = ({ requests, onRequestUpdated, isLoading }: RequestListProps) => {
  const { toast } = useToast();
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const handleMarkCompleted = async (requestId: string) => {
    setUpdatingId(requestId);

    try {
      const { error } = await supabase
        .from("exchange_requests")
        .update({ status: "completed" })
        .eq("id", requestId);

      if (error) throw error;

      toast({
        title: "Request Completed!",
        description: "Thank you for using Diyama Exchange.",
      });

      onRequestUpdated();
    } catch (error: any) {
      console.error("Error updating request:", error);
      toast({
        title: "Update Failed",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setUpdatingId(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (requests.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <DollarSign className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
        <p className="text-muted-foreground">No exchange requests yet.</p>
        <p className="text-sm text-muted-foreground/70">
          Submit your first request above to get started.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-display font-semibold text-foreground">
          My Exchange Requests
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onRequestUpdated}
          className="text-muted-foreground hover:text-foreground"
        >
          <RefreshCw className="w-4 h-4 mr-1" />
          Refresh
        </Button>
      </div>

      <AnimatePresence mode="popLayout">
        {requests.map((request, index) => {
          const status = statusConfig[request.status] || statusConfig.pending;
          const canMarkCompleted = request.status === "pending" || request.status === "in_progress";

          return (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-4 space-y-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold gradient-text">
                      {request.usdc_amount} USDC
                    </span>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-lg font-bold text-foreground">
                      {request.kwacha_amount.toLocaleString()} ZMW
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-3 h-3" />
                    {request.phone_number}
                  </div>
                </div>

                <Badge className={`${status.color} flex items-center gap-1 border`}>
                  {status.icon}
                  {status.label}
                </Badge>
              </div>

              {request.notes && (
                <p className="text-sm text-muted-foreground bg-background/30 p-2 rounded">
                  {request.notes}
                </p>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-border/30">
                <span className="text-xs text-muted-foreground">
                  {formatDate(request.created_at)}
                </span>

                {canMarkCompleted && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleMarkCompleted(request.id)}
                    disabled={updatingId === request.id}
                    className="border-green-500/50 text-green-400 hover:bg-green-500/20 hover:text-green-300"
                  >
                    {updatingId === request.id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Mark as Completed
                      </>
                    )}
                  </Button>
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
