import type EmployeeModel from "./employeeModel";

import ArlynImage from "@/app/assets/ArlynImage.png";
import Employee2Image from "@/app/assets/ArlynImage.png";
import Employee3Image from "@/app/assets/ArlynImage.png";
import Employee4Image from "@/app/assets/ArlynImage.png";
import Employee5Image from "@/app/assets/ArlynImage.png";
import Employee6Image from "@/app/assets/ArlynImage.png";
import Employee7Image from "@/app/assets/ArlynImage.png";
import Employee8Image from "@/app/assets/ArlynImage.png";

export const Employee1: EmployeeModel = {
  key: "1",
  id: "1",
  image: ArlynImage,
  name: "Arlyn Beloa, RPm, PhD",
  age: 24,
  licensed: "Licensed Clinical Psychologist",
  specialties: [{ name: "Stress Management" }, { name: "Anxiety" }],
  services: [{ name: "First Counseling Session" }],
  languages: [{ name: "English" }, { name: "Tagalog" }],
  clientfocus: "18-50 years old",
};

export const Employee2: EmployeeModel = {
  key: "2",
  id: "2",
  image: Employee2Image,
  name: "Sofia Martinez, RPm, MA",
  age: 31,
  licensed: "Licensed Clinical Psychologist",
  specialties: [{ name: "Anxiety Management" }, { name: "Depression Support" }],
  services: [{ name: "Individual Counseling" }],
  languages: [{ name: "English" }, { name: "Spanish" }],
  clientfocus: "18-45 years old",
};

export const Employee3: EmployeeModel = {
  key: "3",
  id: "3",
  image: Employee3Image,
  name: "Daniel Reyes, RPm, MSc",
  age: 35,
  licensed: "Licensed Psychologist",
  specialties: [{ name: "Stress Management" }, { name: "Burnout" }],
  services: [{ name: "Stress Counseling" }],
  languages: [{ name: "English" }, { name: "Tagalog" }],
  clientfocus: "21-50 years old",
};

export const Employee4: EmployeeModel = {
  key: "4",
  id: "4",
  image: Employee4Image,
  name: "Maya Santos, RPm, MA",
  age: 29,
  licensed: "Licensed Clinical Psychologist",
  specialties: [{ name: "Self-Esteem" }, { name: "Personal Growth" }],
  services: [{ name: "Individual Counseling" }],
  languages: [{ name: "English" }, { name: "Tagalog" }],
  clientfocus: "18-40 years old",
};

export const Employee5: EmployeeModel = {
  key: "5",
  id: "5",
  image: Employee5Image,
  name: "James Wilson, RPm, PhD",
  age: 42,
  licensed: "Licensed Clinical Psychologist",
  specialties: [{ name: "Trauma Support" }, { name: "Anxiety" }],
  services: [{ name: "First Counseling Session" }],
  languages: [{ name: "English" }],
  clientfocus: "25-60 years old",
};

export const Employee6: EmployeeModel = {
  key: "6",
  id: "6",
  image: Employee6Image,
  name: "Elena Cruz, RPm, MA",
  age: 27,
  licensed: "Licensed Psychologist",
  specialties: [{ name: "Student Wellness" }, { name: "Academic Stress" }],
  services: [{ name: "Student Counseling" }],
  languages: [{ name: "English" }, { name: "Tagalog" }],
  clientfocus: "18-30 years old",
};

export const Employee7: EmployeeModel = {
  key: "7",
  id: "7",
  image: Employee7Image,
  name: "Michael Anderson, RPm, MSc",
  age: 38,
  licensed: "Licensed Clinical Psychologist",
  specialties: [{ name: "Relationship Counseling" }, { name: "Communication" }],
  services: [{ name: "Relationship Counseling" }],
  languages: [{ name: "English" }],
  clientfocus: "21-55 years old",
};

export const Employee8: EmployeeModel = {
  key: "8",
  id: "8",
  image: Employee8Image,
  name: "Rachel Garcia, RPm, MA",
  age: 33,
  licensed: "Licensed Psychologist",
  specialties: [{ name: "Mindfulness" }, { name: "Emotional Wellness" }],
  services: [{ name: "Wellness Counseling" }],
  languages: [{ name: "English" }, { name: "Spanish" }],
  clientfocus: "18-50 years old",
};


export const employees: EmployeeModel[] = [
  Employee1,
  Employee2,
  Employee3,
  Employee4,
  Employee5,
  Employee6,
  Employee7,
  Employee8,
];

export const getEmployeeById = (id: string): EmployeeModel | undefined =>
  employees.find((employee) => employee.id === id);