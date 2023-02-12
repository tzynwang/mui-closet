function splitByUppercase(str: string) {
  return str.split(/(?=[A-Z])/).join(' ');
}

export default splitByUppercase;
