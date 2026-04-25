import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Supabase Admin Client (Service Role)
const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || 'placeholder_key';

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Stripe instance
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Node.js Supabase Backend is running' });
});

// Example route for fetching courses (mocked for now, but ready for Supabase)
app.get('/api/courses', async (req, res) => {
  // In production:
  // const { data, error } = await supabaseAdmin.from('courses').select('*');
  // if (error) return res.status(500).json({ error: error.message });
  
  res.json({ 
    courses: [
      { id: '1', title: 'Fundamentos de la Guitarra', isPremium: false },
      { id: '2', title: 'The Architecture of Silence', isPremium: true }
    ] 
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
