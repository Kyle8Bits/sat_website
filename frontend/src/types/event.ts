export interface EventType {
  school: string;
  date: string;
  headcount: string;
  lunch: boolean;
  group: string;
  status: 'stand-by' | 'sharing' | 'campus-tour' | 'lunch' | 'farewell' | 'dont' | 'idle';
  type?: 'HST' | 'PID' | 'AD' | 'ED';
}