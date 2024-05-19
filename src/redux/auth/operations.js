import { createAsyncThunk } from '@reduxjs/toolkit';
import { createClient } from '@supabase/supabase-js';

const BASE_URL = 'https://ivsgiavzqpqlnmwntuye.supabase.co';
const KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2c2dpYXZ6cXBxbG5td250dXllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4Mzc2MDAsImV4cCI6MjAzMDQxMzYwMH0.k7iOo2qlcZk47hKAaOjQYKvtctPoMXx9IclYzIcGtSk';

const supabase = createClient(BASE_URL, KEY);

export const signUp = createAsyncThunk('auth/signup', async (userData, thunkAPI) => {
  const { data, error } = await supabase.auth.signUp(userData);

  if (error) return thunkAPI.rejectWithValue(error.message);

  await supabase
    .from('places')
    .insert([{ id: data.user.id, places: [] }])
    .select();

  return data;
});

export const signIn = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  const { data, error } = await supabase.auth.signInWithPassword(userData);

  if (error) return thunkAPI.rejectWithValue(error.message);

  return data;
});

export const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  const { error } = await supabase.auth.signOut();

  if (error) return thunkAPI.rejectWithValue(error.message);
});
