-- Enable RLS
ALTER TABLE public.proposals ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert
CREATE POLICY "Allow public inserts on proposals"
ON public.proposals
FOR INSERT
TO public
WITH CHECK (true);

-- Create policy to allow authenticated users to view their own proposals
CREATE POLICY "Allow users to view own proposals"
ON public.proposals
FOR SELECT
TO public
USING (email = auth.current_user()->>'email');

-- Create policy to allow admins to view all proposals
CREATE POLICY "Allow admins to view all proposals"
ON public.proposals
FOR ALL
TO authenticated
USING (
  auth.jwt() ->> 'email' IN (
    SELECT email FROM auth.users WHERE role = 'service_role'
  )
); 