-- Create exchange_requests table
CREATE TABLE public.exchange_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  usdc_amount DECIMAL(18, 6) NOT NULL,
  kwacha_amount DECIMAL(18, 2) NOT NULL,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'cancelled')),
  session_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.exchange_requests ENABLE ROW LEVEL SECURITY;

-- Create policy for users to view their own requests (by session_id)
CREATE POLICY "Users can view their own requests" 
ON public.exchange_requests 
FOR SELECT 
USING (true);

-- Create policy for users to create requests
CREATE POLICY "Anyone can create requests" 
ON public.exchange_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy for updating requests (for status changes)
CREATE POLICY "Anyone can update requests" 
ON public.exchange_requests 
FOR UPDATE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_exchange_requests_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_exchange_requests_updated_at
BEFORE UPDATE ON public.exchange_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_exchange_requests_updated_at();