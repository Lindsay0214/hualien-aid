const API_BASE_URL = "https://guangfu250923.pttapp.cc";

export async function fetchAPI<T>(
  endpoint: string,
  params?: Record<string, string | number>
): Promise<T> {
  const url = new URL(`${API_BASE_URL}${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export interface ShowerStations {
  id: string;
  name: string;
  location: string;
  phone: string;
  status: string;
  facilities: string | null;
  notes: string | null;
  opening_hours: string | null;
  is_free: boolean;
  coordinates: {
    lat: number;
    lng: number;
  } | null;
  created_at: number;
  updated_at: number;
}

export interface ShowerStationsResponse {
  "@context": string;
  "@type": string;
  limit: number;
  member: ShowerStations[];
  next: string | null;
  offset: number;
  previous: string | null;
  totalItems: number;
}

export async function getShowerStations(
  limit: number = 50,
  offset: number = 0
): Promise<ShowerStationsResponse> {
  return fetchAPI<ShowerStationsResponse>("/shower_stations", { limit, offset });
}

export interface WaterRefillStations {
  id: string;
  name: string;
  location: string;
  phone: string;
  status: string;
  facilities: string | null;
  notes: string | null;
  opening_hours: string | null;
  is_free: boolean;
  coordinates: {
    lat: number;
    lng: number;
  } | null;
  created_at: number;
  updated_at: number;
}

export interface WaterRefillStationsResponse {
  "@context": string;
  "@type": string;
  limit: number;
  member: WaterRefillStations[];
  next: string | null;
  offset: number;
  previous: string | null;
  totalItems: number;
}

export async function getWaterRefillStations(
  limit: number = 50,
  offset: number = 0
): Promise<ShelterResponse> {
  return fetchAPI<ShelterResponse>("/water_refill_stations", { limit, offset });
}

export interface Shelter {
  id: string;
  name: string;
  location: string;
  phone: string;
  link: string | null;
  status: string;
  capacity: number | null;
  current_occupancy: number | null;
  available_spaces: number | null;
  facilities: string[] | null;
  contact_person: string;
  notes: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  opening_hours: string | null;
  created_at: number;
  updated_at: number;
}

export interface ShelterResponse {
  "@context": string;
  "@type": string;
  limit: number;
  member: Shelter[];
  next: string | null;
  offset: number;
  previous: string | null;
  totalItems: number;
}

export async function getShelters(
  limit: number = 50,
  offset: number = 0
): Promise<ShelterResponse> {
  return fetchAPI<ShelterResponse>("/shelters", { limit, offset });
}

export interface MedicalStation {
  id: string;
  station_type: string;
  name: string;
  location: string;
  detailed_address: string;
  phone: string;
  contact_person: string;
  status: string;
  services: string[];
  operating_hours: string;
  equipment: string[];
  medical_staff: number;
  daily_capacity: number;
  coordinates: {
    lat: number;
    lng: number;
  } | null;
  affiliated_organization: string;
  notes: string;
  link: string;
  created_at: number;
  updated_at: number;
}

export interface MedicalStationResponse {
  "@context": string;
  "@type": string;
  limit: number;
  member: MedicalStation[];
  next: string | null;
  offset: number;
  previous: string | null;
  totalItems: number;
}

export async function getMedicalStations(
  limit: number = 50,
  offset: number = 0
): Promise<MedicalStationResponse> {
  return fetchAPI<MedicalStationResponse>("/medical_stations", {
    limit,
    offset,
  });
}

export interface MentalHealthResource {
  id: string;
  duration_type: string;
  name: string;
  service_format: string;
  service_hours: string;
  contact_info: string;
  website_url: string;
  target_audience: string[];
  specialties: string[];
  languages: string[];
  is_free: boolean;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  } | null;
  status: string;
  capacity: number;
  waiting_time: string;
  notes: string;
  emergency_support: boolean;
  created_at: number;
  updated_at: number;
}

export interface MentalHealthResourceResponse {
  "@context": string;
  "@type": string;
  limit: number;
  member: MentalHealthResource[];
  next: string | null;
  offset: number;
  previous: string | null;
  totalItems: number;
}

export async function getMentalHealthResources(
  limit: number = 50,
  offset: number = 0
): Promise<MentalHealthResourceResponse> {
  return fetchAPI<MentalHealthResourceResponse>("/mental_health_resources", {
    limit,
    offset,
  });
}
