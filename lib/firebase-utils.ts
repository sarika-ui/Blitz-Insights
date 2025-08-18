import { db } from './firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, limit, getDocs } from 'firebase/firestore';

export interface FirebaseLead {
  id?: string;
  name: string;
  email: string;
  company: string;
  message: string;
  timestamp: any; // Firestore timestamp
  source: string;
  createdAt: string;
}

export async function saveLeadToFirebase(leadData: Omit<FirebaseLead, 'timestamp' | 'createdAt'>): Promise<string> {
  try {
    const leadsCollection = collection(db, 'leads');
    const docData = {
      ...leadData,
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString(),
    };
    
    const docRef = await addDoc(leadsCollection, docData);
    console.log('Lead saved to Firebase with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error saving lead to Firebase:', error);
    throw new Error('Failed to save lead to database');
  }
}

export async function getRecentLeads(limitCount: number = 10): Promise<FirebaseLead[]> {
  try {
    const leadsCollection = collection(db, 'leads');
    const q = query(leadsCollection, orderBy('timestamp', 'desc'), limit(limitCount));
    const querySnapshot = await getDocs(q);
    
    const leads: FirebaseLead[] = [];
    querySnapshot.forEach((doc) => {
      leads.push({
        id: doc.id,
        ...doc.data()
      } as FirebaseLead);
    });
    
    return leads;
  } catch (error) {
    console.error('Error fetching leads from Firebase:', error);
    throw new Error('Failed to fetch leads from database');
  }
}
