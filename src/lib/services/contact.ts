import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Submits a contact form message to Firestore
 * @param formData The contact form data to submit
 * @returns A promise that resolves with the document reference
 */
export async function submitContactForm(formData: ContactFormData) {
  try {
    // Add timestamp fields
    const dataToSubmit = {
      ...formData,
      createdAt: serverTimestamp(),
      isRead: false,
      status: 'new'
    };
    
    // Add to Firestore collection
    const docRef = await addDoc(collection(db, 'contact_messages'), dataToSubmit);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
} 