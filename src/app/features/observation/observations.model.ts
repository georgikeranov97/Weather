export interface Observation {
  id: number;
  location: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  precipitation: number;
  pressure: number;
  conditions: string;
  time: string;
  date: string;
}
