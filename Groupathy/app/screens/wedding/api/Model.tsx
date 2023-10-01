export interface WeddingEvent {
  key: number;
  event: string;
  date: string;
  venue: string;
  time: string;
  budget: number;
}

// Define the response format
export interface WeddingPlanningResponse {
  
  events: WeddingEvent[];
}