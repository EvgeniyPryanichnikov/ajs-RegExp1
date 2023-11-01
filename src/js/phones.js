export default function transferPhoneNumberToTemplate(phone) {
  let strPhone = phone;
  if (typeof strPhone !== 'string') {
    strPhone = String(phone);
  }

  const phoneTemplate = `+${strPhone.replace(/\D/g, '')}`;
  return phoneTemplate;
}
