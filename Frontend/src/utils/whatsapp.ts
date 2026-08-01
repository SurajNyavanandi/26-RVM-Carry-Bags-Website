export const RVM_WHATSAPP_NUMBER = "919100777396";
export const DEVELOPER_WHATSAPP_NUMBER = "919666635009";

export const DEVELOPER_INSTAGRAM_URL = "https://www.instagram.com/virat.tom/";
export const DEVELOPER_LINKEDIN_URL = "https://www.linkedin.com/in/suraj-nyavanandi-305962286/";

export function getRvmWhatsAppLink(message?: string): string {
  const defaultMsg = "Hello RVM Carry Bags, I would like to inquire about non-woven printed bags.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${RVM_WHATSAPP_NUMBER}?text=${text}`;
}

export function getDeveloperWhatsAppLink(message?: string): string {
  const defaultMsg = "Hello Suraj, I am interested in designing a professional custom website for my business.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${DEVELOPER_WHATSAPP_NUMBER}?text=${text}`;
}
