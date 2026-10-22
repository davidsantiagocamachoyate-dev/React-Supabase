import { supabase } from '../api/supabaseClient';

export const personaService = {
  async obtenerPersonas() {
    const { data, error } = await supabase
      .from('persona')
      .select('*')
      .order('nombre', { ascending: true });

    if (error) {
      console.error('Error al consultar personas:', error.message);
      throw new Error(error.message);
    }

    return data || [];
  }
};


