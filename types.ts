
export interface KPI {
  id: string;
  label: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
}

export interface Department {
  id: string;
  name: string;
  head: string;
  members: number;
  status: 'Active' | 'Inactive';
}

export interface ChartData {
  name: string;
  value: number;
  secondaryValue?: number; // e.g. Thursday vs Sunday
}

export interface ActivityLog {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  type: 'service' | 'event' | 'partnership' | 'admin';
}

export interface DepartmentRequest {
  id: string;
  department: string;
  requester: string;
  amount: string;
  reason: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export interface EventStats {
  attendees: number;
  firstTimers: number;
  soulsWon: number;
  students?: number; // Event only
  expenditure?: string; // Event only
  nextGen?: number; // Service only
}

export interface MinistryEvent {
  id: string;
  title: string;
  type: 'Service' | 'Event';
  date: string;
  time: string;
  location: string;
  description: string;
  stats: EventStats;
}

export interface User {
  id: string;
  name: string;
  role: string;
  departmentId?: string;
  // Credentials & Contact
  username?: string;
  password?: string;
  contact?: string;
  email?: string;
  // Logistics
  stationId?: string;
  eventId?: string; // Links coordinator to a specific event/operation
}

export interface Member {
  id: string;
  name: string;
  category: 'Member' | 'First Timer' | 'Guest';
  phone: string;
  status: 'Checked In' | 'Absent';
  checkInTime?: string;
  // Extended Fields
  gender?: 'Male' | 'Female';
  residency?: string;
  email?: string;
  occupation?: string;
  placeOfWork?: string;
  bornAgain?: 'Yes' | 'No';
  referralSource?: string;
  isPhanerooMember?: 'Yes' | 'No';
  // Analytics
  joinedDate?: string;
  attendedServiceIds?: string[];
}

export interface Child {
  id: string;
  name: string;
  parentName: string;
  parentContact: string;
  age: number;
  gender: 'Male' | 'Female';
  residence: string;
  allergies?: string;
  status: 'Checked In' | 'Checked Out' | 'Absent';
  checkInTime?: string;
  checkOutTime?: string;
  joinedDate: string;
  attendedServiceIds: string[];
}

export type JourneyStage = 'Onboarding' | 'Verifying' | 'RegApproval' | 'FinanceApproval' | 'Transit' | 'Arrived';

export interface VehicleFinance {
  ongoingDispatch: string;
  ongoingBalance: string;
  returnDispatch: string;
  returnBalance: string;
  processedAt?: string;
}

// Transportation Module Vehicle
export interface Vehicle {
  id: string;
  stationId: string;
  numberPlate: string;
  driverName: string;
  driverContact: string;
  driverNin?: string; // Added field
  type: 'Car' | 'Taxi' | 'Coaster' | 'Bus';
  coordinator: string;
  timeArrival: string;
  passengerCount?: number;
  status?: 'Pending' | 'Approved'; // Legacy status
  
  // New Journey Fields
  journeyDirection?: 'Ongoing' | 'Return';
  currentStage?: JourneyStage;
  approvals?: {
    registration: 'Pending' | 'Approved';
    finance: 'Pending' | 'Approved';
  };
  location?: { lat: number; lng: number }; // For map simulation
  financeDetails?: VehicleFinance;
}

// Parking Module Vehicle
export interface PersonalVehicle {
  id: string;
  numberPlate: string;
  driverName: string;
  driverContact: string;
  status: 'Checked In' | 'Checked Out' | 'Absent';
  checkInTime?: string;
  checkOutTime?: string;
  currentServiceId?: string;
  registeredDate: string;
}

export interface Passenger {
  id: string;
  vehicleId: string;
  category: 'Member' | 'Student' | 'Institution';
  name: string;
  contact: string;
  residence: string;
  isFirstTime: 'Yes' | 'No';
  verified?: boolean;
  // Student Specifics
  school?: string;
  studentClass?: string;
  boardingType?: 'Day' | 'Boarding';
  gender?: 'Male' | 'Female';
}

export interface PickUpStation {
  id: string;
  name: string;
  location: string;
  registeredAttendees: number;
  vehicleStatus: 'Pending' | 'Arrived' | 'In Transit';
  eventId: string;
  dataEntrantId?: string;
}

export interface Transaction {
  id: string;
  type: 'Income' | 'Expense';
  category: string;
  amount: number;
  description: string;
  date: string;
  eventId?: string;
  method: 'Cash' | 'Mobile Money' | 'Bank';
}

export interface ManifestDetails {
  name: string;
  contact: string;
  address: string;
  description: string;
  logoUrl?: string;
  coordinates?: { lat: number; lng: number };
  currency?: string;
}

export enum ModalType {
  NONE,
  CREATE_SERVICE,
  CREATE_EVENT,
  CREATE_PARTNERSHIP,
  ASSIGN_USER,
  SET_TARGETS,
  AI_INSIGHTS,
  CREATE_USER
}
