/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface QuizAnswers {
  operationType: 'vender' | 'alquilar' | null;
  propertyType: 'departamento' | 'casa' | 'terreno' | 'local_comercial' | null;
  location: string;
  expectedPrice: string; // e.g. "S/ 150,000" or "US$ 50,000"
  timeline: string; // e.g. "En los próximos 3 meses"
  personalInfo: {
    fullName: string;
    phoneNumber: string;
    email: string;
    district: string;
  };
}

export type AppStep =
  | 'intro'
  | 'method_1'
  | 'method_2'
  | 'method_3'
  | 'method_4'
  | 'method_decision'
  | 'quiz_1_operation'
  | 'quiz_2_property_type'
  | 'quiz_3_location'
  | 'quiz_4_expectation'
  | 'quiz_5_timeline'
  | 'quiz_6_contact'
  | 'success';

export interface Lead {
  id: string;
  createdAt: string;
  answers: QuizAnswers;
}
