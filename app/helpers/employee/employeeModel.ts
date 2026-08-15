import type { StaticImageData } from "next/image";

export default interface EmployeeModel {
  key: string;
  id: string;
  image: StaticImageData;
  name: string;
  age: number;
  licensed: string;
  specialties: { name: string }[];
  services: { name: string }[];
  languages: { name: string }[];
  clientfocus: string;
}