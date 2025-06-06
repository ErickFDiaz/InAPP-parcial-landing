// src/context/QuoteContext.tsx

import React, { createContext, useState, useContext, ReactNode } from 'react';

// 1. Definir la forma de los datos que compartiremos
interface QuoteFormData {
    hasPlate: boolean;
    plate: string;
    document: string;
    phone: string;
}

interface VehicleDetailsData {
    year: string;
    brand: string;
    model: string;
    usage: string;
}

// Datos combinados
type FullQuoteData = QuoteFormData & VehicleDetailsData;

// 2. Definir la forma del Contexto
interface QuoteContextType {
    quoteData: Partial<FullQuoteData>; // Usamos Partial porque los datos se llenan en pasos
    updateQuoteData: (data: Partial<FullQuoteData>) => void;
    // Opcional: podrías agregar estados para loading, error, etc.
    // isLoading: boolean;
    // apiError: string | null;
}

// 3. Crear el Contexto con un valor por defecto
const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

// 4. Crear el componente Proveedor (Provider)
interface QuoteProviderProps {
    children: ReactNode;
}

export const QuoteProvider = ({ children }: QuoteProviderProps) => {
    const [quoteData, setQuoteData] = useState<Partial<FullQuoteData>>({});

    const updateQuoteData = (newData: Partial<FullQuoteData>) => {
        setQuoteData(prevData => ({
            ...prevData,
            ...newData
        }));
    };

    const value = {
        quoteData,
        updateQuoteData,
    };

    return (
        <QuoteContext.Provider value={value}>
            {children}
        </QuoteContext.Provider>
    );
};

// 5. Crear un custom Hook para consumir el contexto fácilmente
export const useQuote = () => {
    const context = useContext(QuoteContext);
    if (context === undefined) {
        throw new Error('useQuote must be used within a QuoteProvider');
    }
    return context;
};