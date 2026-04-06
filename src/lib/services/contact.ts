export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Simulates a contact form submission.
 * The portfolio contact form only needs to confirm success in the UI,
 * so this keeps the site fully static and avoids a backend dependency.
 * @param formData The contact form data to submit
 * @returns A promise that resolves with the document reference
 */
export async function submitContactForm(formData: ContactFormData) {
  try {
    // Preserve the async contract so the component behavior stays the same.
    await new Promise((resolve) => setTimeout(resolve, 250));
    console.log('Contact form submission:', formData);
    return { success: true, id: `local-${Date.now()}` };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
}
