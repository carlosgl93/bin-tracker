# GitHub Copilot Prompt Context for Daily Production App

This project is a web application built using Vite, TypeScript, React, and Firebase (Firestore and Hosting). It is used for recording daily production data with the following modules:

## 🔧 Stack

- Frontend: Vite + React + TypeScript
- Backend/Persistence: Firebase Firestore
- Deployment: Firebase Hosting
- No authentication is required.
- App language: Spanish

## 📦 App Modules

1. **Landing Page + Layout**
   - Simple entry page with title and navigation between views (Daily, Monthly, Annual).
2. **Daily View**
   - Shows a message or summary for the selected date.
   - Contains a button to add a new production record.
3. **New Production Record Form**
   - Inputs for:
     - Start/End Time
     - Gas control by day (Mon–Fri): percentage and value
     - Drum production per hour (09:00–19:00)
     - Drum stock: initial, used, total
     - Bag stock: initial, used, bad, total
     - Bins: by source (Inicio, Chechito, Don Luis, Otros), bad bins, total
   - Auto-calculation of totals
   - Submit and Cancel buttons
4. **Firestore Integration**
   - Save new records
   - Fetch records by date

## 🔄 Logic

- Calculations for totals must be done reactively (e.g., updating used/remaining stock as inputs change).
- Firestore documents must be structured by date, with nested fields for gas, production, stocks, and bins.

## 🧪 Notes

- Use React functional components with hooks.
- Use controlled inputs with local state.
- Use Firestore’s `addDoc` and `getDocs` for data persistence.
- Keep the UI minimal and mobile-friendly.

## Example Firestore Structure

```ts
type ProductionRecord = {
  date: string;
  startTime: string;
  endTime: string;
  gasControl: { day: string; percentage: number; value: number }[];
  drumProductionByHour: { range: string; count: number }[];
  drumStock: { initial: number; used: number; total: number };
  bagStock: { initial: number; used: number; damaged: number; total: number };
  binsStatus: { source: string; quantity: number }[];
  binsMalfunction: number;
  totalExistence: number;
  totalProcessed: number;
  totalFinal: number;
  brix: {
   1: number;
   2: number;
   3: number
  }
};
