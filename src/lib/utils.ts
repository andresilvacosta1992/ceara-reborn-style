import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export function getWhatsAppUrl(phoneNumber: string, message: string = ""): string {
  const encodedMessage = encodeURIComponent(message);
  const basePhone = phoneNumber.replace(/\D/g, '');
  
  if (isMobileDevice()) {
    return `https://wa.me/${basePhone}?text=${encodedMessage}`;
  } else {
    return `https://web.whatsapp.com/send?phone=${basePhone}&text=${encodedMessage}`;
  }
}
