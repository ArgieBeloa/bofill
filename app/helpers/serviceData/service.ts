import {
  FaComments,
  FaLeaf,
  FaHandsHelping,
  FaStethoscope,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";

import type ServiceModel from "./serviceModel";

export const MentalHealthCounseling: ServiceModel = {
  slug: "mental-health-counseling",
  title: "Mental Health Counseling",
  description:
    "Uses a broad range of culturally-informed and culturally-sensitive practices to help people improve their well-being, prevent and alleviate distress and maladjustment, resolve crises, and increase their ability to function better in their lives.",
  icon: FaComments,
};

export const Psychotherapy: ServiceModel = {
  slug: "psychotherapy",
  title: "Psychotherapy",
  description:
    "Learn about your specific issues and how your thoughts, emotions and behaviors affect your moods.",
  icon: FaLeaf,
};

export const OccupationalTherapy: ServiceModel = {
  slug: "occupational-therapy",
  title: "Occupational Therapy",
  description:
    "Helps one to achieve maximal performance in meaningful occupations such as education, play, leisure, activities of daily living and social participation.",
  icon: FaHandsHelping,
};

export const PsychiatricConsultation: ServiceModel = {
  slug: "psychiatric-consultation",
  title: "Psychiatric Consultation",
  description:
    "The consultation aims to establish a deeper understanding between the physician and patient regarding the patient's condition, determine an appropriate treatment plan to achieve agreed-upon mental health goals, and utilize the information gathered during the consultation to guide further care with the psychiatrist.",
  icon: FaStethoscope,
};

export const GroupTherapy: ServiceModel = {
  slug: "group-therapy",
  title: "Group Therapy",
  description:
    "Group therapy involves therapists working with multiple individuals simultaneously, focusing on a specific topic or issue while fostering interaction among group members and facilitating mutual learning and support.",
  icon: FaUsers,
};

export const DrugDependencyExam: ServiceModel = {
  slug: "drug-dependency-exam",
  title: "Drug Dependency Exam (DDE)",
  description:
    "This screening is conducted by a DOH-accredited physician to evaluate the extent of a person's drug use and determine the level of their potential drug dependency.",
  icon: FaClipboardList,
};

export const services: ServiceModel[] = [
  MentalHealthCounseling,
  Psychotherapy,
  OccupationalTherapy,
  PsychiatricConsultation,
  GroupTherapy,
  DrugDependencyExam,
];

export const getServiceBySlug = (slug: string): ServiceModel | undefined =>
  services.find((service) => service.slug === slug);